"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence, } from "motion/react";

export default function TransitionProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [state, setState] =
    useState<"idle" | "closing">(
      "idle"
    );

  const router = useRouter();

  const [target, setTarget] = useState<string | null>(null);

  function navigate(href: string) {
    setTarget(href);
    setState("closing");
  }

  return (
    <>
      {children}

      <button
        onClick={() => setState("closing")}
        className="fixed top-4 right-4 z-[10000]"
      >
        close
      </button>

      <button
        onClick={() => setState("idle")}
        className="fixed top-12 right-4 z-[10000]"
      >
        open
      </button>

      <AnimatePresence>
        {state === "closing" && (
          <motion.div
            className="fixed inset-0 bg-black z-[9999]"
            initial={{ y: "-100%" }}
            animate={{ y: "0%" }}
            exit={{ y: "-100%" }}
            onAnimationComplete={() => {
              if (state == "closing" && target) {
                router.push(target);
              }
            }}
          />
        )}
      </AnimatePresence>
    </>
  );
}
