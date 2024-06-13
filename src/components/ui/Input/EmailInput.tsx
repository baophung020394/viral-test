import { cn } from "../../../utils/utils";
import InputErrorMessage from "../../InputErrorMessage";

export const EMAIL_REGEX =
  /^\s*[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+\s*$/;

type EmailInputProps = {
  className?: string;
  placeholder?: string;
  isValidEmail?: boolean;
};

export const EmailInput = ({
  className,
  placeholder,
  isValidEmail,
  ...field
}: EmailInputProps) => {
  return (
    <div className="relative w-full">
      {!isValidEmail && (
        <InputErrorMessage
          className="absolute right-0 -translate-y-full"
          message="Invalid mail address"
        />
      )}
      <input
        {...field}
        type="email"
        className={cn(
          "px-[16px] py-2 rounded-lg border border-[#E7E7E7] w-full placeholder:text-base",
          className,
          !isValidEmail && "!border-[red] focus:!border-red",
        )}
        placeholder={placeholder}
      />
    </div>
  );
};
