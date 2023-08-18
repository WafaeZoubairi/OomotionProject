<script setup>
import { ref, defineEmits } from 'vue';
let languages=["English" , "العربية"]
const emits = defineEmits(['updateLanguage']);
let current=ref(languages[1])
let option=ref(languages[0])
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
<header class="flex w-full items-center text-white gap-8 py-4  justify-between">
    <div class=" w-2/3 scale-90  flex justify-center items-center">
      <img src="../assets/LOGO.png" />
    </div>
    <div class=" w-1/3 relative flex justify-center gap-4 items-center  rounded-3xl bg-[#1896bf] shadow-lg ring ring-white ">
        <div @click="change" :class="`${show==false?'h-0':'h-16'}   cursor-pointer w-full transition-all duration-300 absolute top-1/2 z-0 bg-inherit left-0 flex items-center pt-4 justify-center overflow-hidden rounded-b-3xl`">
            {{ option }}
        </div>
        <div @click="show=!show" class=" cursor-pointer relative flex justify-center gap-4 items-center px-5 p-1 rounded-3xl bg-[#1896bf] shadow-lg ring ring-white ">
            <img class="w-8 h-8" src="../assets/Language.svg" alt="language">
        <button> {{ current }} </button>
        <img :class="`${show==false?'rotate-0':'rotate-180'} transition-all duration-300 w-4 h-4` " src="../assets/Language Arrow.svg" alt="language arrow">
        </div>
        
    </div>
</header>
</template>

<style scoped>

</style>
