<template>
    <div class="bg-[#343434] text-white">
        
        <div class=" max-w-7xl mx-auto p-4 flex flex-col justify-center items-center md:flex-row md:justify-between flex-wrap">
            <NuxtLink to="/" class="text-3xl font-bold flex items-center justify-center m-2" >
                <div class="text-primary mr-2">
                    BEENA
                </div>
                <div class="text-white">
                    ROBOTICS    
                </div>
            </NuxtLink>
            <div class="flex items-center justify-center flex-wrap my-2">
                <div>
                    <NuxtLink to="/" class="hover:text-primary f2 mx-2">
                        Home
                    </NuxtLink>
                </div>
                <div v-for="name in directory">
                    <NuxtLink :to="name.replace(/ /g, '').toLowerCase()" class="hover:text-primary f2 mx-2">
                        {{ name }}
                    </NuxtLink>
                    
                </div>
            </div>
            <div class="flex items-center gap-4 m-2">
                <a href="https://www.facebook.com/BeenaRobotics" target="_blank">
                    <div class="bg-[#1877F2] rounded-full p-1">
                        <Icon icon="line-md:facebook" class="h-6 w-6 md:h-10 md:w-10" style="color: #fff" />
                    </div>
                </a>
                <a target="_blank">
                    <div class="bg-[#21B94E] rounded-full p-1">
                        <Icon icon="uil:line" class="h-6 w-6 md:h-10 md:w-10"  style="color: #fff" />
                    </div>
                </a>
                <a href="https://www.youtube.com/@BeenaRobotics" target="_blank">
                    <div class="bg-[#FF0000] rounded-full p-1">
                        <Icon icon="line-md:youtube" class="h-6 w-6 md:h-10 md:w-10"  style="color: #fff" />
                    </div>
                </a>
            </div>
        </div>
    </div>
</template>
<script setup>
import { Icon } from '@iconify/vue';
const directory = ['Courses', 'Awards', 'About Us', 'Contact Us'];
</script>