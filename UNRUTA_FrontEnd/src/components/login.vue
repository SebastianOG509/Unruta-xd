<template>
    <div class="p-10 fondo absolute h-full w-full top-0 left-0 flex items-center justify-center">

        <div class="fondo lg overflow-hidden rounded-lg w-[100%] h-[100%]">
            <div class="flex space-between items-center">
                <div class=" w-[50%] ">
                    <img src="../../public/carrito.png" class="height" alt="" />   
                    <!--IMAGEN DE FONDO-->
                </div>
                <div class="w-[50%] p-10">
                    <div>
                        <b class="text-5xl text-gray-800 text-center">LOGIN</b>
                        <p class="text-white">
                            Suministre los datos requeridos para iniciar sesión.
                        </p>
                    </div>
                    <br>
                    <form @submit.prevent="loginusuario()">
                    <div>
                        <div class="flex felx-col">
                            <span class="font-bold mb-1 text-gray-800">
                                Correo
                            </span>
                        </div>
                        <div>
                            <input type="text" name="email" placeholder="ejemplo@unal.edu.co" v-model="usuario.correo" class="p-4 rounded border bg-blue-200 border-gray-300 w-full">
                        </div>
                    </div>
                    <br>
                    <div>
                        <div class="flex felx-col">
                            <span class="font-bold mb-1 text-gray-800">
                                Contraseña
                            </span>
                        </div>
                        <div >
                            <input type="text" name="password" v-model="usuario.contrasena" class="p-4 rounded border bg-blue-200 border-gray-300 w-full">
                        </div>
                    </div>
                    <br>
                    <br>
                    <button class="transition p-2 w-full bg-red-300 hover:bg-red-500 text-white ronded-lg font-bold">
                        LOGIN <i class="fa fa-send"></i>
                    </button>
                    </form>
                    <br>
                    <br>
                    <div class="text-center font-bold text-white">
                        <p> ¿No tienes una cuenta?
                            <a href="Registro" class="text-red-100 hover:text-red-500">
                                <b>REGISTRATE</b>

                            </a>
                        </p>
                    </div>
                    <div class="text-center">
                        <a href="#" class="text-blue-500 hover:text-blue-700">
                            <b>¿Olvidaste tu contraseña?</b>

                        </a>
                    </div>

                </div>
            </div>
        </div>

    </div>
</template>

<style scoped>

    .fondo {
        background-color:#3b5370;
    }

    .fondo_boton{
        background-color:#d1a992;
    }

</style>

<script lang="ts">
import { defineComponent } from "vue";
import { Usuariologin } from "@/interfaces/usuariologin";
import { login } from "@/services/login";

export default defineComponent({
  data() {
    return {
      usuario: {} as Usuariologin,
    };
  },
  methods: {
    async loginusuario() {
      await login(this.usuario);
    },
  },
});
</script>
