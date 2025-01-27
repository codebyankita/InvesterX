import type { Metadata } from "next";

import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";


export const metadata: Metadata = {
  title: "Angelica Capital",
  description: "Empowering the Future of Web3 Innovation",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="font-thicccboi antialiased ">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
