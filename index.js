import express from "express";
import cors from "cors";
import { ObtenerPost, AddPost } from "./consultas.js";

const app = express();
app.use(cors());
app.use(express.json());

app.listen(3000, () => console.log("Server online"));

app.post("/publicacion", async (req, res) => {
  const publicacion = await AddPost(req.body);
  res.send(publicacion);
});

app.get("/post", async (req, res) => {
  const posts = await ObtenerPost();
  res.json(posts);
});
