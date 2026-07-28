import { useEffect, useState } from "react";

export default function Loader() {
  const [dots, setDots] = useState(".");

  useEffect(() => {
    const interval = setInterval(() => {
      setDots((prev) => (prev === "..." ? "." : prev + "."));
    }, 450);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#0d1117]">
      <div className="flex flex-col items-center gap-8">
        {/* Spinner */}
        <div className="h-20 w-20 animate-spin rounded-full border-[5px] border-white/15 border-t-[#e01a5c]" />

        {/* Loading Text */}
        <div className="flex items-center text-2xl font-semibold tracking-wide text-white">
          <span>Loading</span>
          <span className="inline-block w-7 text-left">{dots}</span>
        </div>
      </div>
    </div>
  );
}
