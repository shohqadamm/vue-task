<template>
  <div class="mt-8 w-100 flex justify-center align-middle">
    <!-- component -->
    <div class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col w-3/6">
      <div class="mb-4">
        <label
          class="block text-grey-darker text-sm font-bold mb-2"
          for="username"
        >
          Username
        </label>
        <input v-model="login"
          class="
            shadow
            appearance-none
            border
            rounded
            w-full
            py-2
            px-3
            text-grey-darker
          "
          id="username"
          type="text"
          placeholder="Username"
        />
      </div>
      <div class="mb-6">
        <label
          class="block text-grey-darker text-sm font-bold mb-2"
          for="password"
        >
          Password
        </label>
        <input v-model="password"
          class="
            shadow
            appearance-none
            border border-red
            rounded
            w-full
            py-2
            px-3
            text-grey-darker
            mb-3
          "
          id="password"
          type="password"
          placeholder="******************"
        />
        <p class="text-red text-xs italic">Please choose a password.</p>
      </div>
      <div class="flex items-center justify-between">
        <button @click="created()"
          class="
            bg-sky-500
            hover:bg-blue-dark
            text-white
            font-bold
            py-2
            px-4
            rounded
          "
          type="button"
        >
          Sign In
        </button>
        <a
          class="
            inline-block
            align-baseline
            font-bold
            text-sm text-blue
            hover:text-blue-darker
          "
          href="#"
        >
          Forgot Password?
        </a>
      </div>
    </div>
  </div>
</template>


<script>
import axios from "axios";
export default {
  name: 'SignIn',
    data() {
    return {
      items: [],
    };
  },

  async created() {

      const res = await axios.post(`https://frontend-task.depocloud.ml/api/mobile/login`, login, message);
    
  },
}
</script>