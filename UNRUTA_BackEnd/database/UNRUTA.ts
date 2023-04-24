const mongoose = require("mongoose");

mongoose
  .connect(process.env.BD)
  .then(() => console.log("BD conectada"))
  .catch((e: string) => console.log("Fallo al conectar: " + e));
