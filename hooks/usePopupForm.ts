"use client";

import { useContext } from "react";
import { PopupFormContext } from "@/providers/PopupProvider";

export function usePopupForm() {
  const ctx = useContext(PopupFormContext);
  if (!ctx) {
    throw new Error("usePopupForm must be used within <PopupProvider>");
  }
  return ctx;
}
