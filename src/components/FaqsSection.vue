<template>
    <section class="relative py-24 overflow-hidden bg-[#0E0F11]">
      <div class="container px-4 mx-auto">
        <!-- Title Section -->
        <div class="text-center mb-16">
         
          <h2 class="font-heading mb-6 text-7xl lg:text-8xl text-white tracking-8xl md:max-w-md mx-auto">
             Most Asked Questions
          </h2>
          
        </div>

        <!-- FAQ Items with enhanced styling -->
        <div class="max-w-3xl mx-auto relative z-10">
          <div v-for="(faq, index) in faqs" :key="index" class="mb-6">
            <!-- Question with glass effect -->
            <div
              @click="toggleFAQ(index)"
              class="flex justify-between items-center p-6 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 
                     border border-gray-800/30 rounded-2xl cursor-pointer hover:bg-gray-900 
                     transition-all duration-300 hover:transform hover:scale-[1.02] hover:shadow-xl"
            >
              <h3 class="text-xl text-white">{{ faq.question }}</h3>
              <svg
                class="w-6 h-6 text-blue-400 transform transition-transform duration-300"
                :class="{ 'rotate-180': faq.isOpen }"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </div>

            <!-- Answer with glass effect -->
            <transition name="slide">
              <div v-if="faq.isOpen" 
                   class="p-6 bg-gradient-to-br from-gray-900/50 via-gray-800/50 to-gray-900/50 
                          border border-gray-800/30 rounded-b-2xl backdrop-blur-sm">
                <p class="text-gray-300">{{ faq.answer }}</p>
              </div>
            </transition>
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
      faqs: [
        {
          question: "What services do you offer?",
          answer: "We offer a wide range of services including security solutions, asset management, and financial consulting.",
          isOpen: false,
        },
        {
          question: "How do I get started?",
          answer: "You can get started by contacting our support team or signing up directly on our website.",
          isOpen: false,
        },
        {
          question: "Is my data secure?",
          answer: "Yes, we use state-of-the-art encryption and security measures to protect your data.",
          isOpen: false,
        },
        {
          question: "What payment methods do you accept?",
          answer: "We accept all major credit cards, PayPal, and bank transfers.",
          isOpen: false,
        },
        {
          question: "Can I cancel my subscription?",
          answer: "Yes, you can cancel your subscription at any time from your account settings.",
          isOpen: false,
        },
      ],
    };
  },
  methods: {
    toggleFAQ(index) {
      this.faqs[index].isOpen = !this.faqs[index].isOpen;
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