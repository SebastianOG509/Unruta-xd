<template>
  <div class="fondo min-height-full flex">
    <div class="hidden lg:block relative h-full flex-1">
      <img src="../../public/vista_trasera.jpg" class="height" alt="" />
    </div>
    <div class="w-[50%] p-10">
      <div>
        <b class="text-5xl text-gray-800 text-center">REGISTRO</b>
        <p class="text-white">Crea tu cuenta aquí.</p>
      </div>
      <br />
      <form @submit.prevent="guardarusuario()">
        <div>
          <div class="flex felx-col">
            <span class="font-bold mb-1 text-gray-800"> Nombre </span>
          </div>
          <div>
            <input
              type="text"
              name="name"
              placeholder=""
              v-model="usuario.nombre"
              class="p-4 rounded border bg-blue-200 border-gray-300 w-full"
            />
          </div>
        </div>
        <br />
        <div>
          <div class="flex felx-col">
            <span class="font-bold mb-1 text-gray-800"> Correo </span>
          </div>
          <div>
            <input
              type="email"
              name="email"
              placeholder="ejemplo@unal.edu.co"
              v-model="usuario.correo"
              class="p-4 rounded border bg-blue-200 border-gray-300 w-full"
            />
          </div>
        </div>
        <br />
        <div>
          <div class="flex felx-col">
            <span class="font-bold mb-1 text-gray-800">
              Numero de Celular
            </span>
          </div>
          <div>
            <input
              type="tel"
              name="phone"
              placeholder=""
              v-model="usuario.telefono"
              class="p-4 rounded border bg-blue-200 border-gray-300 w-full"
            />
          </div>
        </div>
        <br />
        <div>
          <div class="flex felx-col">
            <span class="font-bold mb-1 text-gray-800"> Contraseña </span>
          </div>
          <div>
            <input
              type="password"
              name="password"
              v-model="usuario.contrasena"
              class="p-4 rounded border bg-blue-200 border-gray-300 w-full"
            />
          </div>
        </div>
        <br />
        <div>
          <div class="flex felx-col">
            <span class="font-bold mb-1 text-gray-800">
              Escoge el tipo de usuario:
              &nbsp;
            </span>
            <select v-model="usuario.tipo" class="font-bold mb-1 text-gray-800 rounded bg-blue-200">
              <option value="Pasajero">Pasajero</option>
              <option value="Conductor">Conductor</option>
            </select>
          </div>
        </div>

        <br />
        <br />
        <div class="flex items-center mb-4">
          <input
            id="default-checkbox"
            type="checkbox"
            value=""
            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          <label
            for="default-checkbox"
            class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >Acepto los términos y condiciones.</label
          >
        </div>
        <button
          class="transition p-2 w-full bg-red-300 hover:bg-red-500 text-white ronded-lg font-bold"
        >
          CREAR CUENTA <i class="fa fa-send"></i>
        </button>
      </form>
      <br />
      <br />
      <div class="text-center font-bold text-white">
        <p>
          ¿Ya tienes una cuenta?
          <a href="/login" class="text-red-100 hover:text-red-500">
            <b>LOGUEATE</b>
          </a>
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.height {
  height: 1024px;
}

.fondo {
  background-color: #3b5370;
}
</style>

<script lang="ts">
import { defineComponent } from "vue";
import { Usuario } from "@/interfaces/usuario";
import { registrar } from "@/services/registrar";

export default defineComponent({
  data() {
    return {
      usuario: {} as Usuario,
    };
  },
  methods: {
    async guardarusuario() {
      await registrar(this.usuario);
    },
  },
});
</script>
