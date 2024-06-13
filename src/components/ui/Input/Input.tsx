import { InputHTMLAttributes } from "react";
import { cn } from "../../../utils/utils";

type InputProps = {
  className?: string;
  placeholder?: string;
} & InputHTMLAttributes<unknown>;

export const Input = ({ className, placeholder, ...field }: InputProps) => {
  return (
    <input
      type="text"
      {...field}
      placeholder={placeholder}
      className={cn(
        "px-3 md:px-[16px] py-2 rounded-lg border border-[#E7E7E7]",
        "placeholder:text-base",
        className,
      )}
    />
  );
};
