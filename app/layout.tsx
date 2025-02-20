import type { Metadata } from "next";

import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
// import PageWrapper from "./components/PageWrapper";


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
        {/* <PageWrapper> */}

        <main>{children}</main>
        {/* </PageWrapper> */}
        <Footer />
      </body>
    </html>
  );
}
