import { useMemo } from "react";
import { SelectComponent } from "./Select";
import { cn } from "../../../utils/utils";

export const CountryCodeSelect = ({
  name,
  className,
}: {
  name: string;
  className?: string;
}) => {
  const countryCodeOptions = useMemo(() => {
    return [
      {
        value: "America",
        label: <div>🇺🇸 +1</div>,
      },
      { value: "Vietnam", label: <div>🇻🇳 +84</div> },
      { value: "Australia", label: <div>🇦🇺 +61</div> },
      { value: "Azerbaijan", label: <div>🇦🇿 +994</div> },
    ];
  }, []);

  return (
    <SelectComponent
      defaultValue={countryCodeOptions[0]}
      className={cn("w-fit inline-block min-w-[100px]", className)}
      name={name}
      options={countryCodeOptions}
      styles={{
        control: (base) => ({
          ...base,
          height: 42,
          minHeight: 42,
          border: "1px solid #E7E7E7",
          cursor: "pointer",
          borderRadius: "8px",
          ":hover": {
            border: "1px solid #E7E7E7",
          },
        }),
      }}
      components={{
        IndicatorSeparator: () => null,
        DropdownIndicator: () => (
          <div className="pr-4">
            <svg
              width="8"
              height="5"
              viewBox="0 0 8 5"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.86198 0.195312L3.99998 3.05731L1.13798 0.195312L0.195312 1.13798L3.99998 4.94265L7.80465 1.13798L6.86198 0.195312Z"
                fill="#484848"
              />
            </svg>
          </div>
        ),
      }}
    />
  );
};
