<template>
    <div class="sticky top-0 z-30">
        <div class="bg-white h-14 relative shadow-md z-20 ">
            <NuxtLink class="absolute top-2 left-4" to="/">
                <img class="h-10" src="/logo/beena-logo.png"/>
            </NuxtLink>
            <div class=" hidden lg:flex h-full justify-center items-center gap-2">
                <NuxtLink to="/">
                    <button
                    class="font-bold  py-3 px-6 "
                    :class="currentPath.toLowerCase() === 'index' ? 'text-primary border-b-4 mt-1 border-b-primary' : 'text-secondary rounded-xl hover:bg-gray-100'"
                    >
                        Home
                    </button>
                </NuxtLink>
                <div v-for="name,index in buttonList" :key="name">
                    <NuxtLink :to="path[index]">
                        <button
                        class="font-bold  py-3 px-6 "
                        :class="currentPath.toLowerCase() === name.replace(/ /g, '').toLowerCase() ? 'text-primary border-b-4 mt-1 border-b-primary' : 'text-secondary rounded-xl hover:bg-gray-100'"
                        >
                            {{ name }}
                        </button>
                    </NuxtLink>
                </div>
            </div>
            <div class="flex lg:hidden justify-end items-center h-full">
                <button class="pr-4" @click="burger = !burger">
                    <Icon v-if="burger" icon="line-md:close-to-menu-alt-transition" width="24" height="24" />
                    <Icon v-else="burger" icon="line-md:close-small" width="24" height="24" />
                </button>
            </div>
            
        </div>
        <div class="flex flex-col lg:hidden divide-y divide-gray-300 px-4 py-1 bg-white text-white w-screen absolute transition-all duration-500 ease-in-out z-10 shadow-md"
        :class="burger ? '-top-60 opacity-0' : 'top-14'"
        >   
            <NuxtLink to="/">
                <button
                class="py-2 pl-4 font-semibold w-full  "
                :class="currentPath.toLowerCase() === 'index' ? 'text-primary ' : 'text-secondary '"
                >
                    Home
                </button>
            </NuxtLink>
            <div v-for="name,index in buttonList" :key="name">
                <NuxtLink :to="path[index]">
                    <button
                    class="py-2 pl-4 font-semibold w-full  "
                    :class="currentPath.toLowerCase() === name.replace(/ /g, '').toLowerCase() ? 'text-primary ' : 'text-secondary '"
                    >
                        {{ name }}
                    </button>
                </NuxtLink>

            </div>
        </div>
    </div>
    
</template>
  
<script setup>
import { Icon } from '@iconify/vue';

const currentPath = computed(() => useRoute().name);
const buttonList = ['Courses', 'Awards', 'Coach','About Us', 'Contact Us'];
const path = ['courses', 'awards','coach', 'aboutus', 'contactus'];
const burger = ref(true);
</script>
