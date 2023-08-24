<script setup>
import Header from './components/header.vue'
import {ref,onMounted} from "vue"
let show=ref(false)
let language=ref("ENGLISH")
let leftImage=ref('./assets/Photo Website Left side.png');
let rightImage=ref('./assets/Photo Website Right side.png');
let getImage= async(url)=>{
    let md = await import(url);
    return md.default;
}

onMounted(async()=>{
  leftImage.value= await getImage(leftImage.value);
rightImage.value= await getImage(rightImage.value);
console.log('lf',leftImage.value,rightImage.value)
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
<div :class="` w-full py-4 px-2    flex flex-col justify-center items-center ${language=='ENGLISH'?'font-myriad-pro':' font-almarai'}  `">
<Header @updateLanguage="updateLanguage"/>
<!---  mobile  main -->
<main class=" flex flex-col  justify-center items-center w-full md:hidden  max-w-[420px] ">
  <section class="w-full flex flex-col justify-center items-center p-2">
    <div class="w-full  pt-20 bordering  rounded-b-[7%] bg-[#EFF3F4]">
      <div class="w-full  h-full flex flex-col justify-end items-center rounded-b-[7%] shadow-2xl  bordering  p-1 bg-gradient-to-br   from-[#e2a107] to-[#f4ba34] relative ">
        <div class="w-28  aspect-square top-0  flex justify-center -translate-y-1/2   z-20 absolute">
          <img src="./assets/Photo Profile.png" alt="profil" class="   absolute bottom-1/2 translate-y-1/2 w-28 aspect-square rounded-full ring-4 ring-white">
          <div class="bg-[#64dd3a]  absolute bottom-3 right-2  origin-center translate-x-1/2 w-6 aspect-square rounded-full ring-4 ring-white"></div>
        </div>
        <div class="w-full py-4 px-6 text-white flex text-center flex-col justify-end items-center pt-16">
          <h1 class=" text-xl py-4 px-6 font-bold"> {{ (language=="ENGLISH")?dictionnaire[0].title:dictionnaire[1].title}}</h1>
          <h1 class=" text-xl font-bold"> <span class="text-base font-normal">{{ (language=="ENGLISH")?dictionnaire[0].x:dictionnaire[1].x }} </span> {{ (language=="ENGLISH")?dictionnaire[0].name:dictionnaire[1].name }}</h1>
          <p>{{ (language=="ENGLISH")?dictionnaire[0].description:dictionnaire[1].description }}</p>
        </div>

        <div :class="`  w-full flex ${language=='ENGLISH'?'justify-end':'justify-start'} transition-all duration-300  items-center gap-2 p-2 px-6`">
          <img class="w-8 h-8"  src="./assets/Linkden.svg" alt="">
          <img class="w-8 h-8" src="./assets/Vimeo.svg" alt="">
          <img class="w-8 h-8" src="./assets/Dribbble.svg" alt="">
          <img class="w-8 h-8" src="./assets/Instagram.svg" alt="">
        </div> 
        
      </div>
    </div>
  </section>
  <section class=" w-full  py-8 px-2"> 
    <div class="relative w-full text-white flex rounded-3xl bg-gradient-to-br from-[#134a5c] to-[#02b2ea] flex-col p-6 gap-4 justify-center items-center shadow-2xl">
      <h1 class="text-3xl">{{ (language=="ENGLISH")?dictionnaire[0].title2:dictionnaire[1].title2 }}</h1>

      
      <div v-for="skill in (language=='ENGLISH')?dictionnaire[0].skills:dictionnaire[1].skills" class=" bg-gradient-to-br from-[#0A86AC] to-[#28ACDC]  shadow-lg w-full flex justify-center gap-2 items-center  rounded-3xl py-2 px-4 text-white ring ring-white">
          <img :src="skill.image" alt="motion" class="w-8 h-8">
        <p class=" p-2  ">{{ skill.name }}</p>
      </div>

   

      <a class=" absolute top-full -translate-y-1/2 w-fit p-6 rounded-full ring-4 ring-white bg-gradient-to-br from-[#67e13c] to-[#3e9a1e] shadow-2xl" href="https://wa.me/+212643089616">
        
          <img class="w-14 aspect-square" src="./assets/Whatsapp.svg" alt="wtsp">
      </a>

      <div class="   h-8 w-full p-6 rounded-full  ">
      </div>

    </div>
    
  </section>

  <section class="px-4 py-12">
    <div  class="w-full flex flex-col justify-center items-center gap-4 p-4  ">
      <button @click="show=!show" :class="`${show?'bg-[#d6f4fd]':''} flex w-full p-2 items-center justify-center gap-2 rounded-3xl ring-1 ring-[#0A86AC] text-[#0A86AC]`"> {{ (language=="ENGLISH")?dictionnaire[0].client:dictionnaire[1].client }} 
        <svg :class="`${show==false?'rotate-0':'rotate-180'} transition-all duration-300 w-3 h-3 fill-[#0A86AC]`" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 viewBox="0 0 200 168.2" style="enable-background:new 0 0 200 168.2;" xml:space="preserve">

<polygon class="st0" points="4.5,4.2 195.5,4.2 100.6,163.4 "/>
</svg> </button>
    <div :class="`${show==false?'h-0':''} transition-all duration-300 overflow-hidden flex flex-col w-full gap-2 justify-center items-center `">
      <h1 class=" text-xl font-bold text-[#0A86AC] "> {{ (language=="ENGLISH")?dictionnaire[0].trust:dictionnaire[1].trust  }} </h1>
      <h1 class="text-[#0A86AC]">{{ (language=="ENGLISH")?dictionnaire[0].a:dictionnaire[1].a }} </h1>
      <img src="./assets/Our Client Mobile.png" alt="client"> 
    </div>
    </div>
  </section>
</main>
<!---  end  mobile  main -->
<!---  desktop main -->
<main class=" md:flex hidden    gap-8 flex-col  justify-center  items-center w-full  ">
  <section class=" max-w-[800px] w-full  flex flex-col justify-center    items-center">
    <div class="w-full   rounded-2xl    bg-[#EFF3F4]">
      <div class="w-full rounded-2xl   h-full flex flex-col justify-end items-center  shadow-2xl     bg-gradient-to-br p-1  from-[#e2a107] to-[#f4ba34] relative ">
    
        <div :class="`w-full h-fit ${language=='ENGLISH'?'text-left':'text-right'} pt-4 px-6 text-white flex  flex-col justify-center items-center max-w-[500px]`" >
          <h1 class=" w-full text-xl     font-bold"> {{ (language=="ENGLISH")?dictionnaire[0].title:dictionnaire[1].title}}</h1>
          <p class=" w-full text-sm  "> {{ (language=="ENGLISH")?dictionnaire[0].x:dictionnaire[1].x }} <span class="text-base font-bold"> {{ (language=="ENGLISH")?dictionnaire[0].name:dictionnaire[1].name }}</span>
          {{ (language=="ENGLISH")?dictionnaire[0].description:dictionnaire[1].description }}</p>
        </div>

        <div :class="`  w-full flex ${language=='ENGLISH'?'justify-end':'justify-start'} transition-all duration-300  items-center gap-2 p-2 px-6`">
          <img class="w-8 h-8"  src="./assets/Linkden.svg" alt="">
          <img class="w-8 h-8" src="./assets/Vimeo.svg" alt="">
          <img class="w-8 h-8" src="./assets/Dribbble.svg" alt="">
          <img class="w-8 h-8" src="./assets/Instagram.svg" alt="">
        </div> 
        
      </div>
    </div>
  </section>
  <section class=" max-w-[800px]  w-full  px-2"> 
    <div class="relative w-full text-white flex rounded-3xl bg-gradient-to-br from-[#134a5c] to-[#02b2ea] flex-col p-6 gap-4 justify-center items-center shadow-2xl">

      <div class="  w-2/3 flex flex-col gap-4 items-center  ">
       <h1 class="text-xl p-1 py-5 text-center w-full items-end">{{ (language=="ENGLISH")?dictionnaire[0].title2:dictionnaire[1].title2 }}</h1>
      <div v-for="skill in (language=='ENGLISH')?dictionnaire[0].skills:dictionnaire[1].skills" class=" z-40 bg-gradient-to-br   from-[#e2a107] to-[#f4ba34]  shadow-lg w-1/2 flex justify-center gap-1 items-center text-sm  rounded-3xl py-1 px-4 text-white ring ring-white">
          <img :src="skill.image" alt="motion" class="w-4 h-4">
        <p class="   ">{{ skill.name }}</p>
      </div>
                                                          
                                                          

      <div :class="` absolute p-1 w-fit h-fit ${language=='ENGLISH'?'-left-10':'-right-10'} -top-[65px] `">
         
        <img :src="(language=='ENGLISH')?leftImage:rightImage" alt=" " class=" w-80 transition-all duration-500" >
       
      </div>
      </div> 
  
                                                                                                                                                                                                                                                 
      <a :class= "`absolute ${language=='ENGLISH'?'right-0 translate-x-1/2':'left-0 -translate-x-1/2'} top-full -translate-y-2/3 w-fit p-6 rounded-full ring-4  ring-white bg-gradient-to-br from-[#67e13c] to-[#3e9a1e]  shadow-2xl`" href="https://wa.me/+212643089616">
        
          <img class="w-14 aspect-square" src="./assets/Whatsapp.svg" alt="wtsp">
      </a>

      <div class="   h-8 w-full p-6 rounded-full  ">
      </div>

    </div>
    
  </section>

  <section class=" max-w-[800px] px-4 py-12">
    <div  class="w-full flex flex-col justify-center items-center gap-4 p-4  ">
      <button @click="show=!show" :class="`${show?'bg-[#d6f4fd]':''} flex w-full p-2 items-center justify-center gap-2 rounded-3xl ring-1 ring-[#0A86AC] text-[#0A86AC]`"> {{ (language=="ENGLISH")?dictionnaire[0].client:dictionnaire[1].client }} 
        <svg :class="`${show==false?'rotate-0':'rotate-180'} transition-all duration-300 w-3 h-3 fill-[#0A86AC]`" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 viewBox="0 0 200 168.2" style="enable-background:new 0 0 200 168.2;" xml:space="preserve">

<polygon class="st0" points="4.5,4.2 195.5,4.2 100.6,163.4 "/>
</svg> </button>
    <div :class="`${show==false?'h-0':''} transition-all duration-300 overflow-hidden flex flex-col w-full gap-2 justify-center items-center `">
      <h1 class=" text-xl font-bold text-[#0A86AC] "> {{ (language=="ENGLISH")?dictionnaire[0].trust:dictionnaire[1].trust  }} </h1>
      <h1 class="text-[#0A86AC]">{{ (language=="ENGLISH")?dictionnaire[0].a:dictionnaire[1].a }} </h1>
      <img src="./assets/Our Client Mobile.png" alt="client"> 
    </div>
    </div>
  </section>
</main>
<!---  end  desktop  main -->

 <footer class="flex  sm:flex-row flex-col sm:gap-6 gap-0  justify-center items-center text-[#0A86AC]">
  <a class="flex gap-2 justify-center items-center p-2" href="mailto:oulmouden.motion@gmail.com">
    <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 viewBox="0 0 200 161.9" style="enable-background:new 0 0 200 161.9;" xml:space="preserve" class=" fill-[#0A86AC] w-4 h-4 ">

<g id="Email">
	<path class="st0" d="M168.4,2.6H31.6C15.4,2.6,2.3,15.7,2.3,31.9v97.7c0,16.2,13.1,29.3,29.3,29.3h136.8
		c16.2,0,29.3-13.1,29.3-29.3V31.9C197.7,15.7,184.6,2.6,168.4,2.6z M168.4,22.1c1.8,0,3.4,0.5,4.9,1.3c-0.3,0.2-0.7,0.4-1,0.6
		l-60.6,45.4c-6.9,5.2-16.5,5.2-23.5,0L27.7,24.1c-0.3-0.2-0.6-0.4-1-0.6c1.4-0.8,3.1-1.3,4.9-1.3h136.8V22.1z M168.4,139.4H31.6
		c-5.4,0-9.8-4.4-9.8-9.8V44.1l54.7,41c6.9,5.2,15,7.9,23.5,7.9s16.6-2.7,23.5-7.8l54.7-41v85.5C178.2,135,173.8,139.4,168.4,139.4z
		"/>
</g>
</svg>

    oulmouden.motion@gmail.com
  </a>

  <div class=" text-[#0A86AC] "> | </div>
    
  <a class="flex gap-2 justify-center items-center p-2" href="tel:+212643089616">
    <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 viewBox="0 0 140.9 200" style="enable-background:new 0 0 140.9 200;" xml:space="preserve" class=" fill-[#0A86AC] w-4 h-4 ">

<g id="Call">
	<path class="st0" d="M136.2,175.3l-14.5-30.1c-3.1-6.4-7.1-11.1-14.1-8.2l-13.7,5c-11,5.1-16.5,0-22-7.7L47.2,78.2
		c-3.1-6.4-1.5-12.5,5.5-15.3l19.2-7.7c7-2.9,5.9-8.9,2.7-15.3L58.2,9.2c-3.1-6.4-9.5-8-16.5-5.1C27.8,9.8,16.3,18.8,8.8,32.2
		c-9.1,16.3-4.6,39-2.7,48.5s8.2,26.3,16.5,43.4c8.2,17.2,15.5,30.7,22,38.3c6.5,7.6,22,28.5,41.2,33.2c15.7,3.8,32.7,0.6,46.6-5.1
		C139.3,187.8,139.3,181.7,136.2,175.3z"/>
</g>
</svg>
    +212 643 089 616
  </a>
 </footer>
</div>
</template>

<style scoped>
.bordering{
  border-top-left-radius:50%;
  border-top-right-radius:50%;
}
</style>