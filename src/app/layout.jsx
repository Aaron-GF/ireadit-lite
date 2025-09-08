import { Geist, Geist_Mono, Outfit } from "next/font/google";
import "@/styles/globals.css";
import "@/styles/themeTransitions.css";

import StoreProvider from "@/app/providers/StoreProvider";
import { ThemeProvider } from "@/app/providers/ThemeProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-Outfit",
  subsets: ["latin"],
});

export const metadata = {
  title: "IReadIt lite",
  description:
    "Light application for Reddit client, website where links, multimedia content and other resources are shared.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <StoreProvider>
        <body
          className={`${geistSans.variable} ${outfit.variable} antialiased`}
        >
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </body>
      </StoreProvider>
    </html>
  );
}
