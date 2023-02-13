import { useState } from "react";
import { BiSearch } from 'react-icons/bi';

const SearchBar = () => {
    const [showMobileSearch, setShowMobileSearch] = useState(false);
    return (
        <>
            <div className="relative w-full z-20 max-w-[300px]">
                <input
                    type="search"
                    id="default-search"
                    className="block bg-white w-full p-2 pl-4 pr-[55px]  text-gray-900 border border-[#D1D5DB] rounded-lg bg-gray-50 focus:ring-[#0674BB] focus:border-[#0674BB] bg-white  placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500 "
                    placeholder="Search..."
                    required
                />
                <button
                    type="submit"
                    className="text-white absolute rounded-tr-lg rounded-br-lg right-0 h-full top-0 bg-[#0674BB] hover:bg-[#2795DC] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium  text-sm px-4 py-2 "
                >
                    <img src="/assets/search.svg" />
                </button>
            </div>

            {/* <div className="flex w-max z-20 sm:hidden block">
                {
                    showMobileSearch &&
                    <input
                        type="search"
                        id="default-search"
                        className="mr-2 block bg-white w-full py-1 px-1 text-gray-900 border border-[#D1D5DB] rounded-lg bg-gray-50 focus:ring-[#0674BB] focus:border-[#0674BB] bg-white  placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500 "
                        placeholder="Search..."
                        required
                    />
                }

                <button
                    className="text-gray-800 h-full font-medium text-xl py-2 "
                    onClick={() => setShowMobileSearch(!showMobileSearch)}
                >
                    <BiSearch />
                </button>
            </div> */}
        </>
    )
}

export default SearchBar