// src/app/layout.tsx
import type { Metadata } from "next";
import "../styles/globals.css";

export const metadata: Metadata = {
  title: "Ping",
  description: "Ping",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
