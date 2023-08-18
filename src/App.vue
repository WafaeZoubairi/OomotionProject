<script setup>
import Header from './components/header.vue'
import {ref,onMounted} from "vue"
let show=ref(false)
let language=ref("English")
let getImage= async(url)=>{
    let md = await import(url);
    return md.default;
}

onMounted(async()=>{
    
    for(let el of dictionnaire.value[0].skills ){
     console.log(el.image)
     el.image= await getImage(el.image);
    }
    for(let el of dictionnaire.value[1].skills ){
     console.log(el.image)
     el.image= await getImage(el.image);
    }
    })

let dictionnaire=ref([
  {
    client:"Our Clients",
    trust:"THEY TRUST US",
    a:"Satisfying our customers in our greatest passion",

    title:"Hi there!",
    name:"Omar Oulmouden",
    x:"i'm",
    description:"from Morocco,I'm an illistrator and Graphic Designer,Motion Designer,i love image in all fields,and i never stop searching for New Styles and new forms of self-ex-pression to improe my skills,making experiences and being constantly inspired by new things and new people,routine and monotony definitely kills me",
    title2:"MY WORK ON",
    skills:[{
      name:"MOTION GRAPHICS",
      image:"./assets/Motion Graphics.svg"
    },
    {
      name:"LOGO ANIMATION",
      image:"./assets/Logo Animation.svg"
    },
    {
      name:"SOCIAL MEDIA DESIGN",
      image:"./assets/Social Media Design.svg"
    },
    {
      name:"LOGO DESIGN",
      image:"./assets/Logo Design.svg"
    },
    
  ]
  },
  {
    client:"عملائنا",
    trust:"يثقون بنا",
    a:"إرضاء عملائنا هو أعظم شغفنا",
    title: '!مرحبا',
    name:" عمر ولمدن",
    x:'أنا ',
    description:" من المغرب ، أنا مصمم جرافيك وموشن ديزاين ، أحب الصور ولا أتوقف أبدا عن البحث عن أنماط جديدة وأشكال جديدة للتعبير عن الذات وتحسين مهاراتي ، وبالطبع انا أكره الروتين في العمل وأسعى دائما للتجديد وخلق تصاميم جديدة بلمسة إبداعية وأصلية" ,
    title2:" أعمالي",
    skills:[{
      name:" الموشن جرافيك ",
      image:"./assets/Motion Graphics.svg"
    },
    {
      name:" تحريك الشعارات ",
      image:"./assets/Logo Animation.svg"
    },
    {
      name:" تصاميم السوشيال ميديا",
      image:"./assets/Social Media Design.svg"
    },
    {
      name:" تصميم الشعارات ",
      image:"./assets/Logo Design.svg"
    },
    
  ]
,

  }



])
function updateLanguage(newval){
  language.value=newval;
  console.log(language.value);
}



</script>

