import { Schema, model } from "mongoose";

const Usuarioesquema = new Schema(
  {
    nombre: {
      type: String,
      required: true,
      trim: true,
    },
    correo: {
      type: String,
      unique: true,
      required: true,
      trim: true,
    },
    contrasena: {
      type: String,
      required: true,
      trim: true,
    },
    telefono: {
      type: Number,
      required: true,
      trim: true,
    },
    tipo: {
      type: String,
      required: true,
      trim: true,
    },
    tokenconfirm: {
      type: String,
      default: null,
    },
    cuentaconfirmada: {
      type: Boolean,
      default: false,
    },
  },
  {
    versionKey: false,
  }
);

export default model("Usuario", Usuarioesquema);
