import "./globals.css";
import { ReactNode } from "react";

export const metadata = {
  title: "TradeSphere AI",
  description: "Enterprise AI Powered Trading Platform",
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}