import { Box } from "@chakra-ui/react";
import FastStartHeadLine from "../FastStartHeadLine";
import FastStartProduct from "../FastStartProduct";
import { FastStartProductType } from "../../pages/fast-start";

type FastStartProductsProps = {
  products: FastStartProductType[];
  headline: string;
};

const FastStartProducts = ({ products, headline }: FastStartProductsProps) => {
  const getProductBadgeColor = (badge: string) => {
    if (badge === "Purchased") {
      return "linear-gradient(97.66deg, #F79009 -6.61%, #DC6803 114%)";
    } else if (badge === "Free Bonus") {
      return "linear-gradient(97.66deg, #21C271 -6.61%, #039855 114%);";
    }

    return "linear-gradient(97.66deg, #7E7E7E -6.61%, #565656 114%)";
  };

  return (
    <>
      <FastStartHeadLine text={headline} />

      <Box py="5px" pl="25px" background="#fff" borderRadius="18px">
        {products.map((product, index) => {
          const borderBottom =
            index < products.length - 1 ? "1px solid #EAECF0" : "none";
          const badgeColor = getProductBadgeColor(product.badge);

          return (
            <FastStartProduct
              product={product}
              borderBottom={borderBottom}
              badgeColor={badgeColor}
              key={product.title}
            />
          );
        })}
      </Box>
    </>
  );
};

export default FastStartProducts;
