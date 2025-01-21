// import { useInfiniteQuery } from "@tanstack/react-query";
// import { useInView } from "react-intersection-observer";
// import { useEffect } from "react";
// import { BookCard } from "../components/BookCard";
// import { SearchFilters } from "../types/Search";
// import { fetchBooks } from "../services/api";
// import { Book } from "../types/Book";
// import { Loader } from "lucide-react";

// interface BookListProps {
//     filters: SearchFilters;
// }

// export const BookList = ({ filters }: BookListProps) => {
//     const { ref, inView } = useInView({
//         threshold: 0,
//         rootMargin: "100px",
//     });

//     const {
//         data,
//         fetchNextPage,
//         hasNextPage,
//         isFetchingNextPage,
//         status,
//         isLoading,
//     } = useInfiniteQuery({
//         queryKey: ["books", filters],
//         queryFn: ({ pageParam = 1 }) => fetchBooks(pageParam as number, filters),
//         getNextPageParam: (lastPage, allPages) => {
//             return lastPage.length === 10 ? allPages.length + 1 : undefined;
//         },
//         initialPageParam: 1,
//     });

//     useEffect(() => {
//         if (inView && hasNextPage && !isFetchingNextPage) {
//             fetchNextPage();
//         }
//     }, [inView, fetchNextPage, hasNextPage, isFetchingNextPage]);

//     if (isLoading) {
//         return <LoadingSkeleton />;
//     }

//     if (status === "error") {
//         return (
//             <div className="text-center text-red-500">
//                 Error loading books. Please try again later.
//             </div>
//         );
//     }

//     const isEmpty = data?.pages[0]?.length === 0;

//     if (isEmpty) {
//         return (
//             <div className="text-center text-gray-400">
//                 No books found matching your search criteria.
//             </div>
//         );
//     }

//     return (
//         <div className="space-y-8">
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//                 {data?.pages.map((group, i) =>
//                     group.map((book: Book) => (
//                         <div
//                             key={book.isbn + i}
//                             className="opacity-0 animate-[fadeIn_0.5s_ease-out_forwards]"
//                             style={{
//                                 animationDelay: `${i * 0.1}s`,
//                             }}
//                         >
//                             <BookCard book={book} />
//                         </div>
//                     ))
//                 )}
//             </div>

//             {(hasNextPage || isFetchingNextPage) && (
//                 <div className="flex justify-center">
//                     <div ref={ref} className="h-10" />
//                     {isFetchingNextPage && (
//                         <Loader className="animate-spin text-purple-500 h-8 w-8" />
//                     )}
//                 </div>
//             )}
//         </div>
//     );
// };

// const LoadingSkeleton = () => (
//     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {[...Array(6)].map((_, i) => (
//             <div
//                 key={i}
//                 className="h-[250px] animate-pulse rounded-lg bg-white/5 backdrop-blur-sm"
//             />
//         ))}
//     </div>
// );


// import { useInfiniteQuery } from "@tanstack/react-query";
// import { useInView } from "react-intersection-observer";
// import { useEffect } from "react";
// import { BookCard } from "../components/BookCard";
// import { SearchFilters } from "../types/Search";
// import { fetchBooks } from "../services/api";
// import { Loader } from "lucide-react";
// import { LoadingSkeleton } from "../components/LoadingSkeleton";

// interface BookListProps {
//     filters: SearchFilters;
// }

// export const BookList = ({ filters }: BookListProps) => {
//     const { ref, inView } = useInView({
//         threshold: 0,
//         rootMargin: "100px",
//     });

//     const {
//         data,
//         fetchNextPage,
//         hasNextPage,
//         isFetchingNextPage,
//         status,
//         isLoading,
//     } = useInfiniteQuery({
//         queryKey: ["books", filters],
//         queryFn: ({ pageParam = 1 }) => fetchBooks(pageParam as number, filters),
//         getNextPageParam: (lastPage, allPages) => {
//             return lastPage.length === 10 ? allPages.length + 1 : undefined;
//         },
//         initialPageParam: 1,
//     });

