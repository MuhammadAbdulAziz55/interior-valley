import { BsSearch } from "react-icons/bs";
import { useDeferredValue, useState } from "react";
import SearchResult from "./SearchResult";
import PropTypes from 'prop-types';

SearchBar.propTypes = {
  border: PropTypes.string // You can specify the required type of the 'border' prop here
};
export default function SearchBar({ border }) {
    const [searchTerm, setSearchTerm] = useState("");
    const deferredSearchTerm = useDeferredValue(searchTerm);
    const handleChange = (event) => {
      setSearchTerm(event.target.value);
    };
  return (
    <div className="relative items-center border border-solid   mx-auto flex h-[50px] w-full font-normal">
    <input
      value={searchTerm}
      onChange={handleChange}
      type="text"
      name="searchNav"
      id="searchNav"
      placeholder="Search Medicines here..."
      className={`py-3 text-[13px] peer mx-auto  w-full rounded-md bg-transparent outline-none focus:ring-transparent md:w-[calc(100%-30px)] ${
        border
          ? "border-[#999] placeholder:text-[#999] focus:border-[#999]"
          : "border-white placeholder:text-white focus:border-white"
      }   placeholder:!text-[13px] placeholder:text-opacity-75 focus:placeholder:invisible `}
    />
    {/* focus:border-white add korle effect add hobe */}
    <BsSearch className="absolute right-9 h-full  w-5" />{" "}
    <SearchResult
      deferredSearchTerm={deferredSearchTerm}
      setSearchTerm={setSearchTerm}
    ></SearchResult>{" "}
  </div>
  )
}
