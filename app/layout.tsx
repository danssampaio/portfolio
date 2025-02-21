import "./globals.css";
import type { Metadata } from "next";
import { Header } from "./components/header";
import { Contact } from "./components/contact";
import { Footer } from "./components/footer";
import { BackToTop } from "./components/back-to-top";
import { Toaster } from "./components/toaster";
import { Analytics } from "@vercel/analytics/react"

export const metadata: Metadata = {
  title: {
    default: "Home",
    template: "%s | <DS/>",
  },
  icons: [
    {
      url: "/favicon.svg",
    },
  ],
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`bg-hero-image bg-cover bg-fixed bg-no-repeat`}
      >
        <Toaster />
        <Header />
        {children}
        <Contact />
        <Footer />
        <BackToTop />
        <Analytics />
      </body>
    </html>
  );
}
