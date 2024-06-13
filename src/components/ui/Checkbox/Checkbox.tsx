import { CheckboxProps, Flex, chakra, useCheckbox } from "@chakra-ui/react";

export const CheckBox = (props: CheckboxProps) => {
  const { state, getCheckboxProps, getInputProps, getLabelProps, htmlProps } =
    useCheckbox(props);

  return (
    <chakra.label
      display="flex"
      flexDirection="row"
      alignItems="center"
      gridColumnGap={2}
      rounded="lg"
      cursor="pointer"
      {...htmlProps}
    >
      <input {...getInputProps()} hidden />
      <Flex
        alignItems="center"
        justifyContent="center"
        borderColor="green.500"
        {...getCheckboxProps()}
      >
        {state.isChecked ? (
          <svg
            width="22"
            height="22"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2.75 0.25C1.37 0.25 0.25 1.37 0.25 2.75V15.25C0.25 16.63 1.37 17.75 2.75 17.75H15.25C16.63 17.75 17.75 16.63 17.75 15.25V2.75C17.75 1.37 16.63 0.25 15.25 0.25H2.75ZM7.75 13.2675L4.36625 9.88375L6.13375 8.11625L7.75 9.7325L12.4913 4.99125L14.2588 6.75875L7.75 13.2675Z"
              fill="#027A48"
            />
          </svg>
        ) : (
          <svg
            width="22"
            height="22"
            viewBox="0 0 22 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3.5 0.5C1.8455 0.5 0.5 1.8455 0.5 3.5V18.5C0.5 20.1545 1.8455 21.5 3.5 21.5H18.5C20.1545 21.5 21.5 20.1545 21.5 18.5V3.5C21.5 1.8455 20.1545 0.5 18.5 0.5H3.5ZM3.5 18.5V3.5H18.5L18.503 18.5H3.5Z"
              fill="#C1C1C1"
            />
          </svg>
        )}
      </Flex>
      <div {...getLabelProps()} className="w-full">
        {props.children}
      </div>
    </chakra.label>
  );
};
