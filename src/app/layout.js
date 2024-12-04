import { DM_Sans, Sancreek } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/utils/nav/Navbar";

const sancreek = Sancreek({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-Sancreek",
  style: "normal",
});

const dm_sans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-dm_sans",
});

export const metadata = {
  title: "Lumina-Ai",
  description: "Created my Talha",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/T.svg" />
      </head>
      <body className={`${sancreek.variable} ${dm_sans.variable}`}>
        <Navbar />
        {children}
        {/* <Scene /> */}
      </body>
    </html>
  );
}
