<template>
    <div>
        <!-- <Title name="CONTACT US" imgLink="contactus.jpg" /> -->
        <div class=" mx-auto sm:flex">
            <span class="f0 sm:w-2/5 bg-primary flex items-center justify-center sm:justify-end text-white font-bold px-10 py-10">
                CONTACT US
            </span> 
            <div class="flex-wrap  sm:justify-between gap-6 sm:w-3/5 px-4 sm:py-20">
                <div v-for="contact in contactList" :key="contact.name" class="hover:scale-[1.01] transition-all duration-200">
                    <div @click="goToLink(contact.link)" class="relative my-6 bg-white text-secondary text-xl font-semibold shadow-lg rounded-full h-12 sm:h-16 flex items-center sm:max-w-lg">
                        <p class="ml-24 f2">
                            {{ contact.title }}
                        </p>
                        <div
                            class="absolute rounded-full h-16 w-16 sm:h-20 sm:w-20 p-2"
                            :style="{ backgroundColor: contact.color }"
                        >
                            <Icon :icon="contact.icon" class="w-full h-full" style="color: #fff" />
                        </div>
                    </div>
                </div>
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
    },{
        name: 'Email',
        link: 'mailto:Beena.robotics@gmail.com',
        color: '#ff5b2e',
        title: 'Beena.robotics@gmail.com',
        icon: 'material-symbols:mail'
    },{
        name: 'Phone',
        link: '',
        color: '#2ec4ff',
        title: '087 049 8760',
        icon: 'ic:baseline-phone'
    }
];

const goToLink = (val) => {
    if (val != '') {
        window.open(val, '_blank'); // Opens in new tab
    }
}
</script>
