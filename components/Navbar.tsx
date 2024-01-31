import Avatar from "./shared/Avatar";
import SearchInput from "./shared/SearchInput";

const Navbar = () => {
    return (
        <nav className="flex items-center p-4 mb-3">
            <h2 className="text-orange font-bold text-3xl flex-shrink-0 w-1/4">Feedback</h2>
            <div className="flex-1 flex justify-center">
                <SearchInput />
            </div>
            <div className="w-1/4 flex items-center justify-end">
                <Avatar />
            </div>
        </nav>

    )
}

export default Navbar;