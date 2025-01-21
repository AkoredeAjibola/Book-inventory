import React, { useState } from 'react';
import axios from 'axios';
import { BookCard } from '../components/BookCard';
import { SearchBar } from '../components/SearchBar';
import { Book } from '../types/Book';
import { SearchFilters } from '../types/Search';

const BookSearch: React.FC = () => {
    const [searchResults, setSearchResults] = useState<Book[]>([]);

    const handleSearch = async (filters: SearchFilters) => {
        const params = new URLSearchParams();
        if (filters.name) params.append('name', filters.name);

        const booksResponse = await axios.get(
            `${import.meta.env.VITE_API_BASE_URL}/books?${params}`
        );
        setSearchResults(booksResponse.data);
    };


    return (
        <div>
            <SearchBar onSearch={handleSearch} />
            <div className="p-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {searchResults.map((book, index) => (
                    <BookCard key={index} book={book} />
                ))}
            </div>
        </div>
    );
};

export default BookSearch;
