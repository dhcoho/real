import React, { useEffect, useState } from "react";
import SearchInput from "./SearchInput";
import FilterButton from "./FilterButton";
import Button from "../ux/button";
import FilterText from "./FilterText";

interface SearchBarProps {
  statusFltr: boolean;
  setStatusFltr: (newStatus: boolean) => void; // setStatusFltr, yeni durumu kabul eden bir işlev olmalı
}

const SearchBar: React.FC<SearchBarProps> = ({ statusFltr, setStatusFltr }) => {
  const [sticky, setSticky] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section
      className={`w-full flex z-10 justify-between max-[600px]:justify-center border-b border-[#d3d3d3] h-14 bg-white px-3 md:px-5 mb-5 ${
        sticky ? "sticky top-0 left-0 mb-0" : ""
      }`}
    >
      <div className="flex gap-2 items-center max-[600px]:flex-row-reverse max-[600px]:w-full">
        <FilterButton onClick={() => setStatusFltr(!statusFltr)} clickStats={statusFltr} />
        <SearchInput name="search_q" id="search_q" />
      </div>
      <FilterText />
    </section>
  );
};

export default SearchBar;
