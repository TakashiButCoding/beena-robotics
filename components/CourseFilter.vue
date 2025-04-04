<template>
    <div class="py-8 bg-white">
        <p class="text-center font-bold f1 p-2 text-secondary">COURSES</p>
        <p class="text-center mt-2">โปรดเลือกช่วงอายุ</p>
        <div class="flex justify-center items-center gap-2 md:gap-4 p-2 md:p-4 flex-wrap">
            <button 
                @click="selectAgeIndex = -1"
                class="w-16 md:w-20 h-8 md:h-10 f2 rounded-lg shadow-md  hover:scale-110 duration-200 transition-all"
                :class="selectAgeIndex === -1 ? 'bg-primary text-white' : 'bg-gray-100'"
            >
                All
            </button>
            <div v-for="(age, index) in ageList" :key="index">
                <button 
                    @click="selectAgeIndex = index " 
                    class="w-16 md:w-20 h-8 md:h-10 f2 rounded-lg shadow-md  hover:scale-110 duration-200 transition-all "
                    :class="selectAgeIndex === index  ? 'bg-primary text-white' : 'bg-gray-100'"
                >
                    {{ age }}
                </button>
            </div>
        </div>
        <!-- <div v-if="filteredCourses.length != 0" class="relative max-w-5xl overflow-hidden mx-auto">
            <div class="flex transition-transform duration-500" :style="{ transform: `translateX(-${currentIndex * 100}%)` }">
                <div v-for="(image, index) in filteredCourses" :key="index" class="flex-none w-full">
                    <img :src="image.imgPath" :alt="image.alt" class="w-full h-auto" />
                </div>
            </div>
            <button @click="prev" class="absolute top-1/2 left-0 transform -translate-y-1/2 bg-slate-700 rounded-full  text-white mx-2">
                <Icon icon="line-md:chevron-small-left" class="md:w-12 md:h-12 w-10 h-10"  style="color: #fff" />
            </button>
            <button @click="next" class="absolute top-1/2 right-0 transform -translate-y-1/2 bg-slate-700 rounded-full rotate-180 text-white mx-2">
                <Icon icon="line-md:chevron-small-left" class="md:w-12 md:h-12 w-10 h-10"  style="color: #fff" />
            </button>
        </div>
        <div v-else class="text-center text-2xl font-bold text-primary">No courses found.</div>
        <div v-if="loading" class="text-center text-2xl font-bold text-primary">Loading...</div>
        <div v-else-if="filteredCourses.length != 0" class="max-w-5xl mx-auto p-4">
            {{ filteredCourses[currentIndex].description }}
            {{ filteredCourses[currentIndex].id}}
            <NuxtLink>
                <button class="bg-primary text-white text-center py-2 px-6 rounded-lg mt-4">
                    รายระเอียดเพิ่มเติม
                </button>
            </NuxtLink>
        </div> -->
        <div class="flex items-center justify-center p-10">
            coming soon ...
        </div>
    </div>
    
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import { Icon } from '@iconify/vue';
const ageList = ['3-5', '6-8', '9-12', '13-16', '17-19', '20+'];
const ageListValue = [[3, 5], [6, 8], [9, 12], [13, 16], [17, 19], [20, 100]];

const selectAgeIndex = ref(-1); // Selected age index (-1 for "All")
const courseData = ref([]); // Loaded course data
const loading = ref(true); // Loading state
const error = ref(null); // Error message

const currentIndex = ref(0);

onMounted(async () => {
    try {
        const response = await fetch('/db/courses.json');
        if (!response.ok) throw new Error(`Failed to fetch courses: ${response.statusText}`);
        courseData.value = await response.json();
    } catch (err) {
        error.value = err.message;
    } finally {
        loading.value = false;
    }
});

const filteredCourses = computed(() => {
    currentIndex.value = 0; 
    if (selectAgeIndex.value === -1) {
        return courseData.value; // Return all courses if "All" is selected
    }
    return courseData.value.filter(course => {
        const selectedMinAge = ageListValue[selectAgeIndex.value][0];
        const selectedMaxAge = ageListValue[selectAgeIndex.value][1];
        const courseMinAge = course.age[0];
        const courseMaxAge = course.age[1];
        
        // Check if there is overlap between the selected age range and course age range
        return (
            (selectedMinAge <= courseMaxAge && selectedMinAge >= courseMinAge) || 
            (selectedMaxAge >= courseMinAge && selectedMaxAge <= courseMaxAge) || 
            (selectedMinAge <= courseMinAge && selectedMaxAge >= courseMaxAge) // Selected range fully contains course range
        );
    });
});

function next() {
    currentIndex.value = (currentIndex.value + 1) % courseData.value.length;
}

function prev() {
    currentIndex.value = (currentIndex.value - 1 + courseData.value.length) % courseData.value.length;
}
</script>
