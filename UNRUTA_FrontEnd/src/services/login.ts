import axios from "./axios";
import { Usuario } from "@/interfaces/usuario";

export const login = async (usuario: Usuario) => axios.post("/", usuario);