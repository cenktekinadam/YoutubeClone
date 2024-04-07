import { Link, useNavigate } from "react-router-dom"
import { MdOutlineSearch } from "react-icons/md";
import { GoBell } from "react-icons/go";
import { IoVideocam } from "react-icons/io5";
import { CiBellOn } from "react-icons/ci";

const Header = () => {
    const navigate = useNavigate()
    const handleSubimt = (e) => {
        e.preventDefault();
        //get Searched words
        const text = (e.target[0].value);
        //check the input must be empty value
        if (text.trim() === "") {
            return
        }
        //Take to search results page
        navigate(`results?search_query=${text}`)
    }

    return (
        <header className="flex justify-between items-center p-4">
            <Link to={'/'} className="flex items-center gap-2">
                <img src="/Youtube_logo.png" alt="logo" className="w-[50px]" />
                <h1 className="text-2xl hidden md:block font-mono">CnkTube</h1>
            </Link>

            <form onSubmit={handleSubimt} className="group overflow-hidden flex items-center border border-gray-400 rounded-[20px]">
                <input type="text" className="group-hover:border-blue-500 group-hover:border border border-transparent focus:border-blue-500 bg-black text-white outline-none rounded-l-[20px] px-3 py-1" />

                <button className="border-l bg-zinc-800 px-4 py-1 text-2xl">
                    <MdOutlineSearch />
                </button>
            </form>


            <div className="flex gap-3 text-xl cursor-pointer">
                <GoBell className="hover:text-gray-400 transition duration-500" />
                <IoVideocam className="hover:text-gray-400 transition duration-500" />
                <CiBellOn className="hover:text-gray-400 transition duration-500" />
            </div>




        </header>


    )
}

export default Header
