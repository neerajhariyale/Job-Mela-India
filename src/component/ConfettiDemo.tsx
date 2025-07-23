"use client";

import { useRef } from "react";

import { Confetti, type ConfettiRef } from "@/components/magicui/confetti";


export function ConfettiDemo() {
  const confettiRef = useRef<ConfettiRef>(null);

  return (
    <div className="relative flex h-[150px] w-3/4 flex-col items-center justify-center overflow-hidden bg-background">
      {/* <TypingAnimationDemo>Total Job Posted</TypingAnimationDemo> */}

      <Confetti
        ref={confettiRef}
        className="absolute left-0 top-0 z-0 size-full"
        onMouseEnter={() => {
          confettiRef.current?.fire({});
        }}
      />
    </div>
  );
}
