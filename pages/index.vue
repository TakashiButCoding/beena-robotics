<template>
  <div>
    <Carousel :images="imageList" />
    <intro/>
    <CourseFilter/>
    <Feedback/>
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'default'
});

import Carousel from '~/components/Carousel.vue';
import Intro from '~/components/Intro.vue';
import CourseFilter from '~/components/CourseFilter.vue';
import Feedback from '~/components/Feedback.vue';
const imageList = [
  { src: '/carousel/image1.png', alt: 'Image 1' },
  { src: '/carousel/image2.png', alt: 'Image 2' },
];


</script>