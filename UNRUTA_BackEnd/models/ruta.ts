import { Schema, model } from "mongoose";

const Rutaesquema = new Schema({
  ruta_id: {
    type: Number,
    required: true,
    trim: true,
    unique: true,
  },

  barrio_id: {
    type: Number,
    required: true,
    trim: true,
    unique: true,
  },

  hora: {
    type: Date,
    required: true,
    trim: true,
  },

  precio: {
    type: Number,
    required: true,
    trim: true,
  },
},
{
  versionKey: false,
});

export default model("Ruta", Rutaesquema);
