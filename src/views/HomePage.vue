<template>
  <div>
   
    <!-- Header Section -->
    <header-section class=""></header-section>


    <!-- Hero Section -->
    <hero-sections></hero-sections>
    
    <!-- Features Section -->
    <features-section></features-section>

    <!-- Websites Section -->
    <websites-section></websites-section>

    <!-- Customers Section -->
    <customers-section></customers-section>

    <!-- Faqs Section -->
    <faqs-section></faqs-section>

    <!-- Quote Section -->    
    <quote-section></quote-section>

    <!-- Footer Section -->
    <footer-section></footer-section>
  </div>
</template>

<script>
import HeaderSection from '@/components/HeaderSection.vue';
import HeroSections from '@/components/HeroSections.vue';
import FeaturesSection from '@/components/FeaturesSection.vue';
import WebsitesSection from '@/components/WebsitesSection.vue';
import CustomersSection from '@/components/CustomersSection.vue';
import FaqsSection from '@/components/FaqsSection.vue';
import QuoteSection from '@/components/QuoteSection.vue';
import FooterSection from '@/components/FooterSection.vue';

export default {
  components: {
    HeaderSection,
    HeroSections,
    FeaturesSection,
    WebsitesSection,
    CustomersSection,
    FaqsSection,
    QuoteSection,
    FooterSection
  }
};
</script>

<style>
/* Add your global styles here */
</style>