import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAppContext } from "../context/store";

function View() {
  const { getItem } = useAppContext();
  const { id } = useParams();

  const [book, setBook] = useState(null);

  useEffect(() => {
    const book = getItem(id);
    setBook(book);
  }, []);

  const ViewBook = () => {
    return (
      <div>
        <h2>{book.title}</h2>
        <img src={book.cover} alt="img" width={500} />
      </div>
    );
  };

  const NotFound = () => {
    return (
      <div>
        <span>Not Found</span>
      </div>
    );
  };

  return book ? <ViewBook /> : <NotFound />;
}

export default View;
