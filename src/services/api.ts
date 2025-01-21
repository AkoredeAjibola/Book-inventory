import axios from "axios";
import { Book } from "../types/Book";
import { SearchFilters } from "../types/Search";

// Function to fetch books with pagination and search filters
export const fetchBooks = async (
  page: number,
  filters: SearchFilters
): Promise<Book[]> => {
  try {
    // Construct query parameters based on filters
    const params: Record<string, string> = {
      page: page.toString(),
      pageSize: "10",
    };

    if (filters.name) params.name = filters.name;
    if (filters.publisher) params.fromPublisher = filters.publisher;
    if (filters.isbn) params.isbn = filters.isbn;
    if (filters.author) params.fromAuthors = filters.author;
    if (filters.character) params.character = filters.character;
    if (filters.culture) params.culture = filters.culture;

    // Fetch books data
    const response = await axios.get(
      `${import.meta.env.VITE_API_BASE_URL}/books`,
      { params }
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching books:", error);
    return [];
  }
};

// Function to fetch characters based on a search query
export const fetchCharacters = async (query: string): Promise<Book[]> => {
  try {
    const response = await axios.get(
      `${import.meta.env.VITE_API_BASE_URL}/characters?name=${query}`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching characters:", error);
    return [];
  }
};
