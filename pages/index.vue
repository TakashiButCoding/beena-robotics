<template>
  <div> 
    <Carousel :images="imageList" />
    <intro/>
    
    <div class="flex justify-center items-center my-10 h-[500px]">
      <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSf25jUyr-at_VaTHd_2EPCVD5BLm95WaCqqTo-YojrzW8Zw6g/viewform?embedded=true"  class="h-full w-full" frameborder="0" marginheight="0" marginwidth="0">กำลังโหลด…</iframe>
    </div>
    <CourseFilter/>
    <Feedback/>
    <Analytics />
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'default'
});

import { Analytics } from '@vercel/analytics/nuxt'
import Carousel from '~/components/Carousel.vue';
import Intro from '~/components/Intro.vue';
import CourseFilter from '~/components/CourseFilter.vue';
import Feedback from '~/components/Feedback.vue';
const imageList = [
  { src: '/carousel/image1.png', alt: 'Image 1' },
  { src: '/carousel/image2.png', alt: 'Image 2' },
  { src: '/carousel/image3.png', alt: 'Image 3' },
];

useHead({
  title: "Beena Robotics | Best Robotics Institute in Thailand",
  meta: [
    { name: "google-site-verification", content: "jiTrGyIUrEdU5OAZGpY2uwogo6FVzQarEtTOWh6zKA0" },
    { name: "description", content: "Beena Robotics is Thailand's best robotics institute, offering courses on LEGO Mindstorms, VEX IQ, and Arduino." },
    { name: "keywords", content: "beena robotics,Beena Robotics, robotics courses, LEGO Mindstorms, VEX IQ, Arduino, STEM education Thailand" },
    { name: "robots", content: "index, follow" }, // Ensures Google indexes your site

    // Open Graph (Facebook, LinkedIn)
    { property: "og:title", content: "Beena Robotics | Best Robotics Institute in Thailand" },
    { property: "og:description", content: "Learn robotics with LEGO Mindstorms, VEX IQ, and Arduino at Beena Robotics." },
    { property: "og:image", content: "https://www.beenarobotics.com/og-image.jpg" }, // Change to your actual image
    { property: "og:type", content: "website" },
    { property: "og:url", content: "https://www.beenarobotics.com" },

    // Twitter Card (for better Twitter sharing)
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: "Beena Robotics | Best Robotics Institute in Thailand" },
    { name: "twitter:description", content: "Join Beena Robotics for hands-on training in LEGO Mindstorms, VEX IQ, and Arduino." },
    { name: "twitter:image", content: "https://www.beenarobotics.com/og-image.jpg" }
  ],
  link: [{ rel: "canonical", href: "https://www.beenarobotics.com" }] // Helps with SEO rankings
});


</script>