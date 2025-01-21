import { Book } from "../types/Book";
import { motion } from "framer-motion";
import { Calendar, Users, Building2, Bookmark } from "lucide-react";

interface BookCardProps {
  book: Book;
}

export const BookCard = ({ book }: BookCardProps) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
      className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-card to-card/80 shadow-lg backdrop-blur-sm border-2 border-gray-700 min-h-[300px]  flex flex-col"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-primary/0 to-secondary/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      <div className="p-4 space-y-2 flex-grow">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Building2 className="h-4 w-4 text-primary/60" />
            <span className="inline-flex items-center rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
              {book.publisher}
            </span>
          </div>
          <div className="flex items-center space-x-1 text-sm text-muted-foreground">
            <Calendar className="h-4 w-4" />
            <span>{new Date(book.released).toLocaleDateString()}</span>
          </div>
        </div>
        <h3 className="text-2xl font-bold tracking-tight text-foreground transition-colors group-hover:text-primary">
          {book.name}
        </h3>
        <div className="flex items-center space-x-2 text-sm text-muted-foreground">
          <Bookmark className="h-4 w-4" />
          <span>ISBN: {book.isbn}</span>
        </div>
        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <Users className="h-4 w-4 text-primary/60" />
            <h4 className="text-sm font-medium">Authors</h4>
          </div>
          <div className="flex flex-wrap gap-2">
            {book.authors.map((author) => (
              <span
                key={author}
                className="inline-flex items-center rounded-full bg-secondary/80 px-2.5 py-0.5 text-xs font-medium text-secondary-foreground backdrop-blur-sm transition-colors hover:bg-secondary"
              >
                {author}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};
