<template>
  <section class="relative py-24 overflow-hidden bg-[#0E0F11]">
    <div class="container px-4 mx-auto">
      <!-- Title Section -->
      <div class="mb-12 md:max-w-4xl text-center mx-auto">
      
        <h2 class="font-heading text-7xl lg:text-8xl text-white tracking-tighter-xl">
          Services
        </h2>
      </div>

      <!-- Navigation Tabs -->
      <ul class="mb-20 flex flex-wrap justify-center gap-4">
        <li v-for="tab in tabs" :key="tab.id">
          <a href="#" 
             class="inline-block px-5 py-5 font-medium tracking-tighter border rounded-full transition duration-200"
             :class="{
               'text-blue-400 border-blue-400': activeTab === tab.id,
               'text-gray-300 border-transparent hover:text-blue-300 hover:border-blue-300': activeTab !== tab.id
             }"
             @click.prevent="activeTab = tab.id">
            {{ tab.name }}
          </a>
        </li>
      </ul>

      <!-- Content Section -->
      <div class="relative">
        <div v-for="tab in tabs" 
             :key="tab.id" 
             class="transition-all duration-500 transform relative group"
             :class="{
               'opacity-100 scale-100': activeTab === tab.id,
               'opacity-0 scale-95 hidden': activeTab !== tab.id
             }">
          <img :src="tab.image" 
               :alt="tab.name" 
               class="mx-auto rounded-xl shadow-2xl transition-all duration-300 group-hover:brightness-50" />
          
          <!-- Hover Overlay with Button -->
          <div class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <a :href="tab.url" 
               target="_blank"
               class="px-8 py-4 bg-blue-400 hover:bg-blue-600 text-white font-semibold rounded-full
                      transform transition-all duration-300 hover:scale-105 hover:shadow-2xl
                      backdrop-blur-sm bg-opacity-80">
              Visit Site
            </a>
          </div>
        </div>
      </div>
    </div>

    <!-- Background Effects -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <div class="shape-blob blue-blob"></div>
      <div class="shape-blob purple-blob"></div>
      <div class="grid-pattern"></div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      activeTab: 'site1',
      tabs: [
        {
          id: 'site1',
          name: 'Website 1',
          image: require('@/assets/image/01.jpg'),
          url: 'https://example1.com'
        },
        {
          id: 'site2',
          name: 'Website 2',
          image: require('@/assets/image/02.jpg'),
          url: 'https://example2.com'
        },
        {
          id: 'site3',
          name: 'Website 3',
          image: require('@/assets/image/03.jpg'),
          url: 'https://example3.com'
        },
        {
          id: 'site4',
          name: 'Website 4',
          image: require('@/assets/image/04.jpg'),
          url: 'https://example4.com'
        }
      ]
    }
  }
}
</script>

<style scoped>
.shape-blob {
  position: absolute;
  border-radius: 50%;
  filter: blur(40px);
  opacity: 0.15;
  animation: float 15s infinite;
}

.blue-blob {
  width: 400px;
  height: 400px;
  background: #60A5FA;
  top: -100px;
  left: -100px;
}

.purple-blob {
  width: 350px;
  height: 350px;
  background: #818CF8;
  bottom: -100px;
  right: -100px;
  animation-delay: -7s;
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
  0%, 100% { transform: translate(0, 0) rotate(0deg); }
  33% { transform: translate(30px, -30px) rotate(5deg); }
  66% { transform: translate(-20px, 20px) rotate(-5deg); }
}

/* Add these new styles */
.group:hover img {
  transform: scale(1.02);
}

/* Optional: Add a subtle animation for the button */
@keyframes button-pop {
  0% { transform: scale(0.95); opacity: 0; }
  100% { transform: scale(1); opacity: 1; }
}

.group:hover a {
  animation: button-pop 0.3s ease-out forwards;
}
</style>