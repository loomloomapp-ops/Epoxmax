"use client";

import { createContext, useCallback, useMemo, useState, type ReactNode } from "react";
import { PopupModal } from "@/components/ui/PopupModal";
import { LeadForm } from "@/components/forms/LeadForm";
import { Events } from "@/lib/analytics";

type PopupFormContextValue = {
  isOpen: boolean;
  open: (source?: string) => void;
  close: () => void;
};

export const PopupFormContext = createContext<PopupFormContextValue | null>(null);

type PopupProviderProps = {
  children: ReactNode;
};

export function PopupProvider({ children }: PopupProviderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [source, setSource] = useState<string>("popup");

  const open = useCallback((nextSource: string = "popup") => {
    setSource(nextSource);
    setIsOpen(true);
    Events.popupOpened(nextSource);
  }, []);

  const close = useCallback(() => {
    setIsOpen(false);
  }, []);

  const value = useMemo<PopupFormContextValue>(
    () => ({ isOpen, open, close }),
    [isOpen, open, close],
  );

  return (
    <PopupFormContext.Provider value={value}>
      {children}
      <PopupModal
        open={isOpen}
        onClose={close}
        title="Zostaw zapytanie"
        subtitle="Wypełnij krótki formularz — odezwiemy się w ciągu 24 godzin w dni robocze."
      >
        <LeadForm
          source={`popup:${source}`}
          variant="compact"
          onSuccess={() => {
            // keep popup open on success — form swaps its own UI state
          }}
        />
      </PopupModal>
    </PopupFormContext.Provider>
  );
}
