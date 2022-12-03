import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
const Searchbar = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/search/${searchTerm}`);
  };
  return (
    <form
      onSubmit={handleSubmit}
      autoComplete="off"
      className="p-2 text-gray-400 focus-within:text-gray-600"
    >
      <label htmlFor="search-field" className="sr-only">
        search all songs
      </label>
      <div className="flex flex-row justify-start items-center">
        <AiOutlineSearch className="w-4 h-5 ml-4" />
        <input
          name="search-filed"
          autoComplete="off"
          id="search-field"
          placeholder="search"
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
          }}
          className="flex-1 bg-transparent border-none placeholder-gray-500 outline-none text-base text-white p-4"
        />
      </div>
    </form>
  );
};

export default Searchbar;
