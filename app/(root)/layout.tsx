import LeftSideBar from "@/components/LeftSideBar";
import Navbar from "@/components/Navbar";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import '../globals.css'
import { cookies } from "next/headers";

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

  const isAuthenticated = cookies().get('authToken')?.value;

  return (
    <html lang="en"> 
      <body className={inter.className}>
        <Navbar isAuthenticated={isAuthenticated}/>         
          <main className="w-full">
            {children}
          </main>
      </body>
    </html>
  );
}
