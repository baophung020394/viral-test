import IntlTelInput from "intl-tel-input/react";
import "intl-tel-input/styles";

export const TelInput = ({ countryCode }: { countryCode?: string }) => {
  return (
    <>
      <IntlTelInput
        initOptions={{
          initialCountry: countryCode || "us",
          utilsScript: "/intl-tel-input/js/utils.js?1716383386062",
        }}
      />
    </>
  );
};
