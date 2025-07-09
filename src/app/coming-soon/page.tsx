"use client";

import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function ComingSoon() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });

    const targetDate = new Date("2025-07-30T12:00:00-07:00").getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });

      if (distance < 0) {
        clearInterval(interval);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-base-200 to-base-300 flex items-center justify-center p-2 sm:p-4">
      <div className="text-center" data-aos="zoom-in">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-2 sm:mb-4">
          Coming Soon
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-base-content mb-4 sm:mb-6 md:mb-8">
          This feature is under construction!
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-2 sm:gap-4 mb-4 sm:mb-6 md:mb-8">
          <div className="bg-base-100 p-2 sm:p-3 md:p-4 rounded-lg shadow-md w-full sm:w-auto">
            <p className="text-sm sm:text-base md:text-lg font-semibold text-primary">Days</p>
            <p className="text-xl sm:text-2xl md:text-3xl">{timeLeft.days}</p>
          </div>
          <div className="bg-base-100 p-2 sm:p-3 md:p-4 rounded-lg shadow-md w-full sm:w-auto">
            <p className="text-sm sm:text-base md:text-lg font-semibold text-primary">Hours</p>
            <p className="text-xl sm:text-2xl md:text-3xl">{timeLeft.hours}</p>
          </div>
          <div className="bg-base-100 p-2 sm:p-3 md:p-4 rounded-lg shadow-md w-full sm:w-auto">
            <p className="text-sm sm:text-base md:text-lg font-semibold text-primary">Minutes</p>
            <p className="text-xl sm:text-2xl md:text-3xl">{timeLeft.minutes}</p>
          </div>
          <div className="bg-base-100 p-2 sm:p-3 md:p-4 rounded-lg shadow-md w-full sm:w-auto">
            <p className="text-sm sm:text-base md:text-lg font-semibold text-primary">Seconds</p>
            <p className="text-xl sm:text-2xl md:text-3xl">{timeLeft.seconds}</p>
          </div>
        </div>
        <p className="text-sm sm:text-base md:text-lg text-base-content opacity-80 mb-4 sm:mb-6">
          Stay tuned for an amazing showcase of my web and mobile development skills.
        </p>
      </div>
    </div>
  );
}