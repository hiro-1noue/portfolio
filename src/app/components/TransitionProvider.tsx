"use client";

import { useState } from "react";
import { motion } from "motion/react";

export default function TransitionProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [state, setState] =
    useState<"idle" | "closing" | "opening">(
      "idle"
    );

  return (
    <>
      {children}

      <button
        onClick={() => setState("closing")}
        className="fixed top-4 right-4 z-[10000]"
      >
        closing
      </button>

      <button
        onClick={() => setState("opening")}
        className="fixed top-12 right-4 z-[10000]"
      >
        opening
      </button>

      {state !== "idle" && (
        <motion.div
          className="fixed inset-0 bg-black z-[9999]"
          initial={
            state === "closing"
              ? { y: "-100%" }
              : { y: "0%" }
          }
          animate={
            state === "closing"
              ? { y: "0%" }
              : { y: "-100%" }
          }
        />
      )}
    </>
  );
}
