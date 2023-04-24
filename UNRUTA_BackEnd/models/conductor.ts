import { Schema, model } from "mongoose";

const Conductoresquema = new Schema({
  conductor_id: {
    type: Number,
    required: true,
    trim: true,
    unique: true,
  },

  user_id: {
    type: Number,
    required: true,
    trim: true,
  },

  ruta_id: {
    type: Number,
    required: true,
    trim: true,
  },
},
{
  versionKey: false,
});

export default model("Conductor", Conductoresquema);
