<script setup>
import { ref, defineEmits } from 'vue';
let languages=["ENGLISH" , "العربية"]
const emits = defineEmits(['updateLanguage']);
let current=ref(languages[0])
let option=ref(languages[1])
let show=ref(false)
let change = function(){
    show.value=false
    let x=current.value;
    current.value=option.value;
    option.value=x;
    emits('updateLanguage', current.value);
    
}


</script>

<template>
<header class="flex w-full items-center text-white gap-8 p-4  justify-between font-myriad-pro">
    <div class="  w-6/12 scale-90  flex justify-center items-center">
      <img src="../assets/LOGO.png" />
    </div>
    <div class=" w-fit relative flex justify-center gap-2 items-center  rounded-3xl bg-gradient-to-br from-[#134a5c] to-[#02b2ea] shadow-lg ring ring-white ">
        <div @click="change" :class="`${show==false?'h-[0%] opacity-0 ':'h-[220%]  '}  text-sm font-semibold cursor-pointer w-full transition-all duration-300 absolute top-0 z-0 bg-inherit left-0 flex items-end  bg-gradient-to-br from-[#134a5c] to-[#02b2ea] justify-center overflow-hidden rounded-3xl`">
           <p class=" h-1/2 flex items-center ">{{ option }}</p> 
        </div>
        <div @click="show=!show" class="  cursor-pointer relative flex justify-center gap-2 items-center px-3 p-1  origin-top rounded-3xl bg-[#1896bf] shadow-lg ring ring-white ">
            <img class="w-4 h-4" src="../assets/Language.svg" alt="language">
        <button class="w-full  text-sm"> {{ current }} </button>
        <img :class="`${show==false?'rotate-0':'rotate-180'} transition-all duration-300 w-2 h-2` " src="../assets/Language Arrow.svg" alt="language arrow">
        </div>
        
    </div>
</header>
</template>

<style scoped>

</style>