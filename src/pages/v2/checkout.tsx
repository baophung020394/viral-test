import { EmptySection } from "../../assets/icons";
import Footer from "../../components/shared/Footer";
import {
  BillingInformation,
  CheckoutHeader,
  CheckoutSteps,
  ChooseYourPrice,
  CustomerInformation,
  GuarantyDays,
  MostPopularOption,
  SummaryPrice,
} from "../../components/CheckoutPage";
import { CheckboxGroup } from "@chakra-ui/react";
import { useCheckout } from "../../providers/CheckoutProvider";
import { Modal } from "../../components/ui/Modal/Modal";
import { ProgressBar } from "../../components/ui/ProgressBar/ProgressBar";
import { FlagDetection } from "../../components/ui";
import { useEffect, useMemo, useState } from "react";

const CheckoutPage = () => {
  const {
    control,
    errors,
    optionValues: value,
    getCheckboxProps,
  } = useCheckout();
  const [modal, setShowModal] = useState<boolean>(true);
  const [textIndex, setTextIndex] = useState<number>(0);
  const [progress, setProgress] = useState(20);

  const amount = value.reduce(
    (acc, option) => Number(acc) + Number(option),
    0,
  ) as number;

  const getRandomInterval = () => {
    return Math.floor(Math.random() * 2000) + 1000; // Random interval between 1000ms and 6000ms
  };

  const textList = useMemo(
    () => [
      "Checking for available spots...",
      "Searching for discounted spots...",
      "Limited discounted spots available.",
      "Congratulations, your discount has been applied!",
    ],
    [],
  );

  useEffect(() => {
    const wrapper = (textIndexWrap: number) => {
      return () => {
        const isEnd = textIndexWrap === textList.length - 1;

        if (isEnd) {
          setProgress(110);
          setTimeout(() => setShowModal(false), 2000);
        } else {
          setTextIndex((prev) => prev + 1);
          setProgress((prev) => (isEnd ? 100 : prev + 15));
          const interval = getRandomInterval();
          timer = setTimeout(wrapper(textIndexWrap + 1), interval);
        }
      };
    };

    let timer = setTimeout(wrapper(0), getRandomInterval());

    return () => {
      setShowModal(false);
      clearTimeout(timer);
    }; // Cleanup timeout on component unmount
  }, []);

  return (
    <>
      <Modal open={modal}>
        <div className="flex justify-center flex-col items-center">
          <FlagDetection />
          <p className="text-32 md:text-40 font-black mt-[39px] text-center">
            {textList[textIndex]}
          </p>
          <ProgressBar className="mt-[25px]" progress={progress} />
        </div>
      </Modal>
      <form>
        <CheckboxGroup colorScheme="green" defaultValue={["5_day_start"]}>
          <CheckoutHeader />
          <CheckoutSteps />

          <div className="mt-[25px] container-1200 mb-[100px]">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {/* left/top column */}
              <div className="p-2">
                <CustomerInformation control={control} errors={errors} />
                <ChooseYourPrice getCheckboxProps={getCheckboxProps} />
                <BillingInformation amount={amount} />
                <GuarantyDays />
              </div>
              {/* right/bottom column */}
              <div className="p-2">
                <div className="overflow-hidden">
                  <p className="font-black text-28 mb-6">
                    Here’s what you’re getting
                  </p>
                  <EmptySection />
                </div>
                <MostPopularOption getCheckboxProps={getCheckboxProps} />
                <SummaryPrice />
              </div>
            </div>
          </div>
        </CheckboxGroup>
        <Footer />
      </form>
    </>
  );
};

export default CheckoutPage;
