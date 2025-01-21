Book Inventory Application (Bookie)
Introduction
This ReactJS and TypeScript project provides a book inventory application using the ANAPIOFICEANDFIRE API. The application fetches and displays a list of books and allows users to search for books and characters with advanced filtering options.

Features:
Display a list of books with the following details:
Publisher,
Name,
ISBN,
Authors,
End Date,
Infinite scrolling for book lists with pagination.

Advanced search functionality using:
Publisher,
Name,
ISBN,
Authors,
End Date,
Character Name,
Character Culture,
Responsive and user-friendly interface.

Efficient API handling by combining results from the books and characters' endpoints.


Getting Started/Prerequisites
To run this project, ensure you have the following installed:

Node.js (v16 or higher)
npm or yarn

Environment Variables
The application uses environment variables to store sensitive data like the API base URL. Ensure to create a .env file in the root directory with the following content:

VITE_API_BASE_URL=https://www.anapioficeandfire.com/api
Note: The .env file is excluded from version control using .gitignore.

Installation
Clone the repository:
git clone https://github.com/your-username/book-inventory.git
cd book-inventory

Install dependencies:
npm install
Or, if using yarn:
yarn install

Usage
Running the Application
Start the development server:
npm run dev
Or, if using yarn:
yarn dev

The application will run at:
http://localhost:5173

Building the Application
For production, build the optimized application:
npm run build
Or:
yarn build

Testing the Application
Open the application in your browser.
Use the search bar to filter books using the provided parameters.
Scroll through the book list to see the infinite loading feature in action.
Test character-based filtering by providing character names or culture in the search bar.


Key Libraries Used
React: For building the user interface.
TypeScript: Ensuring type safety throughout the application.
React Query (@tanstack/react-query): For efficient API data fetching, caching, and pagination.
TailwindCSS: For styling and responsive design.
Axios: For making HTTP requests.
Framer Motion: For animations.
Lucide Icons: For adding beautiful icons.

