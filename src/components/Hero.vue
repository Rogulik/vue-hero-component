<template>
    <div class="w-full h-[400px] bg-hero-pattern bg-no-repeat bg-cover font-senkron" :style='`background-image: url(${imageURL})`'>
    <div class="pt-[64px] ml-[115px] ">
      <header class="text-white w-[432px]">
        <h2 class="font-light text-[28px] mb-[-13px] uppercase">{{leadText}}</h2>
        <h1 class="font-bold leading-[75px] text-[50px] uppercase">{{titleText}}</h1>
        <p class="text-[18px] leading-[24px]">{{descriptionText}}</p>
    </header>
    <div class="flex justify-between font-nunito text-white w-[385px] mt-[32px]">
      <button :style="{backgroundColor: buttonABgc, color: buttonATextC}" :class='`btn-main ${buttonAVisible ? "visible" : "invisible"}`'>{{buttonAText}}</button>
      <button :style="{backgroundColor: buttonBBgc, color: buttonBTextC}" :class='`btn-sub  ${buttonBVisible ? "visible" : "invisible"}`'>{{buttonBText}}</button>
    </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    props:{
        imageURL:{
            required:true,
            type: String
        },
        leadText:{
            required:true,
            type: String
        },
        titleText:{
            required:true,
            type: String
        },
        descriptionText:{
            required:true,
            type: String
        },
        buttonAVisible:{
            required:true,
            type: Boolean
        },
        buttonABgc:{
            required:true,
            type: String
        },
        buttonATextC:{
            required:true,
            type: String
        },
        buttonAText:{
            required:true,
            type: String
        },
        buttonBVisible:{
            required:true,
            type: Boolean
        },
        buttonBBgc:{
            required:true,
            type: String
        },
        buttonBTextC:{
            required:true,
            type: String
        },
        buttonBText:{
            required:true,
            type: String
        },
    }
})
</script>
