<template>
  <div class="relative w-full overflow-hidden lg:h-[800px] max-w-screen-desktop mx-auto">
    <div class="flex transition-transform duration-500" :style="{ transform: `translateX(-${currentIndex * 100}%)` }">
      <div v-for="(image, index) in images" :key="index" class="flex-none w-full">
        <img :src="image.src" :alt="image.alt" class="w-full h-auto" />
      </div>
    </div>
    <button @click="prev" class="absolute top-1/2 left-0 transform -translate-y-1/2 bg-slate-700 rounded-full  text-white mx-2">
       <Icon icon="line-md:chevron-small-left" class="md:w-12 md:h-12 w-10 h-10"  style="color: #fff" />
    </button>
    <button @click="next" class="absolute top-1/2 right-0 transform -translate-y-1/2 bg-slate-700 rounded-full rotate-180 text-white mx-2">
       <Icon icon="line-md:chevron-small-left" class="md:w-12 md:h-12 w-10 h-10"  style="color: #fff" />
    </button>
  </div>
</template>

<script setup>
import { Icon } from '@iconify/vue';

const props = defineProps({
  images: {
    type: Array,
    required: true,
    default: () => []
  }
});

const currentIndex = ref(0);
let intervalId;

function next() {
  currentIndex.value = (currentIndex.value + 1) % props.images.length;
  resetInterval();
}

function prev() {
  currentIndex.value = (currentIndex.value - 1 + props.images.length) % props.images.length;
  resetInterval();
}

function resetInterval() {
  clearInterval(intervalId);
  intervalId = setInterval(() => {
    next();
  }, 3000);
}

onMounted(() => {
  intervalId = setInterval(() => {
    next();
  }, 3000);
});

onUnmounted(() => {
  clearInterval(intervalId);
});
</script>
