import "./globals.css";
import type { Metadata } from "next";
import { Header } from "./components/header";
import { Inter, IBM_Plex_Mono } from "next/font/google";
import { Contact } from "./components/contact";
import { Footer } from "./components/footer";
import { BackToTop } from "./components/back-to-top";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: {
    default: "Home",
    template: "%s | <DS/>"
  },
  icons: [
    {
      url: '/favicon.svg'
    }
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.variable} ${plexMono.variable}`}>
        <Header />
        {children}
        <Contact />
        <Footer />
        <BackToTop />
      </body>
    </html>
  );
}
