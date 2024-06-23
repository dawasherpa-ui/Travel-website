import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/layout/NavBar";
import Footer from "@/components/layout/Footer";

const inter = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tourio |Travel",
  description: "Tourio the best travel website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav>
          <div className=" absolute top-0 z-50 w-full ">
            <NavBar />
          </div>
        </nav>
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
