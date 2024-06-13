import { useEffect } from "react";
import { useStore } from "../../libs/store";
import { Link } from "react-router-dom";
import { Text, Button } from "@chakra-ui/react";
import NextIcon from "../NextIcon";

export const SalesButton = () => {
  const { salesExpire } = useStore();

  useEffect(() => {}, [salesExpire]);

  return (
    <div className="flex flex-col items-center justify-center px-24">
      <Link to="/checkout">
        <Button
          height="49px"
          py="12px"
          px="24px"
          background="primary"
          _hover={{
            background: "primary-dark",
          }}
          color="#fff"
          borderRadius="14px"
          fontSize="20px"
          display="flex"
          alignItems="center"
        >
          <Text mx="10px">Get instant access to the fast-start</Text>{" "}
          <NextIcon />
        </Button>
      </Link>
      <div className="font-semibold">
        <p className="flex justify-center w-full m-2">
          Only ${parseInt(localStorage.getItem("salesExpire") || "") ? `7.00` : `3.00`}
          &nbsp;
          <span className="line-through text-gray-400">$39.00</span>
          &nbsp;
          {parseInt(localStorage.getItem("salesExpire") || "")
            ? `as of ${Date().toString().slice(4, 10)}`
            : `before results expire`}
        </p>
      </div>
    </div>
  );
};

export default SalesButton;
