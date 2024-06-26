import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Header from "@/app/components/layout/Header";

const roboto = Roboto({ subsets: ["latin"], weight: ['400', '500', '700'] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>

        <main className="max-w-4xl mx-auto p-4">
          
          <Header />    

          {children}

          <footer className="border-t p-10 text-center mt-10">

          &copy; 2024 All Rights Reserved
          </footer>

        </main>

        </body>
    </html>
  );
}
