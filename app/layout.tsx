import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const monts = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Leguiya",
  description:
    "Professional Landing page for Leguiya, a multifaceted creative in Hollywood, California.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={monts.className}>{children}</body>
    </html>
  );
}
