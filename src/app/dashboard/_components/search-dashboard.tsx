import { Auth } from "@/components/auth";
import { SearchIcon } from "lucide-react";
import React from "react";
import { Categories } from "./categories";

// Mettez à jour ce tableau pour n'inclure que TikTok et X (Tweet)
const categories = [
  {
    name: "TikTok",
    value: "TikTok",
  },
  {
    name: "X (Tweet)",
    value: "Tweet",
  },
];

export const SearchDashboard = ({
  onSearchInput,
}: {
  onSearchInput: React.Dispatch<React.SetStateAction<string | undefined>>;
}) => {
  return (
    <div className="mx-5 py-2">
      <div className="flex flex-col md:flex-row gap-4 mt-5 py-6 px-6 bg-white rounded-lg shadow-lg">
        {/* Barre de recherche */}
        <div className="flex gap-2 items-center p-3 border border-gray-200 rounded-full bg-white w-full md:w-[30%] hover:border-blue-500 transition-all duration-300 focus-within:border-blue-500 focus-within:shadow-md">
          <SearchIcon className="text-gray-400" />
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent outline-none text-black placeholder-gray-400 flex-1"
            onChange={(e) => onSearchInput(e.target.value)}
          />
        </div>

        {/* Catégories */}
        <Categories items={categories} />

        {/* Composant Auth */}
        <div className="ml-auto">
          <Auth />
        </div>
      </div>
    </div>
  );
};