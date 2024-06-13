import { ReactNode } from "react";

export const Modal = ({
  children,
  open,
}: {
  open?: boolean;
  children: ReactNode;
}) => {
  if (!open) {
    document.body.style.overflow = "auto";
    return;
  }

  document.body.style.overflow = "hidden";

  return (
    <>
      <div className="bg-[#FFFFFF] opacity-90 fixed w-full h-[100vh] z-[99999999] top-0"></div>
      <div className="fixed z-[999999999] flex justify-center items-center w-full h-[100vh]">
        {children}
      </div>
    </>
  );
};
