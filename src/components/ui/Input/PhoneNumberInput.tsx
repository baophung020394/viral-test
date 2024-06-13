import { cn } from "../../../utils/utils";

export const PHONE_REGEX = /^[0-9]{10}$/;

type PhoneNumberInputProps = {
  className?: string;
  placeholder?: string;
  isValidPhoneNumber?: boolean;
};

export const PhoneNumberInput = ({
  className,
  placeholder,
  isValidPhoneNumber,
  ...field
}: PhoneNumberInputProps) => {
  return (
    <div className="relative w-full">
      {!isValidPhoneNumber && (
        <div className="text-red-600 absolute right-0 -translate-y-full">
          Invalid phone number
        </div>
      )}
      <input
        {...field}
        type="tel"
        className={cn(
          "px-[16px] py-2 rounded-lg border border-[#E7E7E7] w-full placeholder:text-base",
          !isValidPhoneNumber && "!border-[red] focus:!border-red",
          className,
        )}
        placeholder={placeholder}
        aria-invalid={!isValidPhoneNumber}
      />
    </div>
  );
};
