import { useState } from "react";
import { useAppContext } from "../context/store";

import { useNavigate } from "react-router-dom";

function Create() {
  const { createItems } = useAppContext();
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [cover, setCover] = useState("");
  const [intro, setIntro] = useState("");
  const [completed, setCompleted] = useState(false);
  const [review, setReview] = useState("");

  const formStyles = {
    form: {
      width: "400px",
      margin: "10px auto",
      padding: "10px",
      display: "flex",
      flexDirection: "column",
      flexWrap: "wrap",
      background: "#252525",
    },

    containerInput: {
      display: "flex",
      flexFlow: "column wrap",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
    },

    containerImg: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },

    img: {
      width: "100px",
    },

    title: {
      color: "#FFFFFF",
    },

    input: {
      padding: "10px",
      width: "calc(100% - 20px)",
      border: "none",
      outline: "none",
      borderBottom: "2px solid #5DADE2",
    },

    submit: {
      margin: "10px auto"
    }
  };

  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    if (name === "title") {
      setTitle(value);
    } else if (name === "author") {
      setAuthor(value);
    } else if (name === "intro") {
      setIntro(value);
    } else if (name === "completed") {
      setCompleted(e.target.checked);
    } else if (name === "review") {
      setReview(value);
    }
  };

  const handleChangeFile = (e) => {
    const file = e.target.files[0];

    const reader = new FileReader();

    reader.readAsDataURL(file);

    reader.onload = () => {
      setCover(reader.result);
    };
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newBook = {
      id: crypto.randomUUID(),
      title,
      author,
      cover,
      intro,
      completed,
      review,
    };

    createItems(newBook);
    navigate("/");
  };

  return (
    <form onSubmit={handleSubmit} style={formStyles.form}>
      <div style={formStyles.containerInput}>
        <h3 style={formStyles.title}>Titulo</h3>
        <input
          type="text"
          name="title"
          value={title}
          onChange={handleChange}
          style={formStyles.input}
        />
      </div>
      <div style={formStyles.containerInput}>
        <h3 style={formStyles.title}>compania</h3>
        <input
          type="text"
          name="author"
          value={author}
          onChange={handleChange}
          style={formStyles.input}
        />
      </div>
      <div style={formStyles.containerInput}>
        <h3 style={formStyles.title}>Imagen</h3>
        <div style={formStyles.containerImg}>
          <input
            type="file"
            name="cover"
            onChange={handleChangeFile}
            accept="image/*"
            // style={formStyles.input}
          />
          {!!cover ? <img src={cover} alt="" style={formStyles.img} /> : ""}
        </div>
      </div>

      <div style={formStyles.containerInput}>
        <h3 style={formStyles.title}>Descripcion</h3>
        <input
          type="text"
          name="intro"
          value={intro}
          onChange={handleChange}
          style={formStyles.input}
        />
      </div>
      <div style={formStyles.containerInput}>
        <h3 style={formStyles.title}>Completed</h3>
        <input
          type="checkbox"
          name="completed"
          value={completed}
          onChange={handleChange}
          style={formStyles.input}
        />
      </div>
      <div style={formStyles.containerInput}>
        <h3 style={formStyles.title}>Review</h3>
        <input
          type="text"
          name="review"
          value={review}
          onChange={handleChange}
          style={formStyles.input}
        />
      </div>
      <div style={formStyles.submit}>
        <input type="submit" value="registar" />
      </div>
    </form>
  );
}

export default Create;
