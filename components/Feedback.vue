<template>
    <div v-if="loading"></div>
    <div v-else>
        <p class="text-center font-bold text-4xl  text-secondary my-10">FEEDBACK</p>
        <div class=" max-w-5xl mx-auto ">
            <div v-for="info in feedbackData">
                <div class="flex shadow-lg overflow-hidden rounded-3xl bg-white my-4">
                    <div class="w-1/4">
                        <img :src="info.img" class="" />
                    </div>
                    <div class="p-4 ">
                        <p>{{ info.name }}</p>
                        <p>{{ info.text }}</p>
                    </div>
                </div>
            </div>
        </div>
        <p class="text-center font-bold text-4xl text-secondary my-10">MESSAGE FROM SENIOR</p>
        <div class="flex justify-center max-w-7xl mx-auto">
            <iframe class="w-full h-[600px]" src="https://www.youtube-nocookie.com/embed/a7dr2v-c0i4?si=3QCQerE0LXupZDJ0" title="YouTube video player" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
    </div>
</template>
<script setup>
const feedbackData = ref([]);
const loading = ref(true);
const error = ref(null);
onMounted(async () => {
    try {
        const response = await fetch('/db/feedback.json');
        if (!response.ok) throw new Error(`Failed to fetch courses: ${response.statusText}`);
        feedbackData.value = await response.json();
    } catch (err) {
        error.value = err.message;
    } finally {
        loading.value = false;
    }
});
</script>