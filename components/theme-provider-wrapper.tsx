"use client";

import { useEffect, useState } from "react";
import { ThemeProvider } from "./theme-provider";

export function ThemeProviderWrapper({
  children
}: {
  children: React.ReactNode;
}) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div style={{ visibility: "hidden" }}>
        {children}
      </div>
    );
  }

  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem={false}
      disableTransitionOnChange
      storageKey="sielotech-theme"
    >
      {children}
    </ThemeProvider>
  );
}
