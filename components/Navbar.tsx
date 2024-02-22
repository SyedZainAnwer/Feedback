import { cookies } from "next/headers";
import Avatar from "./shared/Avatar";
import SearchInput from "./shared/SearchInput";
import Button from "./shared/Button";
import Link from "next/link";

const Navbar = () => {

    const isAuthenticated = cookies().get('authToken')?.value;

    return (
        <nav className="flex items-center p-4 mb-3">
            <h2 className="text-orange font-bold text-3xl flex-shrink-0 md:w-1/4 w-1/2">
                <a href="/">
                    Feedback
                </a>
            </h2>
            <div className="hidden md:flex-1 md:flex md:justify-center">
                <SearchInput />
            </div>
            <div className="md:w-1/4 w-1/2 flex items-center justify-end">
                {isAuthenticated ? (
                    <Avatar />
                ) : (
                    <div className="flex">
                        <Link href="/login">
                            <Button title="Login" className="border border-light_gray mr-3" />
                        </Link>
                        <Link href="/register">
                            <Button title="Signup" className="bg-light_blue" />
                        </Link>
                    </div>
                )}
            </div>
        </nav>

    )
}

export default Navbar;