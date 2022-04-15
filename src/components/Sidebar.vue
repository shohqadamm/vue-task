<template>
  <!-- sidebar -->
  <nav class="sidebar">
    <!-- sidebar head -->
    <div class="sidebar-head p-4">
      <h2 class="text-2xl font-normal text-gray-800" translate="no">
        Vue Task<span class="text-primary">.</span>
      </h2>
      <button class="lg:hidden block float-right -mt-7" @click="sidebarToggle">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          role="img"
          width="25px"
          height="25px"
          preserveAspectRatio="xMidYMid meet"
          viewBox="0 0 32 32"
        >
          <path
            fill="currentColor"
            d="M7.219 5.781L5.78 7.22L14.563 16L5.78 24.781l1.44 1.439L16 17.437l8.781 8.782l1.438-1.438L17.437 16l8.782-8.781L24.78 5.78L16 14.563z"
          />
        </svg>
      </button>
    </div>
    <!-- sidebar list -->
    <div class="sidebar-list p-4 mt-4">
      <p class="font-medium text-gray-400">Menu</p>
      <div class="wrap-item mt-4">
        <div class="item">
          <router-link to="/">
            <button
              class="text-white bg-primary w-full flex text-left rounded-md box-border p-3"
            >
              <span class="mr-3 text-xl"><Icon icon="bxs:dashboard" /></span>
              <span class="w-full"> <router-link to="/psd">PDS</router-link> </span>
            </button>
          </router-link>
        </div>
        <div class="item mt-3">
          <router-link to="/">
            <button
              class="text-gray-800 bg-transparent hover:bg-gray-100 w-full flex text-left rounded-md box-border p-3"
            >
              <span class="mr-3 text-xl"><Icon icon="ci:settings-filled" /></span>
              <span class="w-full"> <router-link to="/settings">Settings</router-link> </span>
            </button>
          </router-link>
        </div>

      </div>
      
<div class="div"></div>

      <div class="item mt-3">
        <router-link to="/">
          <button
            class="text-gray-800 bg-transparent hover:bg-gray-100 w-full flex text-left rounded-md box-border p-3"
          >
            <span class="mr-3 text-xl"><Icon icon="bx:lock-alt" /></span>
            <span class="w-full"> <router-link to="lock">Lock</router-link> </span>
            <span class="box-border mt-1 text-gray-500"> </span>
          </button>
        </router-link>
      </div>
       <div class="item mt-3">
        <router-link to="/">
          <button
            class="text-gray-800 bg-transparent hover:bg-gray-100 w-full flex text-left rounded-md box-border p-3"
          >
            <span class="mr-3 text-xl"><Icon icon="clarity:resize-down-line" /></span>
            <span class="w-full"> <router-link to="rolled-up">RolledUp</router-link> </span>
            <span class="box-border mt-1 text-gray-500"> </span>
          </button>
        </router-link>
      </div>
       <div class="item mt-3">
          <button @click="logout"
            class="text-gray-800 bg-transparent hover:bg-gray-100 w-full flex text-left rounded-md box-border p-3"
          >
            <span class="mr-3 text-xl"><Icon icon="ion:log-out-outline" /></span>
            <span class="w-full">SignOut</span>
            <span class="box-border mt-1 text-gray-500"> </span>
          </button>
      </div>
    </div>
  </nav>
</template>

<script>
  import { Icon } from "@iconify/vue";
  export default {
    components: {
      Icon,
    },
    methods: {
      sidebarToggle: function () {
        document.querySelector(".flex-sidebar").classList.toggle("hide");
      },
          
      logout(){
        localStorage.removeItem('token')
        this.$router.push('/login')
      }
    },
    mounted() {
      var acc = document.getElementsByClassName("accordion");
      var i;
      for (i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function () {
          this.classList.toggle("active");
          var panel = this.nextElementSibling;
          if (panel.style.display === "block") {
            panel.style.display = "none";
          } else {
            panel.style.display = "block";
          }
        });
      }
    },
  };
</script>
