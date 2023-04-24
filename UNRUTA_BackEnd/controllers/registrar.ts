import usuarios from "../models/usuarios";
import bcrypt from "bcryptjs";
import generaCadenaAleatoria from "../utils/generartoken";

const registrar = async (req: any, res: any) => {
  console.log(req.body);
  const { nombre, correo, contrasena, telefono, tipo, tokenconfirm } = req.body;
  req.body.tokenconfirm = generaCadenaAleatoria(10);
  try {
    const email = await usuarios.findOne({ correo });
    if (email)
      throw (
        (console.log("Ya existe este email"), Error("Ya existe este email"))
      );
    const saltRounds = 10;
    const salt = bcrypt.genSaltSync(saltRounds);
    const hash = bcrypt.hashSync(contrasena, salt);
    req.body.contrasena = hash;
    const usuario = new usuarios(req.body);
    await usuario.save();
    res.json(usuario);
  } catch (error) {
    res.json({ error });
  }
};

export default registrar;
