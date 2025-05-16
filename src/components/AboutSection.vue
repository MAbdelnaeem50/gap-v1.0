<template>
  <section class="relative py-24 overflow-hidden bg-[#0E0F11]">
    <div class="container px-4 mx-auto">
      <div class="md:max-w-xl text-center mx-auto mb-20 mt-5">
        <h2 class="font-heading text-7xl text-white tracking-tighter-xl">
          About us
        </h2>
      </div>
      <div class="max-w-5xl mx-auto">
        <div class="flex flex-wrap lg:items-center -m-8 lg:-m-12">
          <div class="w-full md:w-1/2 p-8 lg:p-12">
            <div class="max-w-max mx-auto">
              <img
                class=" h-40"
                src="@/assets/image/logo2.png"
                alt=""
              />
            </div>
          </div>
          <div class="w-full md:w-1/2 p-8 lg:p-12">
            <span
              class="inline-block mb-4 text-sm text-blue-400 font-medium tracking-tighter"
              >Check our stats</span
            >
            <h2 class="mb-6 text-6xl md:text-7xl text-white tracking-tighter">
              Making credit history with Freight
            </h2>
            <p class="mb-10 text-white text-opacity-60 md:max-w-xs">
              GAB International is a strategic branding agency focused on brand
              creation, rebrands, and brand
              GAB International is a strategic branding agency focused on brand
              creation, rebrands, and brand
              GAB International is a strategic branding agency focused on brand
              creation, rebrands, and brand
              GAB International is a strategic branding agency focused on brand
              creation, rebrands, and brand
              GAB International is a strategic branding agency focused on brand
              creation, rebrands, and brand
            </p>
          
          </div>
        </div>
      </div>
      <!-- Background Effects -->
      <div class="absolute inset-0 pointer-events-none">
        <!-- Gradient Overlay -->
        <div
          class="absolute inset-0 bg-gradient-to-b from-transparent via-gray-900/20 to-transparent"
        ></div>

        <!-- Glowing Orbs -->
        <div
          class="absolute -top-48 -left-48 w-96 h-96 bg-blue-500/10 rounded-full filter blur-3xl"
        ></div>
        <div
          class="absolute -bottom-48 -right-48 w-96 h-96 bg-purple-500/10 rounded-full filter blur-3xl"
        ></div>

        <!-- Grid Pattern -->
        <div
          class="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(circle,transparent_0%,black_100%)]"
        ></div>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style>
/* Enhanced hover effects */
.bg-gradient-to-br {
  transition: all 0.3s ease-in-out;
}

.bg-gradient-to-br:hover {
  transform: translateY(-2px);
  box-shadow: 0 20px 40px -15px rgba(0, 0, 0, 0.3);
  border-color: rgba(59, 130, 246, 0.5);
}

/* Glass effect */
.glass-effect {
  backdrop-filter: blur(16px);
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.05),
    rgba(255, 255, 255, 0.01)
  );
}

/* Animation for background elements */
@keyframes float {
  0%,
  100% {
    transform: translate(0, 0) rotate(0deg);
  }
  33% {
    transform: translate(30px, -30px) rotate(5deg);
  }
  66% {
    transform: translate(-20px, 20px) rotate(-5deg);
  }
}

.animate-float {
  animation: float 15s infinite;
}
</style>
