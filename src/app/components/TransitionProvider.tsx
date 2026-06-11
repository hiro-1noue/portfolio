"use client";

import { useState } from "react";

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

      {state === "closing" && (
        <div className="fixed inset-0 bg-black z-[9999]" />
      )}
    </>
  );
}
