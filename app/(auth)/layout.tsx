import AuthRightSideBar from "@/components/AuthRightSideBar";
import { Metadata } from "next";
import { Inter } from "next/font/google";
import '../globals.css'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Feedback",
    description: "Post your anonymous feedbacks",
};

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
    return(
        <html lang="en">
            <body className={inter.className}>
                <div className="flex flex-row w-full">
                    <section className="w-1/2">
                        {children}
                    </section>
                    <section className="w-1/2">
                        <AuthRightSideBar />
                    </section>
                </div>
            </body>
        </html>
    )
}

export default AuthLayout;