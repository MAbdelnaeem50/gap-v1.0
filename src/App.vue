<template>
  <div :class="{ 'dark': isDarkMode }">
    <router-view />
  </div>
</template>

<script>
export default {
  data() {
    return {
      isDarkMode: false,
    };
  },

  created() {
    // Load dark mode preference from localStorage
    const savedMode = localStorage.getItem('darkMode');
    this.isDarkMode = savedMode === 'true';
    // Apply dark mode class on initial load
    document.documentElement.classList.toggle('dark', this.isDarkMode);
  },

  methods: {
    toggleDarkMode() {
      this.isDarkMode = !this.isDarkMode;
      // Save to localStorage
      localStorage.setItem('darkMode', this.isDarkMode);
      // Toggle dark mode class
      document.documentElement.classList.toggle('dark', this.isDarkMode);
    },
  },
};
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