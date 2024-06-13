import { useForm } from "react-hook-form";
import { ArrowToRight } from "../assets/icons";
import Footer from "../components/shared/Footer";
import EmailDomainSuggestion from "../components/EmailDomainSuggestion";
import { useState } from "react";
import { useToast } from "@chakra-ui/react";

type FormData = {
  fullName: string;
  email: string;
};

export const WaitListPage = () => {
  const toast = useToast();
  const { handleSubmit, register, watch, setValue, reset } =
    useForm<FormData>();
  const [showEmailSuggestions, setShowEmailSuggestions] = useState(false);
  const emailWatch = watch("email");

  watch((data, { name }) => {
    setShowEmailSuggestions(
      name === "email" && !!data?.email && !data?.email?.includes("@"),
    );
  });

  const onSubmitForm = (data: unknown) => {
    console.log(data);
    toast({
      title: "Submit successfully",
      description: "We will contact you soon.",
      status: "success",
      duration: 4000,
      position: "top-right",
      isClosable: true,
    });
    reset();
  };

  const handleOnClickLogin = () => {
    window.location.href =
      "https://www.skool.com/faceless-income-accelerator-3767";
  };

  return (
    <>
      <div className="bg-lightPink h-[100vh] min-h-[600px]">
        <div className="max-w-[1280px] ml-auto mr-auto w-full px-5">
          <div className="flex justify-between py-4 items-center">
            <a
              href="/"
              className="font-Benzin_bold font-normal text-sm md:text-base w-fit"
            >
              VIRAL PROFITS
            </a>
            <div
              className="text-xl bg-white px-[10px] md:px-3 py-1 md:py-2 rounded-lg w-fit flex gap-1 shadow-btnBlackBackground cursor-pointer"
              onClick={handleOnClickLogin}
            >
              <span className="hidden md:inline text-sm font-bold">
                Log in as a member
              </span>
              <ArrowToRight />
            </div>
          </div>

          <div className="bg-white rounded-full w-fit border border-[#E6E6E6] mt-8 md:mt-28 ml-auto mr-auto">
            <p className="px-[20px] py-[10px] font-bold text-sm md:text-lg">
              Thank you for your support
            </p>
          </div>

          <div className="mt-5 md:mt-8 text-4xl md:text-5xl font-black text-center">
            ENROLLMENT IS CLOSED
          </div>

          <div className="font-normal text-xl md:text-[22px] text-center max-w-[667px] ml-auto mr-auto mt-5">
            Please leave your email here so we can put you on the waiting list &
            you'll be the first to know when the doors open again.
          </div>

          <div className="mt-8 max-w-[500px] ml-auto mr-auto">
            <form
              onSubmit={handleSubmit(onSubmitForm)}
              className="flex flex-col gap-4"
            >
              <input
                placeholder="Full Name"
                className="py-3 px-5 rounded-xl text-sm text-[#888888] border border-[#EAECF0]"
                {...register("fullName")}
              />
              <input
                type="email"
                placeholder="Email Address"
                className="py-3 px-5 rounded-xl text-sm text-[#888888] border border-[#EAECF0]"
                onFocus={() => {
                  setShowEmailSuggestions(
                    !!emailWatch && !emailWatch?.includes("@"),
                  );
                }}
                {...register("email", { required: "Email is required" })}
              />

              <div className="relative">
                {showEmailSuggestions && (
                  <EmailDomainSuggestion
                    email={emailWatch}
                    onEmailSuggestionClick={(email) => {
                      setValue("email", email);
                      setShowEmailSuggestions(false);
                    }}
                  />
                )}
              </div>
              <button
                type="submit"
                className="bg-[#D92D20] text-white text-center py-4 rounded-xl uppercase font-bold text-xl"
              >
                Join the waitlist!
              </button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
