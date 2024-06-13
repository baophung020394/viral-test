import { useState, useEffect } from "react";
import { useStore } from "../../libs/store";

const Timer = () => {
  const { setSalesTimer, setSalesExpire } = useStore();
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const getTime = (start: number) => {
    const finalTime = new Date(start + 1000 * 60 * 30); // last number = 30 min
    const time = finalTime.getTime() - Date.now();
    const min = Math.floor((time / 1000 / 60) % 60);
    const sec = Math.floor((time / 1000) % 60);
    setMinutes(min);
    setSeconds(sec);
    if (min === 0 && sec === 0) {
      // Delete all timer/intervals
      // Get a reference to the last interval + 1
      const interval_id = window.setInterval(function () {},
      Number.MAX_SAFE_INTEGER);

      // Clear any timeout/interval up to that id
      for (let i = 1; i < interval_id; i++) {
        window.clearInterval(i);
      }
      setSalesExpire(true);
      localStorage.setItem("salesExpire", "1");
    }
  };

  useEffect(() => {
    let startTime = parseInt(localStorage.getItem("startTime") || "");
    const expire = parseInt(localStorage.getItem("salesExpire") || "");

    if (expire) return; // if result expire, don't run time interval
    const finalTime = new Date(startTime + 1000 * 60 * 30); // last number = 30 min
    const timeDiff = Date.now() > Date.parse(finalTime.toString());
    if (timeDiff) {
      setSalesExpire(true);
      localStorage.setItem("salesExpire", "1");
      return;
    }

    if (!startTime) {
      startTime = Date.now();
      localStorage.setItem("startTime", startTime.toString());
      localStorage.setItem("salesExpire", "0");
      setSalesTimer(startTime);
      setSalesExpire(false);
    }

    const interval = setInterval(() => getTime(startTime));
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {localStorage.getItem("salesExpire") === "0" && (
        <div className="z-50 fixed flex justify-center items-center top-0 bg-black h-12 w-screen text-white">
          <div className="flex justify-center">
            <button className="flex justify-center rounded-xl bg-[#D92D20] pl-4 pr-2 py-0.5 my-0.5">
              <p className="text-sm mt-0.5">Your results will expire in</p>
              <div className="bg-black rounded-xl ml-2 px-3 py-0.5 my-0.5">
                <div className="text-sm -mt-0.5">
                  <div className="timer" role="timer">
                    <div className="col-4">
                      <div className="box">
                        <span id="minute">
                          {minutes < 10 ? "0" + minutes : minutes}:
                        </span>
                        <span id="second">
                          {seconds < 10 ? "0" + seconds : seconds}
                        </span>
                        <span className="text"></span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Timer;
