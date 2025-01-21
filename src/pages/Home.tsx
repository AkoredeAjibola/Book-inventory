import { useState } from "react";
import { BookList } from "../components/BookLists";
import { SearchBar } from "../components/SearchBar";
import { SearchFilters } from "../types/Search";
import { Scroll } from "lucide-react";

const Index = () => {
    const [filters, setFilters] = useState<SearchFilters>({
        name: "",
        publisher: "",
        isbn: "",
        author: "",
        character: "",
        culture: "",
    });

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-800 via-gray-900 to-black">
            <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <div className="flex items-center justify-center space-x-4 mb-4">
                        <Scroll className="h-10 w-10 sm:h-12 sm:w-12 text-purple-400" />
                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
                            Bookie
                        </h1>
                    </div>
                    <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                        Explore the vast collection of books from the world of Ice and Fire
                    </p>
                </div>

                <div className="mb-12">
                    <SearchBar onSearch={setFilters} />
                </div>

                <BookList filters={filters} />
            </div>
        </div>
    );
};

export default Index;
