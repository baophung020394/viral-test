import { Heading } from "@chakra-ui/react";

const SalesTextHeading = ({
  data,
  header,
  headerHtml,
}: {
  data?: string[];
  header?: string;
  headerHtml?: string[];
}) => {
  return (
    <>
      <div className="md:w-1/2 w-full lg:px-20 px-12">
        {headerHtml && (
          <div
            dangerouslySetInnerHTML={{ __html: headerHtml }}
            className="text-center text-4xl font-bold mb-12 -mt-3 leading-normal"
          ></div>
        )}
        {header && (
          <Heading
            className="text-4xl"
            mb={{ base: "42px", md: "48px" }}
            //   lineHeight={{ base: "37.95px", md: "60.72px" }}
            fontWeight={900}
            textAlign="center"
            letterSpacing="-1%"
            fontFamily="CircularStd"
          >
            {header}
          </Heading>
        )}
      </div>
      {data && <div
        dangerouslySetInnerHTML={{ __html: data || "" }}
        className="text-xl lg:px-52 md:px-20 px-12 md:w-3/5 ml-8 flex flex-col -mt-5 mb-12 gap-y-3"
      ></div>}
    </>
  );
};

export default SalesTextHeading;
