import type { Metadata } from "next";
import { Inter } from "next/font/google";

import Providers from "./providers";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AlastiSolutions",
  description: "AlastiSolutions Org Hub",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} bg-slate-100 dark:bg-slate-900`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
