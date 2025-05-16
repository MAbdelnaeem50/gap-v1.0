<template>
    <section class="relative py-24 overflow-hidden bg-[#0E0F11]">
      <div class="container px-4 mx-auto">
        <!-- Title Section -->
        <div class="text-center mb-16">
          <h2 class="font-heading mb-6 text-7xl lg:text-8xl text-white tracking-8xl md:max-w-md mx-auto">
            Request a Quote
          </h2>
        </div>
  
        <!-- Content Section -->
        <div class="max-w-4xl mx-auto relative z-10">
          <div class="flex flex-col lg:flex-row items-center lg:items-start gap-12">
            <!-- Image or Avatar -->
          
  
            <!-- Form Section -->
            <div class="w-full lg:w-2/3 mx-auto">
              <form @submit.prevent="submitForm" class="space-y-6">
                <!-- Name Field -->
                <div>
                  <label for="name" class="block text-sm font-medium text-gray-300">Name</label>
                  <input
                    type="text"
                    id="name"
                    v-model="form.name"
                    required
                    class="mt-1 block w-full p-3 bg-gray-800 border border-gray-700 rounded-full text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter your name"
                  />
                </div>
  
                <!-- Phone Field -->
                <div>
                  <label for="phone" class="block text-sm font-medium text-gray-300">Phone</label>
                  <input
                    type="tel"
                    id="phone"
                    v-model="form.phone"
                    required
                    class="mt-1 block w-full p-3 bg-gray-800 border border-gray-700 rounded-full text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter your phone number"
                  />
                </div>
  
                <!-- Email Field -->
                <div>
                  <label for="email" class="block text-sm font-medium text-gray-300">Email</label>
                  <input
                    type="email"
                    id="email"
                    v-model="form.email"
                    required
                    class="mt-1 block w-full p-3 bg-gray-800 border border-gray-700 rounded-full text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter your email"
                  />
                </div>
  
                <!-- Request Field -->
                <div>
                  <label for="request" class="block text-sm font-medium text-gray-300">Request</label>
                  <textarea
                    id="request"
                    v-model="form.request"
                    rows="4"
                    required
                    class="mt-1 block w-full p-3 bg-gray-800 border border-gray-700 rounded-3xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter your request"
                  ></textarea>
                </div>
  
                <!-- Send Button -->
                <div>
                  <button
                    type="submit"
                    class="w-full p-3 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 transition-all duration-300 hover:transform hover:scale-105"
                  >
                    Send Request
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
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
    </section>
  </template>
  
  <script>
  export default {
    data() {
      return {
        form: {
          name: '',
          phone: '',
          email: '',
          request: '',
        },
      };
    },
    methods: {
      submitForm() {
        // Handle form submission
        console.log('Form submitted:', this.form);
        // You can add your API call or other logic here
      },
    },
  };
  </script>
  
  <style scoped>
  /* Existing transition styles */
  .slide-enter-active,
  .slide-leave-active {
    transition: all 0.3s ease;
  }
  
  .slide-enter-from,
  .slide-leave-to {
    opacity: 0;
    transform: translateY(-10px);
  }
  
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
    0%, 100% { transform: translate(0, 0) rotate(0deg); }
    33% { transform: translate(30px, -30px) rotate(5deg); }
    66% { transform: translate(-20px, 20px) rotate(-5deg); }
  }
  
  .animate-float {
    animation: float 15s infinite;
  }
  </style>