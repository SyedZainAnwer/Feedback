import Avatar from "./shared/Avatar";
import SearchInput from "./shared/SearchInput";

const Navbar = () => {
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
                <Avatar />
            </div>
        </nav>

    )
}

export default Navbar;