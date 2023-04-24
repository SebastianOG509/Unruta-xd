import usuarios from "../models/usuarios";

const confirmarcuenta = async (req: any, res: any) => {
  const { token } = req.params;

  try {
    const user = await usuarios.findOne({ tokenconfirm: token });
    if (!user) throw new Error("No existe este usuario");
    user.cuentaconfirmada = true;
    user.tokenconfirm = "";
    await user.save();
    res.send("Se confirmo con exito");
    console.log(user);
  } catch (error) {
    res.json({ error: error });
  }
};

export default confirmarcuenta;
