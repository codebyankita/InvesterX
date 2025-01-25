import type { Metadata } from "next";

import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";


export const metadata: Metadata = {
  title: "InvesterX",
  description: "Investment for Future",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body className="font-thicccboi antialiased ">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
