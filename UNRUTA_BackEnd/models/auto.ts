import { Schema, model } from "mongoose";

const Autoesquema = new Schema({
    placa: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
  
    conductor_id: {
      type: Number,
      required: true,
      trim: true,
    },
  
    cupos: {
      type: Number,
      required: true,
      trim: true,
    },
  },
  {
    versionKey: false,
  });
  
  export default model("Auto", Autoesquema);
  