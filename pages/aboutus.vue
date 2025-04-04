<template>
    <div>
        <!-- <Title name="ABOUT US" imgLink="/aboutus.jpg" /> -->
        <div class=" text-center mx-auto max-w-3xl my-10 md:my-20">
            <div class="text-primary font-bold f0">
                ABOUT US
            </div>
            <div class="f2 mt-4 md:mt-6 mx-4">
                ที่ Beena Robotics เรามุ่งมั่นในการสร้างอนาคตของนักเรียนผ่านการศึกษาด้านหุ่นยนต์แบบลงมือทำ ด้วยประสบการณ์กว่า 8 ปี ในการสอนหุ่นยนต์ ทีมโค้ชผู้เชี่ยวชาญของเรามีประสบการณ์ในการแข่งขันหุ่นยนต์ระดับประเทศและนานาชาติ พร้อมให้คำแนะนำที่มีคุณภาพสูงแก่ผู้เรียน
            </div>
        </div>
        <div v-for="(list,index) in data" class="max-w-7xl mx-auto my-4">
            <div class="box">
                <div class="text-center f1">
                    {{ list.title }}
                </div>
                <div class="text-center f2 mt-4">
                    {{ list.description }}
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import Title from '~/components/Title.vue';

const data = [
    {
        title: "โค้ชผู้เชี่ยวชาญ",
        description : "ทีมของเรามีประสบการณ์ในการแข่งขันหุ่นยนต์ทั้งในระดับประเทศและระดับโลก ทำให้นักเรียนได้รับคำแนะนำจากผู้มีความรู้จริง"
    },{
        title:"หลักสูตรที่ครอบคลุม",
        description : "เราสอน VEX IQ, Arduino และ LEGO Mindstorms เพื่อพัฒนาทักษะด้านการเขียนโปรแกรม การออกแบบกลไก และการแก้ปัญหา"
    },{
        title: "เตรียมพร้อมสู่การแข่งขัน",
        description : "เราเตรียมนักเรียนให้พร้อมสำหรับการแข่งขันหุ่นยนต์ที่มีชื่อเสียง เพื่อให้พวกเขาได้นำความรู้ไปใช้กับสถานการณ์จริงและพัฒนาทักษะการคิดวิเคราะห์"    
    },{
        title: "พิสูจน์ความสำเร็จ",
        description : "นักเรียนของเราหลายคนสามารถสอบเข้ามหาวิทยาลัยชั้นนำของไทย เช่น จุฬาลงกรณ์มหาวิทยาลัย (CU), สถาบันเทคโนโลยีพระจอมเกล้าเจ้าคุณทหารลาดกระบัง (KMITL), มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าธนบุรี (KMUTT) และมหาวิทยาลัยเทคโนโลยีพระจอมเกล้าพระนครเหนือ (KMUTNB)"
    }
]
</script>