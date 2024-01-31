import LeftSideBar from "@/components/LeftSideBar";
import Navbar from "@/components/Navbar";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import '../globals.css'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Feedback",
  description: "Post your anonymous feedbacks",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en"> 
      <body className={inter.className}>
        <Navbar />
        <main className="flex flex-row">
          <section className="w-1/4">
            <LeftSideBar />
          </section>
          <section className="w-1/2">
            {children}
          </section>
        </main>
      </body>
    </html>
  );
}
