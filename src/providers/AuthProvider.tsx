import Axios from "axios";
import axios from "../libs/axios";
import {
  PropsWithChildren,
  createContext,
  useContext,
  useLayoutEffect,
  useMemo,
  useState,
} from "react";
import Cookies from "js-cookie";

type User = {
  name: string;
  email: string;
};

type AuthContextValue = {
  user: User | null;
  isLoading: boolean;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
  checkAuth: () => Promise<void>;
};

const AuthContext = createContext<AuthContextValue | null>(null);

export const AuthProvider = ({ children }: PropsWithChildren) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useLayoutEffect(() => {
    checkAuth();
  }, []);

  const checkAuth = async () => {
    const token = Cookies.get("token");
    const userId = Cookies.get("userId");

    try {
      if (token) {
        Axios.defaults.headers.common["Authorization"] = token;
        Axios.defaults.headers.common["x-client-id"] = userId;

        const result = await axios.get("/user/me");
        setUser(result.data);
      } else {
        delete axios.defaults.headers.common["Authorization"];
        setUser(null);
      }

      setIsLoading(false);
    } catch (e) {
      console.log("Error", e);

      setUser(null);
      setIsLoading(false);
    }
  };

  const contextValue = useMemo(() => {
    return {
      user,
      isLoading,
      setUser,
      checkAuth,
    };
  }, [user, isLoading]);

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextValue => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used within a AuthProvider");
  }

  return context;
};
