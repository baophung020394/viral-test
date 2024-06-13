import { cn } from "../../../utils/utils";
import ct from "countries-and-timezones";
import "./flag.detection.css";
import { useMemo } from "react";
import { TelInput } from "../Input";

export const FlagDetection = ({ className }: { className?: string }) => {
  const countryCode = useMemo(() => {
    const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone; // native JS
    return ct.getTimezone(timeZone)?.countries?.[0];
  }, []);

  return (
    <div className={`country-flag-only ${cn(className)}`}>
      <TelInput countryCode={countryCode} />
    </div>
  );
};
