import { useState, useEffect } from "react";
import { useAppContext } from "../context/store";
import Book from "../components/book/book";

function Home() {
  const { items } = useAppContext();
  const [book, setBook] = useState();

  const container = {
    display: "flex",
    justifyContent: "start",
    alignItems: "center",
    gap: "10px",
    padding: "10px",
    margin: "20px auto"
  }

  useEffect(() => {
    setBook(items);
  }, []);

  const Books = () => {
    return (
      <div style={container}>
        {items.map((item) => (
          <Book key={item.id} item={item} />
        ))}
      </div>
    );
  };

  const NotFound = () => {
    return (
      <div>
        <span>No hay libros</span>
      </div>
    );
  };

  if (!book === null) {
    return <NotFound />;
  }

  return <Books />;
}

export default Home;
