import { SelectComponent } from "./Select";
import data from "./CountryCodeData.json";
import { useState } from "react";
import { Input } from "../Input";

export const CountryRegionSelect = () => {
  const [selected, setSelected] = useState<
    { label: string; value: string } | undefined
  >();
  return (
    <>
      <SelectComponent
        onChange={(e) => {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          setSelected(e as any);
        }}
        options={data.map(
          (item: { countryName: string; countryShortCode: string }) => ({
            value: item.countryShortCode,
            label: item.countryName,
          }),
        )}
        styles={{
          control: (base) => ({
            ...base,
            height: 42,
            minHeight: 42,
            border: "1px solid #E7E7E7",
            cursor: "pointer",
            borderRadius: "8px",
            borderEndStartRadius: selected?.value === "US" ? "0px" : "8px",
            borderEndEndRadius: selected?.value === "US" ? "0px" : "8px",
            ":hover": {
              border: "1px solid #E7E7E7",
            },
          }),
        }}
        components={{ IndicatorSeparator: () => null }}
        placeholder="United States"
      />
      {selected?.value === "US" && (
        <Input
          name="zipcode"
          placeholder="ZIP code"
          className="w-full rounded-t-none border-t-0"
        />
      )}
    </>
  );
};
