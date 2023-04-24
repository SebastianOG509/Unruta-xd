import { Schema, model } from "mongoose";

const Sectoresquema = new Schema({
  localidad_id: {
    type: Number,
    required: true,
    trim: true,
    unique: true,
  },

  nombre_loc: {
    type: String,
    required: true,
    trim: true,
  },

  cod_postal: {
    type: String,
    required: true,
    trim: true,
  },
},
{
  versionKey: false,
});

export default model("Sector", Sectoresquema);
