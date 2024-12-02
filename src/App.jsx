import axios from "axios";
import { useEffect, useState } from "react";
import Form from "./components/Form";
import Post from "./components/Post";

const urlBaseServer = "http://localhost:3000";

function App() {
  const [titulo, setTitulo] = useState("");
  const [imgSrc, setImgSRC] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [posts, setPosts] = useState([]);

  // Función para obtener los posts desde el servidor
  const getPosts = () => {
    axios
      .get(urlBaseServer + "/post")
      .then((response) => {
        setPosts(response.data);
      })
      .catch((error) => {
        console.error("Error al obtener los posts:", error);
      });
  };

  // Función para agregar un post
  const agregarPost = () => {
    const post = { titulo, img: imgSrc, descripcion, likes: 0 };
    axios
      .post(urlBaseServer + "/publicacion", post)
      .then(() => {
        getPosts();
      })
      .catch((error) => {
        console.error("Error al agregar el post:", error);
      });
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div className="App">
      <h2 className="py-5 text-center">&#128248; Like Me &#128248;</h2>
      <div className="row m-auto px-5">
        <div className="col-12 col-sm-4">
          <Form
            setTitulo={setTitulo}
            setImgSRC={setImgSRC}
            setDescripcion={setDescripcion}
            agregarPost={agregarPost}
          />
        </div>
        <div className="col-12 col-sm-8 px-5 row posts align-items-start">
          {posts.map((post, i) => (
            <Post key={i} post={post} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
