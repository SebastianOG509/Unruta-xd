import { Router } from "express";
import registrar from "../controllers/registrar";
import login from "../controllers/login";
import confirmarcuenta from "../controllers/confirmarcuenta";

const router = Router();

router.post("/login", login);

router.get("/confirmacion/:token", confirmarcuenta)

router.post("/registro", registrar);

router.post("/servicios", (req, res) => {
  res.send("creando tareas");
});

router.get("/servicios", (req, res) => {
  res.send("obteniendo tareas");
});

router.get("/servicios/:id", (req, res) => {
  res.send("obteniendo una tarea");
});

router.put("/servicios/:id", (req, res) => {
  res.send("actualizando tareas");
});

router.delete("/servicios/:id", (req, res) => {
  res.send("eliminando tareas");
});

export default router;
