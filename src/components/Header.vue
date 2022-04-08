<template>
  <!-- this header -->
  <header class="bg-white p-2 border-b-2">
    <div class="wrap-header flex items-center flex-wrap">
      <div class="flex flex-no-shrink items-center">
        <button
          class="text-gray-500 lg:hidden ml-3 block"
          @click="sidebarToggle"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            role="img"
            width="2em"
            height="2em"
            preserveAspectRatio="xMidYMid meet"
            viewBox="0 0 16 16"
          >
            <path
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
              d="M2.75 12.25h10.5m-10.5-4h10.5m-10.5-4h10.5"
            />
          </svg>
        </button>
      </div>
      <div class="mr-5 flex">
        <div
          class="input-box border rounded-md mr-5 hidden lg:w-search w-full box-border lg:flex md:flex focus-within:bg-gray-100"
        >
          <span class="text-3xl p-2 text-gray-400"
            ><Icon icon="ei:search"
          /></span>
          <input
            type="text"
            placeholder="Search..."
            class="p-3 w-full rounded-md outline-none focus:bg-gray-100"
          />
        </div>

    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
      fast items
    </button>

      </div>
    </div>
  </header>
</template>

<script>
  import { Icon } from "@iconify/vue";
  export default {
    data() {
      return {
        menu: false,
      };
    },
    components: {
      Icon,
    },
    methods: {
      menuToggle: function () {
        this.menu = !this.menu;
      },
      sidebarToggle: function () {
        document.querySelector(".flex-sidebar").classList.toggle("hide");
      },
    },
    mounted() {},
  };
</script>
