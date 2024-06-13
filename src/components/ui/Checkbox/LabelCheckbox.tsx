import { CheckboxProps, Flex, chakra, useCheckbox } from "@chakra-ui/react";
import { cn } from "../../../utils/utils";

export const LabelCheckbox = (
  props: { alwayChecked?: boolean } & CheckboxProps,
) => {
  const { state, getCheckboxProps, getInputProps, getLabelProps, htmlProps } =
    useCheckbox({ ...props });

  return (
    <chakra.label
      className={cn(
        "mt-[25px] pointer px-4 py-[11px] border border-[#E7E7E7] rounded-lg text-[#424242]",
        state.isChecked || props?.alwayChecked
          ? "bg-[#f6fef9] border-[#039855] "
          : "",
      )}
      display="flex"
      flexDirection="row"
      alignItems="center"
      gridColumnGap={2}
      rounded="lg"
      cursor="pointer"
      {...htmlProps}
    >
      <input {...getInputProps()} hidden />
      {/* Checkbox icon */}
      <Flex
        alignItems="center"
        justifyContent="center"
        borderColor="green.500"
        {...getCheckboxProps()}
      >
        {state.isChecked || props?.alwayChecked ? (
          <svg
            width="30"
            height="30"
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.75 6.25C7.37 6.25 6.25 7.37 6.25 8.75V21.25C6.25 22.63 7.37 23.75 8.75 23.75H21.25C22.63 23.75 23.75 22.63 23.75 21.25V8.75C23.75 7.37 22.63 6.25 21.25 6.25H8.75ZM13.75 19.2675L10.3663 15.8837L12.1337 14.1163L13.75 15.7325L18.4913 10.9913L20.2588 12.7587L13.75 19.2675Z"
              fill="#027A48"
            />
          </svg>
        ) : (
          <svg
            width="30"
            height="30"
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.75 6.25C7.37125 6.25 6.25 7.37125 6.25 8.75V21.25C6.25 22.6287 7.37125 23.75 8.75 23.75H21.25C22.6287 23.75 23.75 22.6287 23.75 21.25V8.75C23.75 7.37125 22.6287 6.25 21.25 6.25H8.75ZM8.75 21.25V8.75H21.25L21.2525 21.25H8.75Z"
              fill="#C1C1C1"
            />
          </svg>
        )}
      </Flex>
      {/* Checkbox right side label */}
      <div
        {...getLabelProps({
          onClick: (e) => {
            props?.alwayChecked && e.preventDefault();
          },
        })}
        className="w-full"
      >
        {props.children}
      </div>
    </chakra.label>
  );
};
