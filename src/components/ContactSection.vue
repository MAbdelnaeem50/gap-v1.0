<template>
    <section class="relative py-24 overflow-hidden bg-[#0E0F11]">
        <div class="container px-4 mx-auto">
            <div class="md:max-w-4xl text-center mx-auto">
                <div class="md:max-w-xl text-center mx-auto mb-5 mt-5">
        <h2 class="font-heading text-7xl text-white tracking-tighter-xl">
          Contact us
        </h2>
      </div>
                <span class="inline-block mb-4 text-sm text-blue-400 font-medium tracking-tighter">Send us a
                    message</span>
                <h2 class="font-heading mb-8 text-7xl lg:text-8xl text-white tracking-7xl lg:tracking-8xl">
                    Send us a message and our team will get back to you
                </h2>
                <p class="mb-20 text-gray-300">
                    Global Bank is a strategic branding agency focused on brand creation,
                    rebrands, and brand
                </p>
                <div class="flex flex-wrap -m-2 mb-10">
                    <div class="w-full md:w-1/2 p-2">
                        <div class="mb-2 border border-gray-900 focus-within:border-white overflow-hidden rounded-3xl">
                            <input
                                class="pl-6 pr-16 py-4 text-gray-300 w-full rounded-3xl placeholder-gray-300 outline-none bg-transparent"
                                type="text" placeholder="Full name" />
                        </div>
                    </div>
                    <div class="w-full md:w-1/2 p-2">
                        <div class="mb-2 border border-gray-900 focus-within:border-white overflow-hidden rounded-3xl">
                            <input
                                class="pl-6 pr-16 py-4 text-gray-300 w-full rounded-3xl placeholder-gray-300 outline-none bg-transparent"
                                type="text" placeholder="Last Name" />
                        </div>
                    </div>
                    <div class="w-full md:w-1/2 p-2">
                        <div class="mb-2 border border-gray-900 focus-within:border-white overflow-hidden rounded-3xl">
                            <input
                                class="pl-6 pr-16 py-4 text-gray-300 w-full rounded-3xl placeholder-gray-300 outline-none bg-transparent"
                                type="text" placeholder="E-mail" />
                        </div>
                    </div>
                    <div class="w-full md:w-1/2 p-2">
                        <div class="mb-2 border border-gray-900 focus-within:border-white overflow-hidden rounded-3xl">
                            <input
                                class="pl-6 pr-16 py-4 text-gray-300 w-full rounded-3xl placeholder-gray-300 outline-none bg-transparent"
                                type="text" placeholder="Company" />
                        </div>
                    </div>
                    
                </div>
                <div class="flex flex-wrap justify-center max-w-xs mx-auto mb-6">
                    <div class="w-full">
                        <a class="block px-14 py-4 text-center font-medium tracking-2xl border-2 border-blue-400 bg-blue-400 hover:bg-blue-500 text-black focus:ring-4 focus:ring-blue-500 focus:ring-opacity-40 rounded-full transition duration-300"
                            href="#">Submit</a>
                    </div>
                </div>
                <p class="text-sm text-gray-300 max-w-xs mx-auto">
                    Your information will be used accordane with our Privacy Policy. You
                    may opf out at any time
                </p>
            </div>

             <!-- Background Effects -->
      <div class="absolute inset-0 pointer-events-none">
        <!-- Gradient Overlay -->
        <div class="absolute inset-0 bg-gradient-to-b from-transparent via-gray-900/20 to-transparent"></div>
        
        <!-- Glowing Orbs -->
        <div class="absolute -top-48 -left-48 w-96 h-96 bg-blue-500/10 rounded-full filter blur-3xl"></div>
        <div class="absolute -bottom-48 -right-48 w-96 h-96 bg-purple-500/10 rounded-full filter blur-3xl"></div>
        
        <!-- Grid Pattern -->
        <div class="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(circle,transparent_0%,black_100%)]"></div>
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
