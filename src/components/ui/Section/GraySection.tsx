import { ReactNode } from "react";
import { cn } from "../../../utils/utils";

export const GraySection = ({
  label,
  icon,
  children,
  className,
}: {
  label?: string;
  icon?: ReactNode;
  children?: ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "bg-[#F9FAFB] border rounded-[20px] border-[#E7E7E7] p-[15px] md:p-[25px]",
        className,
      )}
    >
      {label && (
        <div className="flex gap-3 items-center border-b border-[#E7E7E7] pb-[10px]">
          {icon}
          <span className="font-semibold text-18">{label}</span>
        </div>
      )}
      {children}
    </div>
  );
};
