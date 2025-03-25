<template>
    <div>
        <Title name="CONTACT US" imgLink="contactus.jpg" />
        <div class="max-w-5xl mx-auto p-4 flex-wrap justify-between gap-6">
            <div v-for="contact in contactList" :key="contact.name">
                <a :href="contact.link" target="_blank" :aria-label="`Visit our ${contact.name}`">
                    <div class="relative my-6 bg-white text-secondary text-xl font-semibold shadow-lg rounded-full h-12 md:h-16 flex items-center">
                        <p class="ml-24">
                            {{ contact.title }}
                        </p>
                        <div
                            class="absolute rounded-full h-16 w-16 md:h-20 md:w-20 p-2"
                            :style="{ backgroundColor: contact.color }"
                        >
                            <Icon :icon="contact.icon" class="w-full h-full" style="color: #fff" />
                        </div>
                    </div>
                </a>
            </div>
        </div>

        <iframe
            class="max-w-desktop w-full"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4605.58544379057!2d100.53835545540093!3d13.909687534503558!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e28333c7f7c7a5%3A0xd545ad4612f07adf!2sBeena%20robotics!5e0!3m2!1sth!2sth!4v1737638830162!5m2!1sth!2sth"
            height="450"
            style="border:0;"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
    </div>
</template>

<script setup>
import { Icon } from '@iconify/vue';
import Title from '~/components/Title.vue';

const contactList = [
    {
        name: 'Facebook',
        link: 'https://www.facebook.com/BeenaRobotics',
        color: '#1877F2',
        title: 'Beenarobotics',
        icon: 'line-md:facebook',
    },
    {
        name: 'Line',
        link: 'https://line.me/R/ti/p/%40beena-robotics',
        color: '#21B94E',
        title: 'Beena Robotics',
        icon: 'uil:line',
    },
    {
        name: 'Youtube',
        link: 'https://www.youtube.com/@BeenaRobotics',
        color: '#FF0000',
        title: 'Beena Robotics',
        icon: 'line-md:youtube',
    },
];
</script>
