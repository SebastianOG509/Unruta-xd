import { Schema, model } from "mongoose";

const Barrioesquema = new Schema({
  barrio_id: {
    type: Int32Array,
    required: true,
    trim: true,
    unique: true,
  },

  localidad_id: {
    type: Number,
    required: true,
    trim: true,
  },

  UPZ: {
    type: String,
    required: true,
    trim: true,
  },

  nombre_barrio: {
    type: String,
    required: true,
    trim: true,
  },
},
{
  versionKey: false,
});

export default model("Barrio", Barrioesquema);
