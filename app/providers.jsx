"use client";

import { ThemeProvider } from "next-themes";
import Document, { Html, Head, Main, NextScript } from 'next/document';

export function Providers({ children }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="light">
      {children}
    </ThemeProvider>
  );
}
