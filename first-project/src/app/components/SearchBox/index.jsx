'use client";'

import "./style.scss";
import { useState } from "react";
import { Search } from "lucide-react";
import { articles } from "@/store";

export default function SearchBox({ placeholder = "Поиск...", onSearch }) {
  const [query, setQuery] = useState("");

  const handleInputChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    if (onSearch) {
      onSearch(value);
    }
  };

  return (
    <div className="flex items-center border rounded-2xl px-3 py-2 shadow-sm w-full max-w-md bg-white">
      <Search className="w-5 h-5 text-gray-400 mr-2" />
      <input
        type="text"
        className="w-full outline-none text-sm bg-transparent"
        placeholder={placeholder}
        value={query}
        onChange={handleInputChange}
      />
    </div>
  );
}
