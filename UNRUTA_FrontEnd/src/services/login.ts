import { Usuariologin } from "@/interfaces/usuariologin";
import axios from "./axios";

export const login = async (usuario : Usuariologin) => axios.post("/login", usuario);