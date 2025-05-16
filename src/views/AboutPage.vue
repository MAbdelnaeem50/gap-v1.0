<template>
  <div>
    <!-- Header Section -->
    <header-section class=""></header-section>
    <!-- About Section -->
    <about-section></about-section>
    <!-- States Section -->
    <states-section></states-section>
    <!-- Footer Section -->
    <footer-section></footer-section>
  </div>
</template>

<script>
import HeaderSection from '@/components/HeaderSection.vue';
import AboutSection from '@/components/AboutSection.vue';
import statesSection from '@/components/statesSection.vue';
import FooterSection from '@/components/FooterSection.vue';
export default {
    components: {
        HeaderSection,
        AboutSection,
        statesSection,
        FooterSection
    }
}
</script>

<style>

</style>