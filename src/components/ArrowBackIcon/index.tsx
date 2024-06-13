import React from "react";

interface ArrowBackIconProps {
  color: string;
  size: number;
  className?: string;
}

const ArrowBackIcon: React.FC<ArrowBackIconProps> = ({
  color,
  size,
  className,
}: ArrowBackIconProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M1.75 6.41681H10.2585L7.17092 3.32923L7.99575 2.50439L12.4915 7.00014L7.99575 11.4959L7.17092 10.6711L10.2585 7.58348H1.75V6.41681Z"
        fill={color}
      />
    </svg>
  );
};

export default ArrowBackIcon;
