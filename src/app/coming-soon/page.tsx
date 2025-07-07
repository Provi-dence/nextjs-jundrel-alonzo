
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

    const targetDate = new Date("2025-07-15T12:00:00-07:00").getTime();

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
    <div className="min-h-screen bg-gradient-to-b from-base-200 to-base-300 flex items-center justify-center p-4">
      <div className="text-center items-center justify-center " data-aos="zoom-in">

        <h1 className="text-5xl md:text-6xl font-bold text-primary mb-4">Coming Soon</h1>
        <p className="text-2xl md:text-3xl text-base-content mb-8">
          This feature is under construction!
        </p>
        <div className="flex justify-center gap-4 mb-8">
          <div className="bg-base-100 p-4 rounded-lg shadow-md">
            <p className="text-lg font-semibold text-primary">Days</p>
            <p className="text-3xl">{timeLeft.days}</p>
          </div>
          <div className="bg-base-100 p-4 rounded-lg shadow-md">
            <p className="text-lg font-semibold text-primary">Hours</p>
            <p className="text-3xl">{timeLeft.hours}</p>
          </div>
          <div className="bg-base-100 p-4 rounded-lg shadow-md">
            <p className="text-lg font-semibold text-primary">Minutes</p>
            <p className="text-3xl">{timeLeft.minutes}</p>
          </div>
          <div className="bg-base-100 p-4 rounded-lg shadow-md">
            <p className="text-lg font-semibold text-primary">Seconds</p>
            <p className="text-3xl">{timeLeft.seconds}</p>
          </div>
        </div>
        <p className="text-base-content opacity-80 mb-6">
          Stay tuned for an amazing showcase of my web and mobile development skills.
        </p>
        
      </div>
    </div>
  );
}
