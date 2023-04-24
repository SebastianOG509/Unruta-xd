import app from "./app";
require("dotenv").config();
require("./database/UNRUTA");

const PORT = process.env.PORT || 3000;
app.listen(PORT, () =>
  console.log("El Servidor Esta Funcionando 🔥 Puerto: " + PORT)
);
