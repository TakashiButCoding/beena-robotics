<template>
    <div>
        <Title name="AWARDS" imgLink="awards.jpg" />
        <div class="flex items-center justify-center flex-wrap m-2">
            <div v-for="(year,index) in yearList">
                <button @click="selectedYearIndex = index" 
                class=" m-2 w-20 h-10 rounded-lg shadow-lg font-semibold hover:scale-110 duration-200 transition-all" 
                :class="selectedYearIndex === index ? 'bg-primary text-white' : 'bg-white'">
                    {{ year }}
                </button>
            </div>
        </div>
        <div class="text-center text-3xl font-bold text-primary bg-white rounded-3xl shadow-lg p-4 w-60 mx-auto mt-10">
            {{ yearList[selectedYearIndex] }} 
        </div>
        <div class="mb-10">
            <div v-for="(awardList,index) in awardsData[selectedYearIndex]">
                <div class="flex">
                    <div class=" border-r-2 border-secondary h-8 flex-1"></div>
                    <div class=" border-l-2 border-secondary h-8 flex-1"></div>
                </div>
                <div class="text-center text-2xl font-bold text-primary bg-white rounded-3xl shadow-lg p-4 w-80 mx-auto">
                    {{ awardList.month.toUpperCase() }} 
                </div>
                <div class="flex">
                    <div class=" border-r-2 border-secondary h-2 flex-1"></div>
                    <div class=" border-l-2 border-secondary h-2 flex-1"></div>
                </div>
                <div class=" text-center bg-white max-w-7xl overflow-hidden mx-auto p-4 shadow-xl rounded-3xl">
                    <p class="text-xl text-secondary font-semibold">{{ awardList.name }}</p>
                    <div class="flex items-center justify-center flex-wrap">
                        <div v-for="awards in awardList.awards" class="m-4">
                            <p class="flex items-center justify-center gap-2 font-semibold text-lg">
                                <Icon icon="ph:medal-fill" 
                                :class="awards.place.toLowerCase() === 'champion' ? 'text-[#fcb434]' : awards.place === '1 runner up' ? 'text-[#d6d6d6]' : awards.place === '2 runner up' ? 'text-[#977547]' : 'text-[#b5a642]'"
                                class="h-8 w-8" />
                                {{ awards.place }}
                            </p>
                            <p>{{ awards.class }}</p>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import { Icon } from '@iconify/vue';
import Title from '~/components/Title.vue';

const loading = ref(true);
const error = ref(null);
const yearList = [2016, 2017, 2018, 2019, 2020, 2021,2022,2023,2024,2025];
const selectedYearIndex = ref(0);

const awardsData = ref([]);
onMounted(async () => {
    try {
        const response = await fetch('/db/awards.json');
        if (!response.ok) throw new Error(`Failed to fetch awardss: ${response.statusText}`);
        awardsData.value = await response.json();
    } catch (err) {
        error.value = err.message;
    } finally {
        loading.value = false;
    }
});
</script>