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
        test
      </button>

      {state === "closing" && (
        <motion.div
          className="fixed inset-0 bg-black z-[9999]"
          initial={{ y: "-100%" }}
          animate={{ y: "0%" }}
        />
      )}
    </>
  );
}