<template>
<div class=" py-4 px-2 container">
<Header @updateLanguage="updateLanguage"/>
<main class="w-full sm:hidden ">
  <section class="w-full flex flex-col justify-center items-center p-2">
    <div class="w-full  pt-24 rounded-t-full bg-[#EFF3F4]">
      <div class="w-full h-full flex flex-col justify-end items-center rounded-t-full rounded-b-3xl   bg-gradient-to-r p-1  from-[#EFAA07] to-[#fec337]">
        <div class="w-full flex justify-center  z-20 relative">
          <img src="./assets/Photo Profile.png" alt="profil" class=" absolute bottom-1/2 translate-y-1/2 w-1/4 rounded-full ring-4 ring-white">
        </div>
        <div class="w-full py-4 px-6 text-white flex text-center flex-col justify-end items-center pt-16">
          <h1 class=" text-xl py-4 px-6 font-bold"> {{ (language=="English")?dictionnaire[0].title:dictionnaire[1].title}}</h1>
          <h1 class=" text-xl font-bold"> <span class="text-base font-normal">{{ (language=="English")?dictionnaire[0].x:dictionnaire[1].x }} </span> {{ (language=="English")?dictionnaire[0].name:dictionnaire[1].name }}</h1>
          <p>{{ (language=="English")?dictionnaire[0].description:dictionnaire[1].description }}</p>
        </div>

        <div class=" w-full flex justify-end items-center gap-2 p-2">
          <img class="w-8 h-8"  src="./assets/Linkden.svg" alt="">
          <img class="w-8 h-8" src="./assets/Vimeo.svg" alt="">
          <img class="w-8 h-8" src="./assets/Dribbble.svg" alt="">
          <img class="w-8 h-8" src="./assets/Instagram.svg" alt="">
        </div> 
        
      </div>
    </div>
  </section>
  <section class=" py-8 px-2"> 
    <div class="relative w-full text-white flex rounded-3xl bg-gradient-to-b from-[#0A86AC] to-[#28ACDC] flex-col p-6 gap-4 justify-center items-center shadow-2xl">
      <h1 class="text-3xl">{{ (language=="English")?dictionnaire[0].title2:dictionnaire[1].title2 }}</h1>

      
      <div v-for="skill in (language=='English')?dictionnaire[0].skills:dictionnaire[1].skills" class="  shadow-lg w-full flex justify-center gap-2 items-center  rounded-3xl py-2 px-4 text-white ring ring-white">
          <img :src="skill.image" alt="motion" class="w-8 h-8">
        <p class=" p-2  ">{{ skill.name }}</p>
      </div>

      <!-- <div class=" shadow-lg w-full flex justify-center gap-2 items-center  rounded-3xl py-2 px-4 text-white ring ring-white">
          <img src="./assets/Logo Animation.svg" alt="animation" class="w-8 h-8">
        <p class="p-2 ">LOGO ANIMATION</p>
      </div>
      
      <div class=" shadow-lg w-full flex justify-center gap-2 items-center  rounded-3xl py-2 px-4 text-white ring ring-white">
          <img src="./assets/Social Media Design.svg" alt="media" class="w-8 h-8">
        <p class="p-2">SOCIAL MEDIA DESIGN</p>
      </div>

      <div class=" shadow-lg w-full flex justify-center gap-2 items-center  rounded-3xl py-2 px-4 text-white ring ring-white">
          <img src="./assets/Logo Design.svg" alt="design" class="w-8 h-8">
        <p class="p-2 ">LOGO DESIGN</p>
      </div> -->

      <a class=" absolute top-full -translate-y-1/2 w-fit p-6 rounded-full ring-4 ring-white bg-[#62DB38] shadow-2xl" href="https://wa.me/+212643089616">
        
          <img class="w-16 h-16" src="./assets/Whatsapp.svg" alt="wtsp">
      </a>

      <div class="   h-8 w-full p-6 rounded-full  ">
      </div>

    </div>
    
  </section>

  <section class="px-4 py-12">
    <div  class="w-full flex flex-col justify-center items-center gap-4 p-4  ">
      <button @click="show=!show" class="flex w-full p-2 items-center justify-center gap-2 rounded-3xl ring-1 ring-[#0A86AC] text-[#0A86AC]"> {{ (language=="English")?dictionnaire[0].client:dictionnaire[1].client }} <svg :class="`${show==false?'rotate-0':'rotate-180'} transition-all duration-300 w-4 h-4 fill-[#0A86AC]`" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 viewBox="0 0 200 168.2" style="enable-background:new 0 0 200 168.2;" xml:space="preserve">

<polygon class="st0" points="4.5,4.2 195.5,4.2 100.6,163.4 "/>
</svg> </button>
      

    <div :class="`${show==false?'h-0':''} transition-all duration-300 overflow-hidden flex flex-col w-full gap-2 justify-center items-center `">
      <h1 class=" text-xl font-bold text-[#0A86AC] "> {{ (language=="English")?dictionnaire[0].trust:dictionnaire[1].trust  }} </h1>
      <h1 class="text-[#0A86AC]">{{ (language=="English")?dictionnaire[0].a:dictionnaire[1].a }} </h1>
      <img src="./assets/Our Client Mobile.png" alt="client"> 
    </div>
    </div>
  </section>
</main>

 <footer class="flex flex-col justify-center items-center text-[#0A86AC]">
  <a class="flex gap-2 justify-center items-center p-2" href="mailto:oulmouden.motion@gmail.com">
    <img src="./assets/Email.svg" alt="mail" class="w-4 h-4">
    oulmouden.motion@gmail.com
  </a>
  <a class="flex gap-2 justify-center items-center p-2" href="tel:+212643089616">
    <img src="./assets/Phone.svg" alt="phone"  class="w-4 h-4">
    +212 643 089 616
  </a>
 </footer>
</div>
</template>

<style scoped>

</style>
