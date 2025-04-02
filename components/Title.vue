<template>
    <div>
        <div class="relative h-[150px] md:h-[300px] overflow-hidden flex items-center justify-center">
            <img :src="`/banner/${imgLink}`" :alt="`${name} Banner`" class="brightness-50 w-full h-auto" />
            <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-4xl font-bold">
                {{ name }}
            </div>
        </div>
    </div>
</template>
<script setup>
const props = defineProps({
    name: String,
    imgLink: String,
});
</script>