import usuarios from "../models/usuarios";
import bcrypt from "bcryptjs";

const login = async (req: any, res: any) => {
  const { correo, contrasena } = req.body;
  try {
    const user = await usuarios.findOne({ correo });
    if (!user) throw new Error("No esiste este email");

    if (!user.cuentaconfirmada)
      throw new Error("Esta cuenta no esta confirmada");

    if (!bcrypt.compareSync(req.body.contrasena, user.contrasena))
      throw new Error("Contraseña incorrecta");

    console.log("Logueado con exito");
  } catch (error) {
    console.log(error);
    res.send(error);
  }
};

export default login;
