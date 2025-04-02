<template>
    <div>
        <Title name="COACH" imgLink="coach.jpg" />
        <div class="flex justify-center items-center p-10 flex-wrap">
            <div v-for="list in coachData">
                <div class="mx-4 rounded-3xl overflow-hidden shadow-xl my-41">
                    <div class=" h-[400px] w-[300px]">
                        <img class="h-full w-full object-cover" :src="`/coach/${list.imgPath}`" >
                    </div>
                    <div class="bg-secondary font-semibold text-white p-4 text-center">
                        <div>{{ list.name }}</div>   
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import Title from '~/components/Title.vue';

const loading = ref(true);
const error = ref(null);
const coachData = ref([]);
onMounted(async () => {
    try {
        const response = await fetch('/db/coach.json');
        if (!response.ok) throw new Error(`Failed to fetch awardss: ${response.statusText}`);
        coachData.value = await response.json();
    } catch (err) {
        error.value = err.message;
    } finally {
        loading.value = false;
    }
});
</script>