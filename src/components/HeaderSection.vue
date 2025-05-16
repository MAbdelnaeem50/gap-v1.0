<template>
  <div class="fixed top-0 left-0 right-0 z-50 px-4 py-4 bg-transparent">
    <div class="navbar lg:w-3/4 w-full mx-auto rounded-full ease-in-out transform backdrop-blur-xl bg-[#0c0c0c]/20 px-4 shadow-lg transition-all duration-300 hover:shadow-2xl">
      <div class="navbar-start">
        <div class="dropdown">
          <div tabindex="0" role="button" class="btn btn-ghost lg:hidden text-gray-700 dark:text-gray-200 hover:scale-105 transition-transform">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul tabindex="0"
            class="menu menu-sm dropdown-content bg-white dark:bg-gray-800 rounded-box z-50 mt-3 w-52 p-2 shadow-lg text-gray-700 dark:text-gray-200">
            <li>
              <router-link to="/about" class="hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-all duration-300">About Us</router-link>
            </li>
            <li>
              <router-link to="/contact" class="hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-all duration-300">Contact Us</router-link>
            </li>
          </ul>
        </div>
        <router-link to="/">
          <a class="btn btn-ghost text-xl font-bold hover:bg-transparent  ">
            <img src="@/assets/image/logo3.png" alt="">
          </a>
        </router-link>
      </div>
  
      <div class="navbar-center hidden lg:flex">
        <ul class="menu menu-horizontal px-1 text-gray-200">
          <li>
            <router-link to="/about" class="hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-black rounded-full transition-all duration-300">About Us</router-link>
          </li>
          <li>
            <router-link to="/contact" class="hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-black rounded-full transition-all duration-300">Contact Us</router-link>
          </li>
        </ul>
      </div>
      
      <div class="navbar-end">
        <div class="flex items-center space-x-4">

  
          <a class="btn bg-blue-400 hover:bg-blue-600 text-white border-none rounded-full px-6 transition-all duration-300 hover:scale-105">
            Login
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
   
    };
  },





  methods: {
   
  }
};
</script>

<style scoped>
.menu :where(li:not(.menu-title) > *:not(ul):not(details):not(.menu-title)), 
.menu :where(li:not(.menu-title) > details > summary:not(.menu-title)) {
  padding-left: 1rem;
  padding-right: 1rem;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  text-align: center;
  transition: all 0.2s;
}

.dropdown-content {
  min-width: 12rem;
}

.dark-mode .navbar {
  background-color: #333;
  color: white;
}

/* Animation for icons */
.swap img {
  transition: all 0.3s ease-in-out;
  transform-origin: center;
}

.dark .swap img {
  transform: rotateY(180deg);
}

/* Additional animations */
.hover\:scale-105:hover {
  transform: scale(1.05);
}

.hover\:rotate-12:hover {
  transform: rotate(12deg);
}

.transition-all {
  transition: all 0.3s ease-in-out;
}

.hover\:shadow-2xl:hover {
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
}
</style>