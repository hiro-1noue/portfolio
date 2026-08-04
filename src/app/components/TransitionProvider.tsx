"use client";

import { useState, useRef } from "react";
import { useRouter, usePathname } from "next/navigation";
import { motion, AnimatePresence } from "motion/react";
import LoadingScreen from "./LoadingScreen";

export default function TransitionProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const pathname = usePathname();
  const pushedHref = useRef<string | null>(null);
  const [pendingHref, setPendingHref] = useState<string | null>(null);

  const pendingPath = pendingHref?.split(/[?#]/)[0] ?? null;
  const isTransitioning = pendingPath !== null && pendingPath !== pathname;

  function handleClickCapture(event: React.MouseEvent<HTMLDivElement>) {
    if (
      event.defaultPrevented ||
      event.button !== 0 ||
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.altKey
    ) {
      return;
    }

    const anchor = (event.target as Element).closest("a");

    if (!anchor || anchor.target === "_blank" || anchor.hasAttribute("download")) {
      return;
    }

    const url = new URL(anchor.href, window.location.href);

    if (url.origin !== window.location.origin) {
      return;
    }

    if (url.pathname === window.location.pathname) {
      return;
    }

    event.preventDefault();
    pushedHref.current = null;
    setPendingHref(`${url.pathname}${url.search}${url.hash}`);
  }

  return (
    <div onClickCapture={handleClickCapture}>
      {children}

      <AnimatePresence>
        {isTransitioning && (
          <motion.div
            className="fixed inset-0 z-[9999]"
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ duration: 0.55, ease: [0.76, 0, 0.24, 1] }}
            onAnimationComplete={() => {
              if (pendingHref && pushedHref.current !== pendingHref) {
                pushedHref.current = pendingHref;
                router.push(pendingHref);
              }
            }}
          >
            <LoadingScreen />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