//     useEffect(() => {
//         if (inView && hasNextPage && !isFetchingNextPage) {
//             fetchNextPage();
//         }
//     }, [inView, fetchNextPage, hasNextPage, isFetchingNextPage]);

//     if (isLoading) {
//         return <LoadingSkeleton />;
//     }

//     if (status === "error") {
//         return (
//             <div className="text-center text-red-500">
//                 Error loading books. Please try again later.
//             </div>
//         );
//     }

//     const isEmpty = data?.pages[0]?.length === 0;

//     if (isEmpty) {
//         return (
//             <div className="text-center text-gray-400">
//                 No books found matching your search criteria.
//             </div>
//         );
//     }

//     return (
//         <div className="space-y-8">
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//                 {data?.pages.map((group, i) =>
//                     group.map((book) => (
//                         <div
//                             key={book.isbn + i}
//                             className="opacity-0 animate-[fadeIn_0.5s_ease-out_forwards]"
//                             style={{
//                                 animationDelay: `${i * 0.1}s`,
//                             }}
//                         >
//                             <BookCard book={book} />
//                         </div>
//                     ))
//                 )}
//             </div>

//             {(hasNextPage || isFetchingNextPage) && (
//                 <div className="flex justify-center">
//                     <div ref={ref} className="h-10" />
//                     {isFetchingNextPage && (
//                         <Loader className="animate-spin text-purple-500 h-8 w-8" />
//                     )}
//                 </div>
//             )}
//         </div>
//     );
// };

import { useInfiniteQuery } from "@tanstack/react-query";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { BookCard } from "../components/BookCard";
import { SearchFilters } from "../types/Search";
import { fetchBooks } from "../services/api";
import { Book } from "../types/Book";
import { Loader } from "lucide-react";
import { LoadingSkeleton } from "./LoadingSkeleton";

interface BookListProps {
    filters: SearchFilters;
}

export const BookList = ({ filters }: BookListProps) => {
    const { ref, inView } = useInView({
        threshold: 0,
        rootMargin: "100px",
    });

    // Infinite query to fetch books
    const {
        data,
        fetchNextPage,
        hasNextPage,
        isFetchingNextPage,
        status,
        isLoading,
    } = useInfiniteQuery({
        queryKey: ["books", filters],
        queryFn: ({ pageParam = 1 }) => fetchBooks(pageParam, filters),
        getNextPageParam: (lastPage, allPages) => {
            // Check if the length of the returned books is less than the expected page size (10)
            // If it's less, it means there's no more data to load
            return lastPage.length === 10 ? allPages.length + 1 : undefined;
        },
        initialPageParam: 1,
    });

    // Trigger fetch when element is in view
    useEffect(() => {
        if (inView && hasNextPage && !isFetchingNextPage) {
            fetchNextPage();
        }
    }, [inView, fetchNextPage, hasNextPage, isFetchingNextPage]);

    // Loading state
    if (isLoading) {
        return <LoadingSkeleton />;
    }

    if (status === "error") {
        return (
            <div className="text-center text-red-500">
                Error loading books. Please try again later.
            </div>
        );
    }

    const isEmpty = data?.pages[0]?.length === 0;

    if (isEmpty) {
        return (
            <div className="text-center text-gray-400">
                No books found matching your search criteria.
            </div>
        );
    }

    return (
        <div className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {data?.pages.map((group, i) =>
                    group.map((book: Book) => (
                        <div
                            key={book.isbn + i}
                            className="opacity-0 animate-[fadeIn_0.5s_ease-out_forwards]"
                            style={{
                                animationDelay: `${i * 0.1}s`,
                            }}
                        >
                            <BookCard book={book} />
                        </div>
                    ))
                )}
            </div>

            {(hasNextPage || isFetchingNextPage) && (
                <div className="flex justify-center">
                    <div ref={ref} className="h-10" />
                    {isFetchingNextPage && (
                        <Loader className="animate-spin text-purple-500 h-8 w-8" />
                    )}
                </div>
            )}
        </div>
    );
};