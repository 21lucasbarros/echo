import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ECHO",
  description:
    "A space where aesthetics, silence, and identity collide — and reverberate",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
