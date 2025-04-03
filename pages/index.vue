<template>
  <div>
    <Carousel :images="imageList" />
    <intro/>
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
];

useHead({
  title: "Best Robotics Solutions",
  meta: [
    { name: "google-site-verification", content:"jiTrGyIUrEdU5OAZGpY2uwogo6FVzQarEtTOWh6zKA0"},
    { name: "description", content: "The best robotics institude in Thailand" },
    { name: "keywords", content: "beenarobotics,beena robotics,robotics,lego mindstorms,vex,vex iq,arduino " }
  ]
});

</script>