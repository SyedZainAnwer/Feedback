import Navbar from "@/components/Navbar";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import '../globals.css'
import { cookies } from "next/headers";

const mont = Montserrat({ 
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '700'],
  variable: '--font-montserrat'
})

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
      <body className={`${mont.variable}`}>
        <Navbar isAuthenticated={isAuthenticated}/>         
          <main className="w-full">
            {children}
          </main>
      </body>
    </html>
  );
}
