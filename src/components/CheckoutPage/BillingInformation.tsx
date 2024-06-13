import { Box } from "@chakra-ui/react";
import {
  AMEXIcon,
  BankingIcon,
  JCBIcon,
  MasterCardIcon,
  VisaIcon,
} from "../../assets/icons";
import ApplePayButton from "../ApplePayButton";
import GooglePayButton from "../GooglePayButton";
import { GraySection, Input } from "../ui";
import { CountryRegionSelect } from "../ui/Select/CountryRegionSelect";
import { useCheckout } from "../../providers/CheckoutProvider";
import { Controller } from "react-hook-form";
import InputErrorMessage from "../InputErrorMessage";
import ThreeDotsLoading from "../ThreeDotsLoading";

type BillingInformationProps = {
  amount: number;
};

export const BillingInformation = ({ amount }: BillingInformationProps) => {
  const { control, errors, isValid, isProcessing } = useCheckout();

  return (
    <GraySection
      className="mt-[25px]"
      label="Billing Information"
      icon={<BankingIcon />}
    >
      <Box
        as="button"
        type="submit"
        className={`h-[40px] w-full ${
          isValid ? "" : "opacity-50 pointer-events-none"
        }`}
        // Do not remove this onClick
        onClick={(e: React.MouseEvent<HTMLDivElement, MouseEvent>) =>
          e.preventDefault()
        }
      >
        <ApplePayButton amount={amount} />
        <GooglePayButton amount={amount} />
      </Box>

      <div className="flex items-center justify-center gap-[13px] mt-[25px]">
        <div className="w-full h-[1px] bg-[#E7E7E7]"></div>
        <span className="text-14 md:text-16 font-bold-450 text-nowrap">
          Or pay with card
        </span>
        <div className="w-full h-[1px] bg-[#E7E7E7]"></div>
      </div>
      <div className="mt-[25px]">
        <p className="text-15 font-medium">Card information</p>
        <div className="mt-[6px]">
          <div className="relative">
            <Controller
              name="ccnumber"
              control={control}
              render={({ field }) => (
                <Input
                  {...field}
                  className="w-full pr-[200px] rounded-b-none"
                  placeholder="1234 1234 1234 1234"
                />
              )}
            />

            <div className="absolute right-0 top-0 py-2 pr-2 flex gap-[10px]">
              <div className=" border-[#D6DCE5] border rounded-lg bg-white py-2 px-[6px] w-[40px] h-[26px]">
                <VisaIcon />
              </div>
              <div className=" border-[#D6DCE5] border rounded-lg bg-white py-[6px] md:py-2 px-[6px] w-[40px] h-[26px] flex items-center justify-center">
                <MasterCardIcon />
              </div>
              <div className=" border-[#D6DCE5] border rounded-lg bg-white py-[6px] md:py-2 px-[6px] w-[40px] h-[26px] flex items-center justify-end pr-0">
                <AMEXIcon />
              </div>
              <div className=" border-[#D6DCE5] border rounded-lg bg-white py-[6px] md:py-2 px-[6px] w-[40px] h-[26px] flex items-center justify-center">
                <JCBIcon />
              </div>
            </div>
          </div>
          <div className="flex">
            <Controller
              name="ccexp"
              control={control}
              render={({ field }) => (
                <Input
                  {...field}
                  className={`rounded-t-none rounded-r-none border-t-0 border-r-0 w-full ${
                    errors.ccexp && "border-red-400"
                  }`}
                  placeholder="MM / YY"
                />
              )}
            />

            <Controller
              name="cvv"
              control={control}
              render={({ field }) => (
                <Input
                  {...field}
                  className={`rounded-t-none rounded-l-none border-t-0 w-full ${
                    errors.cvv && "border-red-400"
                  }`}
                  placeholder="CVC"
                />
              )}
            />
          </div>
          {errors.ccnumber && (
            <InputErrorMessage message={errors.ccnumber.message as string} />
          )}
        </div>

        {isProcessing && (
          <div className="flex justify-center items-center mt-4">
            <ThreeDotsLoading />
          </div>
        )}

        <div className="mt-[25px]">
          <p className="text-15 font-medium">Country or region</p>
          <div className="mt-[6px]">
            <CountryRegionSelect />
          </div>
        </div>
        <div className="h-[1px] bg-[#E7E7E7] my-[25px]"></div>
        <div className="flex gap-[11px] items-center">
          <img
            src="/images/safe-checkout.png"
            alt="safe checkout"
            className="w-[74px] h-[58px] my-[14px]"
          />
          <div className=" relative">
            <div className="absolute w-[221px] h-[40px] top-0 left-1/2 -translate-x-1/2">
              <img
                src="/images/secure-checkout.png"
                alt="secure checkout"
                className="object-contain"
              />
            </div>
            <div className="mt-[17px] border border-[#E7E7E7] p-[10px] pt-8 rounded-lg flex gap-4">
              <div className="border-[#D6DCE5] border rounded-lg py-2 px-[6px] flex items-center justify-center">
                <img src="/images/visa-logo.png" alt="visa logo" />
              </div>

              <div className="border-[#D6DCE5] border rounded-lg py-2 px-[6px] flex items-center justify-center">
                <img src="/images/mastercard-logo.png" alt="mastercard logo" />
              </div>
              <div className="border-[#D6DCE5] border rounded-lg py-2 px-[6px] flex items-center justify-center">
                <img
                  src="/images/american-express.png"
                  alt="american express logo"
                />
              </div>
              <div className="border-[#D6DCE5] border rounded-lg py-2 px-[6px] flex items-center justify-center">
                <img src="/images/stripe.png" alt="stripe logo" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </GraySection>
  );
};
