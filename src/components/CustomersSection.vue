<template>
    <section class="relative py-24 overflow-hidden bg-[#0E0F11]">
      <div class="container px-4 mx-auto">
        <!-- Title Section -->
        <div class="mb-20 md:max-w-xl text-center mx-auto">
        <h2 class="font-heading text-7xl lg:text-8xl text-white tracking-tighter-xl">Customers</h2>
      </div>
  
        <!-- Customer Cards Grid -->
        <div class="flex flex-wrap -m-3">
          <template v-for="(card, index) in displayedCards" :key="index">
            <div class="w-full md:w-1/2 lg:w-1/4 p-3">
              <div class="flex flex-wrap -m-3">
                <div class="w-full p-3">
                  <div class="px-6 py-8 border border-gray-800 rounded-5xl bg-gray-900/50 backdrop-blur-sm hover:transform hover:scale-105 transition-all duration-300">
                    <!-- Card Content -->
                    <div class="flex flex-wrap items-center -m-3 mb-3">
                      <div class="w-auto p-3">
                        <img :src="card.avatar" alt="" class="w-12 h-12 rounded-full object-cover"/>
                      </div>
                      <div class="w-auto p-3">
                        <h2 class="text-2xl text-white">{{ card.name }}</h2>
                        <p class="text-sm text-gray-300">{{ card.username }}</p>
                      </div>
                    </div>
                    <p class="mb-4 text-white">{{ card.testimonial }}</p>
                    <div class="flex flex-wrap items-center justify-between">
                      <div class="flex items-center space-x-2">
                        <svg class="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                        <p class="text-sm text-gray-300">{{ card.timeAgo }}</p>
                      </div>
                      <div class="flex items-center space-x-4">
                        <button class="flex items-center space-x-1 text-gray-300 hover:text-blue-400 transition-colors">
                          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                          </svg>
                          <span>{{ card.likes }}</span>
                        </button>
                        <button class="flex items-center space-x-1 text-gray-300 hover:text-blue-400 transition-colors">
                          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
                          </svg>
                          <span>{{ card.comments }}</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </template>
        </div>
  
        <!-- Show More Button -->
        <div v-if="!showAllCards" 
             class="mt-12 text-center">
          <button @click="showAllCards = true" 
                  class="px-8 py-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-full 
                         transform transition-all duration-300 hover:scale-105 hover:shadow-lg">
            Show more
          </button>
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
        showAllCards: false,
        cards: [
          {
            name: 'John Smith',
            username: '@johnsmith',
            avatar: require('@/assets/template-assets/images/cards/avatar2.png'),
            testimonial: 'The security features provided by GAB International give me peace of mind. My assets are well-protected.',
            timeAgo: '2 hours ago',
            likes: 124,
            comments: 46
          },
          {
            name: 'John Smith',
            username: '@johnsmith',
            avatar: require('@/assets/template-assets/images/cards/avatar2.png'),
            testimonial: 'The security features provided by GAB International give me peace of mind. My assets are well-protected.',
            timeAgo: '2 hours ago',
            likes: 124,
            comments: 46
          },
          {
            name: 'John Smith',
            username: '@johnsmith',
            avatar: require('@/assets/template-assets/images/cards/avatar2.png'),
            testimonial: 'The security features provided by GAB International give me peace of mind. My assets are well-protected.',
            timeAgo: '2 hours ago',
            likes: 124,
            comments: 46
          },
          {
            name: 'John Smith',
            username: '@johnsmith',
            avatar: require('@/assets/template-assets/images/cards/avatar2.png'),
            testimonial: 'The security features provided by GAB International give me peace of mind. My assets are well-protected.',
            timeAgo: '2 hours ago',
            likes: 124,
            comments: 46
          },
          {
            name: 'John Smith',
            username: '@johnsmith',
            avatar: require('@/assets/template-assets/images/cards/avatar2.png'),
            testimonial: 'The security features provided by GAB International give me peace of mind. My assets are well-protected.',
            timeAgo: '2 hours ago',
            likes: 124,
            comments: 46
          },
          {
            name: 'John Smith',
            username: '@johnsmith',
            avatar: require('@/assets/template-assets/images/cards/avatar2.png'),
            testimonial: 'The security features provided by GAB International give me peace of mind. My assets are well-protected.',
            timeAgo: '2 hours ago',
            likes: 124,
            comments: 46
          },
          {
            name: 'John Smith',
            username: '@johnsmith',
            avatar: require('@/assets/template-assets/images/cards/avatar2.png'),
            testimonial: 'The security features provided by GAB International give me peace of mind. My assets are well-protected.',
            timeAgo: '2 hours ago',
            likes: 124,
            comments: 46
          },
          {
            name: 'John Smith',
            username: '@johnsmith',
            avatar: require('@/assets/template-assets/images/cards/avatar2.png'),
            testimonial: 'The security features provided by GAB International give me peace of mind. My assets are well-protected.',
            timeAgo: '2 hours ago',
            likes: 124,
            comments: 46
          },
          {
            name: 'John Smith',
            username: '@johnsmith',
            avatar: require('@/assets/template-assets/images/cards/avatar2.png'),
            testimonial: 'The security features provided by GAB International give me peace of mind. My assets are well-protected.',
            timeAgo: '2 hours ago',
            likes: 124,
            comments: 46
          },
          {
            name: 'John Smith',
            username: '@johnsmith',
            avatar: require('@/assets/template-assets/images/cards/avatar2.png'),
            testimonial: 'The security features provided by GAB International give me peace of mind. My assets are well-protected.',
            timeAgo: '2 hours ago',
            likes: 124,
            comments: 46
          },
          {
            name: 'John Smith',
            username: '@johnsmith',
            avatar: require('@/assets/template-assets/images/cards/avatar2.png'),
            testimonial: 'The security features provided by GAB International give me peace of mind. My assets are well-protected.',
            timeAgo: '2 hours ago',
            likes: 124,
            comments: 46
          },
          {
            name: 'John Smith',
            username: '@johnsmith',
            avatar: require('@/assets/template-assets/images/cards/avatar2.png'),
            testimonial: 'The security features provided by GAB International give me peace of mind. My assets are well-protected.',
            timeAgo: '2 hours ago',
            likes: 124,
            comments: 46
          },
          {
            name: 'John Smith',
            username: '@johnsmith',
            avatar: require('@/assets/template-assets/images/cards/avatar2.png'),
            testimonial: 'The security features provided by GAB International give me peace of mind. My assets are well-protected.',
            timeAgo: '2 hours ago',
            likes: 124,
            comments: 46
          },
          {
            name: 'John Smith',
            username: '@johnsmith',
            avatar: require('@/assets/template-assets/images/cards/avatar2.png'),
            testimonial: 'The security features provided by GAB International give me peace of mind. My assets are well-protected.',
            timeAgo: '2 hours ago',
            likes: 124,
            comments: 46
          },
          {
            name: 'John Smith',
            username: '@johnsmith',
            avatar: require('@/assets/template-assets/images/cards/avatar2.png'),
            testimonial: 'The security features provided by GAB International give me peace of mind. My assets are well-protected.',
            timeAgo: '2 hours ago',
            likes: 124,
            comments: 46
          },
          {
            name: 'John Smith',
            username: '@johnsmith',
            avatar: require('@/assets/template-assets/images/cards/avatar2.png'),
            testimonial: 'The security features provided by GAB International give me peace of mind. My assets are well-protected.',
            timeAgo: '2 hours ago',
            likes: 124,
            comments: 46
          },
          // Add more card objects here...
        ]
      }
    },
    computed: {
      displayedCards() {
        return this.showAllCards ? this.cards : this.cards.slice(0, 8)
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
  
  .rounded-5xl {
    border-radius: 2rem;
  }
  
  /* Add animation for new cards */
  .w-full {
    transition: all 0.5s ease-out;
  }
  
  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  .w-full {
    animation: fadeIn 0.5s ease-out;
  }
  </style>