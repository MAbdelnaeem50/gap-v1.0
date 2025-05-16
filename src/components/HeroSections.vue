<template>
  <div class="hero bg-[#0E0F11] min-h-screen relative overflow-hidden">
    <!-- Animated Shapes -->
    <div class="absolute inset-0 overflow-hidden">
      <!-- Gradient Blobs -->
      <div class="shape-blob blue-blob"></div>
      <div class="shape-blob purple-blob"></div>
      <div class="shape-blob cyan-blob"></div>
      
      <!-- Grid Overlay -->
      <div class="grid-pattern"></div>
    </div>

    <!-- Light Effects (Enhanced) -->
    <img src="@/assets/image/layer-blur.svg" alt="Light Effect" 
         class="absolute top-0 left-48 z-0 animate-pulse opacity-50" />
    <img src="@/assets/image/layer-blur.svg" alt="Light Effect" 
         class="absolute top-0 right-48 z-0 animate-pulse opacity-50" />
    <img src="@/assets/image/lines.svg" alt="Light Effect" 
         class="absolute lg:top-0 top-30 right-0 z-0 animate-float" />

    <div class="hero-content flex flex-col w-full relative z-10">
      <!-- Image Slider Container -->
      <div class="slider-container w-full max-w-4xl mx-auto mb-8 p-8 rounded-3xl 
                   backdrop-blur-lg  ">
        <div class="slider-images h-64 lg:h-96">
          <img src="@/assets/image/air.png" alt="Air Freight" 
               class="slider-image active w-full h-full object-contain drop-shadow-2xl" />
          <img src="@/assets/image/ship.png" alt="Sea Freight" 
               class="slider-image w-full h-full object-contain drop-shadow-2xl" />
          <img src="@/assets/image/truck (2).png" alt="Land Freight" 
               class="slider-image w-full h-full object-contain drop-shadow-2xl" />
        </div>
      </div>

      <!-- Text Content -->
      <div dir="rtl" class="text-center w-full max-w-4xl mx-auto p-8 rounded-3xl 
                             ">
        <div dir="rtl" class="text-slides">
          <h1 class="font-bold   
                     text-gray-200  text-3xl md:text-5xl leading-normal mb-6">
            GAB International Company
          </h1>
          <div class="text-slide active mt-4">
            <p class="font-semibold text-blue-400 text-4xl md:text-6xl leading-normal mb-6">
              Air Freight
            </p>
          </div>
          <div class="text-slide mt-4">
            <p class="font-semibold text-blue-400 text-4xl md:text-6xl leading-normal mb-6">
              Sea Freight
            </p>
          </div>
          <div class="text-slide mt-4">
            <p class="font-semibold text-blue-400 text-4xl md:text-6xl leading-normal mb-6">
              Land Freight            </p>
          </div>
        </div>

        <button class="mt-4 px-8 py-4 bg-gradient-to-r from-cyan-600 to-cyan-800 
                      font-semibold text-white text-lg rounded-full shadow-lg 
                      hover:shadow-cyan-500/25 hover:-translate-y-0.5 
                      transition-all duration-300 relative overflow-hidden group">
          <span class="relative z-10">Start Now</span>
          <div class="absolute inset-0 bg-gradient-to-r from-cyan-500 to-cyan-700 
                      transform scale-x-0 group-hover:scale-x-100 
                      transition-transform origin-left duration-300"></div>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    this.startSlider();
  },
  methods: {
    startSlider() {
      const images = document.querySelectorAll(".slider-image");
      const texts = document.querySelectorAll(".text-slide");
      let currentSlide = 0;
      const totalSlides = images.length;

      setInterval(() => {
        images.forEach((img) => img.classList.remove("active"));
        texts.forEach((text) => text.classList.remove("active"));

        images[currentSlide].classList.add("active");
        texts[currentSlide].classList.add("active");

        currentSlide = (currentSlide + 1) % totalSlides;
      }, 5000);
    }
  }
}
</script>

<style scoped>
.shape-blob {
  position: absolute;
  border-radius: 50%;
  filter: blur(40px);
  opacity: 0.3;
  animation: float 15s infinite;
}

.blue-blob {
  width: 400px;
  height: 400px;
  background: #60A5FA;
  top: -100px;
  left: -100px;
  animation-delay: 0s;
}

.purple-blob {
  width: 350px;
  height: 350px;
  background: #818CF8;
  bottom: -100px;
  right: -100px;
  animation-delay: -5s;
}

.cyan-blob {
  width: 300px;
  height: 300px;
  background: #34D399;
  bottom: 50%;
  left: 50%;
  animation-delay: -10s;
}

.grid-pattern {
  position: absolute;
  inset: 0;
  background-image: linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px);
  background-size: 32px 32px;
  mask-image: radial-gradient(circle at center, transparent 0%, black 100%);
}

@keyframes float {
  0% { transform: translate(0, 0) rotate(0); }
  33% { transform: translate(30px, -50px) rotate(10deg); }
  66% { transform: translate(-20px, 20px) rotate(-10deg); }
  100% { transform: translate(0, 0) rotate(0); }
}

/* Enhanced slider animations */
.slider-image {
  position: absolute;
  height: 100%;
  opacity: 0;
  transform: translateX(-100%) scale(0.9);
  transition: all 0.9s cubic-bezier(0.4, 0, 0.2, 1);
}

.slider-image.active {
  opacity: 1;
  transform: translateX(0) scale(1);
}

.text-slide {
  opacity: 0;
  transform: translateX(100%) scale(0.9);
  transition: all 0.9s cubic-bezier(0.4, 0, 0.2, 1);
  position: absolute;
}

.text-slide.active {
  opacity: 1;
  transform: translateX(0) scale(1);
  position: relative;
}

/* Add hover effects for containers */
.slider-container,
.text-center {
  transition: transform 0.3s ease;
}

.slider-container:hover,
.text-center:hover {
  transform: translateY(-2px);
}
</style>