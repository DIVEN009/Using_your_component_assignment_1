import BookCard from "./components/bookcard";

const books = [
  { title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925, genre: "Fiction" },
  { title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960, genre: "Classic" },
  { title: "1984", author: "George Orwell", year: 1949, genre: "Dystopian" },
  { title: "Moby-Dick", author: "Herman Melville", year: 1851, genre: "Adventure" }
];

const App = () => {
  return (
    <div>
      <h1>Digital Library</h1>
      <div className="book-list">
        {books.map((book, index) => (
          <BookCard key={index} book={book} />
        ))}
      </div>
    </div>
  );
};

export default App;
