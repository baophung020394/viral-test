import { Stack, Stepper, useSteps } from "@chakra-ui/react";
import { NumberStep } from "../ui/NumberStep";

const steps: { title: string }[] = [
  { title: "Checkout" },
  { title: "Order Confirmation" },
  { title: "Instant Access" },
];

export const CheckoutSteps = () => {
  const { activeStep } = useSteps({
    index: 0,
    count: steps.length,
  });

  return (
    <div className="p-4 mt-[42px]">
      <div className="container-1200 max-w-[250px] min-w-[393px]:max-w-[310px] sm:max-w-[500px] lg:max-w-[800px]">
        <Stack>
          <Stepper size="sm" index={activeStep} gap="0">
            {steps.map((step, index) => {
              return (
                <NumberStep
                  index={index}
                  title={step.title}
                  isActive={index === activeStep}
                />
              );
            })}
          </Stepper>
        </Stack>
      </div>
    </div>
  );
};
