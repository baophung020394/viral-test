import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

export const CountUpAnimation = ({
  symbol = "",
  number = "",
  duration = 2000,
}: {
  symbol?: string;
  number?: string;
  duration?: number;
}) => {
  const countTo = parseInt(number, 10);
  const [count, setCount] = useState(0);
  const easeOutQuad = (t: number) => t * (2 - t);
  const frameDuration = 1000 / 60;
  const { ref: myRef, inView: myElementIsVisible } = useInView();

  useEffect(() => {
    let frame = 0;
    const totalFrames = Math.round(duration / frameDuration);
    const counter = setInterval(() => {
      frame++;
      const progress = easeOutQuad(frame / totalFrames);
      setCount(countTo * progress);

      if (frame === totalFrames) {
        clearInterval(counter);
      }
    }, frameDuration);
  }, [myElementIsVisible]);

  return (
    <div ref={myRef}>
      <span className="tracking-[0.35rem] inline-block align-middle mt-1.5 text-white text-lg font-bold">
        {symbol && symbol}{Math.floor(count).toLocaleString()}
      </span>
    </div>
  );
};
