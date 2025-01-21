import { useEffect, useState } from "react";
import { Search } from "lucide-react";
import { SearchFilters } from "../types/Search";

interface SearchBarProps {
    onSearch: (filters: SearchFilters) => void;
}

export const SearchBar = ({ onSearch }: SearchBarProps) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const [filters, setFilters] = useState<SearchFilters>({
        name: "",
        publisher: "",
        isbn: "",
        author: "",
        character: "",
        culture: "",
    });

    useEffect(() => {
        const debounceTimer = setTimeout(() => {
            onSearch(filters);
        }, 300);

        return () => clearTimeout(debounceTimer);
    }, [filters, onSearch]);

    return (
        <div className="w-full max-w-4xl mx-auto bg-white/10 backdrop-blur-lg rounded-lg p-6 shadow-2xl">
            <div className="relative">
                <input
                    type="text"
                    placeholder="Search books..."
                    className="w-full h-14 pl-12 pr-4 text-lg text-gray-900 bg-white/20 backdrop-blur-sm rounded-full border-2 border-gray-400 focus:border-purple-400 focus:ring-2 focus:ring-purple-500 transition-all duration-300 ease-in-out"
                    value={filters.name}
                    onChange={(e) => setFilters({ ...filters, name: e.target.value })}
                    aria-label="Search books by name"
                />
                <Search
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 h-5 w-5"
                    aria-hidden="true"
                />
                <button
                    onClick={() => setIsExpanded(!isExpanded)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-purple-500 transition-colors"
                    aria-expanded={isExpanded}
                    aria-label={isExpanded ? "Hide additional filters" : "Show additional filters"}
                >
                    {isExpanded ? "Less filters" : "More filters"}
                </button>
            </div>

            {isExpanded && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
                    <input
                        placeholder="Publisher"
                        className="p-3 rounded-full bg-white/20 backdrop-blur-sm border-2 border-gray-400 focus:border-purple-400 focus:ring-2 focus:ring-purple-500 transition-all duration-300"
                        value={filters.publisher}
                        onChange={(e) => setFilters({ ...filters, publisher: e.target.value })}
                        aria-label="Search by publisher"
                    />
                    <input
                        placeholder="ISBN"
                        className="p-3 rounded-full bg-white/20 backdrop-blur-sm border-2 border-gray-400 focus:border-purple-400 focus:ring-2 focus:ring-purple-500 transition-all duration-300"
                        value={filters.isbn}
                        onChange={(e) => setFilters({ ...filters, isbn: e.target.value })}
                        aria-label="Search by ISBN"
                    />
                    <input
                        placeholder="Author"
                        className="p-3 rounded-full bg-white/20 backdrop-blur-sm border-2 border-gray-400 focus:border-purple-400 focus:ring-2 focus:ring-purple-500 transition-all duration-300"
                        value={filters.author}
                        onChange={(e) => setFilters({ ...filters, author: e.target.value })}
                        aria-label="Search by author"
                    />
                    <input
                        placeholder="Character Name"
                        className="p-3 rounded-full bg-white/20 backdrop-blur-sm border-2 border-gray-400 focus:border-purple-400 focus:ring-2 focus:ring-purple-500 transition-all duration-300"
                        value={filters.character}
                        onChange={(e) => setFilters({ ...filters, character: e.target.value })}
                        aria-label="Search by character name"
                    />
                    <input
                        placeholder="Character Culture"
                        className="p-3 rounded-full bg-white/20 backdrop-blur-sm border-2 border-gray-400 focus:border-purple-400 focus:ring-2 focus:ring-purple-500 transition-all duration-300"
                        value={filters.culture}
                        onChange={(e) => setFilters({ ...filters, culture: e.target.value })}
                        aria-label="Search by character culture"
                    />
                </div>
            )}
        </div>
    );
};
