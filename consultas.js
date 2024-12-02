import pkg from "pg";
const { Pool } = pkg;

const pool = new Pool({
  host: "localhost",
  user: "postgres",
  password: "Tc.14021996",
  database: "likeme",
  allowExitOnIdle: true,
});

export const ObtenerPost = async () => {
  const resultados = await pool.query("SELECT * FROM posts");
  return resultados.rows;
};

export const AddPost = async (post) => {
  const { titulo, img, descripcion, likes } = post;
  const agregar =
    "INSERT INTO posts (titulo, img, descripcion, likes) VALUES($1, $2, $3, $4)";
  const values = [titulo, img, descripcion, likes];
  const result = await pool.query(agregar, values);
  return result;
};
