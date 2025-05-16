<template>
  <section class="relative py-24 overflow-hidden bg-[#0E0F11]">
    <div class="container px-4 mx-auto">
      <!-- Title -->
      <div class="mb-20 md:max-w-xl text-center mx-auto">
        <h2 class="font-heading text-7xl lg:text-8xl text-white tracking-tighter-xl">Features</h2>
      </div>

      <!-- Main Feature -->
      <div class="relative mb-10 py-20 px-16 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 overflow-hidden border border-gray-800/30 rounded-5xl shadow-xl">
        <div class="max-w-6xl mx-auto">
          <div class="relative z-10 flex flex-wrap items-center -m-8">
            <div class="w-full md:w-1/2 p-8">
              <div class="max-w-md mx-auto text-center">
                <h2 class="mb-6 text-7xl text-white tracking-tighter-xl">Air Freight</h2>
                <p class="text-white text-opacity-60">GAP International is part of the global freight group that uses an extensive network of agents that are present worldwide in almost all important airports. They are familiar with the local situation and can act as a point of contact for your customer and provide them with the fastest service.</p>
              </div>
            </div>
            <div class="w-full md:w-1/2 p-8"><img class="mx-auto md:mr-0 rounded-4xl" src="@/assets/image/airfright.jpg" alt=""/></div>
          </div>
        </div><img class="absolute bottom-0 left-0" src="@/assets/template-assets/images/features/bg-gray.png" alt=""/>
      </div>

      <!-- Feature Cards -->
      <div class="flex flex-wrap -m-5">
        <div class="w-full md:w-1/2 p-5">
          <div class="relative px-16 pt-14 pb-16 h-full bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 overflow-hidden border border-gray-800/30 rounded-5xl shadow-xl">
            <img class="mb-14 rounded-4xl" src="@/assets/image/seafre.jpeg" alt=""/>
            <div class="relative z-10 max-w-sm text-center mx-auto">
              <h2 class="mb-6 text-7xl text-white tracking-tighter">Sea Freight</h2>
              <p class="text-white text-opacity-60">As a shipper, GAP International is always flexible in its expectations for urgent deliveries, and it sees to it that it always takes care of the actual handling and transportation of the goods before or after shipment.</p>
            </div>
            <img class="absolute bottom-0 right-0" src="@/assets/template-assets/images/features/bg-gray-2.png" alt=""/>
          </div>
        </div>
        <div class="w-full md:w-1/2 p-5">
          <div class="relative px-16 pt-14 pb-16 h-full bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 overflow-hidden border border-gray-800/30 rounded-5xl shadow-xl">
            <img class="mb-14 rounded-4xl" src="@/assets/image/seafre.jpeg" alt=""/>
            <div class="relative z-10 max-w-sm text-center mx-auto">
              <h2 class="mb-6 text-7xl text-white tracking-tighter">Sea Freight</h2>
              <p class="text-white text-opacity-60">As a shipper, GAP International is always flexible in its expectations for urgent deliveries, and it sees to it that it always takes care of the actual handling and transportation of the goods before or after shipment.</p>
            </div>
            <img class="absolute bottom-0 right-0" src="@/assets/template-assets/images/features/bg-gray-2.png" alt=""/>
          </div>
        </div>
        
    
      </div>
    </div>

    <!-- Add decorative elements -->
    <div class="absolute inset-0 pointer-events-none">
      <div class="absolute inset-0 bg-gradient-to-b from-transparent via-gray-900/20 to-transparent"></div>
      <div class="absolute -top-48 -left-48 w-96 h-96 bg-blue-500/10 rounded-full filter blur-3xl"></div>
      <div class="absolute -bottom-48 -right-48 w-96 h-96 bg-purple-500/10 rounded-full filter blur-3xl"></div>
    </div>
  </section>
</template>

<script>
export default {

}
</script>

<style scoped>
/* Add these styles for additional effects */
.rounded-5xl {
  border-radius: 3rem;
}

/* Optional: Add hover effects */
.bg-gradient-to-br {
  transition: all 0.3s ease-in-out;
}

.bg-gradient-to-br:hover {
  transform: translateY(-2px);
  box-shadow: 0 20px 40px -15px rgba(0, 0, 0, 0.3);
  border-color: rgba(59, 130, 246, 0.5);
}

/* Add glass effect */
.glass-effect {
  backdrop-filter: blur(16px);
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.05),
    rgba(255, 255, 255, 0.01)
  );
}
</style>