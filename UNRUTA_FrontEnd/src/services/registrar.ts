import axios from "./axios";
import { Usuario } from "@/interfaces/usuario";

export const registrar = async (usuario: Usuario) => axios.post("/registro", usuario);

