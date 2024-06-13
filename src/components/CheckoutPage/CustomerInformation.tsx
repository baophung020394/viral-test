import { Control, Controller, FieldErrors } from "react-hook-form";
import { UserIcon } from "../../assets/icons";
import {
  CountryCodeSelect,
  GraySection,
  Input,
  PHONE_REGEX,
  PhoneNumberInput,
} from "../ui";
import { EMAIL_REGEX, EmailInput } from "../ui/Input/EmailInput";
import InputErrorMessage from "../InputErrorMessage";
import { CheckoutInputs } from "../../types/type";
import { useState } from "react";

type CustomerInformationProps = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  control: Control<CheckoutInputs, any>;
  errors: FieldErrors<CheckoutInputs>;
};

export const CustomerInformation = ({
  control,
  errors,
}: CustomerInformationProps) => {
  const [isValidEmail, setValidEmail] = useState<boolean>(true);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isValidPhoneNumber, setValidPhoneNumber] = useState<boolean>(true);

  return (
    <>
      <GraySection label="Customer Information" icon={<UserIcon />}>
        <div className="pt-[25px]">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="capitalize">First name</p>
              <Controller
                name="firstName"
                control={control}
                rules={{ required: "First Name is required" }}
                render={({ field }) => (
                  <Input
                    {...field}
                    className="mt-[6px] w-full"
                    placeholder="First Name"
                  />
                )}
              />
              {errors.firstName && (
                <InputErrorMessage
                  message={errors.firstName.message as string}
                />
              )}
            </div>

            <div>
              <p className="capitalize">Last name</p>
              <Controller
                name="lastName"
                control={control}
                rules={{ required: "Last Name is required" }}
                render={({ field }) => (
                  <Input
                    {...field}
                    className="mt-[6px] w-full"
                    placeholder="Last Name"
                  />
                )}
              />

              {errors.lastName && (
                <InputErrorMessage
                  message={errors.lastName.message as string}
                />
              )}
            </div>
          </div>

          <div className="mt-4">
            <p className="capitalize">Email Address</p>
            <Controller
              name="email"
              control={control}
              rules={{
                required: "Email is required",
                pattern: EMAIL_REGEX,
                onChange: (e) => {
                  setValidEmail(EMAIL_REGEX.test(e.target.value));
                },
              }}
              render={({ field }) => (
                <EmailInput
                  {...field}
                  className="mt-[6px] w-full bg-white"
                  placeholder="Email Address"
                  isValidEmail={isValidEmail}
                />
              )}
            />
          </div>

          <div className="mt-4">
            <p className="capitalize">Phone</p>
            <div className="flex gap-2 mt-[6px]">
              <CountryCodeSelect name="countryCode" />
              <Controller
                name="phone"
                control={control}
                rules={{
                  required: "Phone is required",
                  pattern: PHONE_REGEX,
                  value: phoneNumber,
                  onChange: (e) => {
                    setPhoneNumber(e.target.value);
                    setValidPhoneNumber(PHONE_REGEX.test(e.target.value));
                  },
                }}
                render={({ field }) => (
                  <PhoneNumberInput
                    {...field}
                    placeholder="Phone number (for fast-start updates)"
                    isValidPhoneNumber={isValidPhoneNumber}
                  />
                )}
              />
            </div>
            {errors.phone && (
              <InputErrorMessage message={errors.phone.message as string} />
            )}
          </div>
        </div>
      </GraySection>
    </>
  );
};
