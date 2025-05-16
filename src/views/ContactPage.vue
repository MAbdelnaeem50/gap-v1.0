<template>
  <div>
    <!-- Header Section -->
    <header-section class=""></header-section>

    <!-- Contact Section -->
    <contact-section></contact-section>
    <!-- Footer Section -->
    <footer-section></footer-section>
  </div>
</template>

<script>
import HeaderSection from '@/components/HeaderSection.vue';
import ContactSection from '@/components/ContactSection.vue';
import FooterSection from '@/components/FooterSection.vue';
export default {
    components: {
        HeaderSection,
        ContactSection,
        FooterSection
    },
    data() {
        return {
           
        };
    },

}
</script>

<style>

</style>