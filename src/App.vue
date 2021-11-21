<template>
  <Hero imageURL="https://www.stevenstone.co.uk/website_steven_stone/static/src/images/home/chrismas.png" leadText="discover" titleText="your stone" descriptionText="Start your engagement ring journey here. Craft your own bespoke design or browse from our ready to wear collection." :buttonAVisible="isButtonAVisible"
  buttonABgc=""
  buttonATextC="#fff"
  buttonAText="new arrivals"
  @buttonAEvent="onButtonAEvent"
  :buttonBVisible="isButtonBVisible"
  buttonBBgc="" 
  buttonBTextC="" 
  buttonBText="best sellers"
  @buttonBEvent="onButtonBEvent" />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Hero from './components/Hero.vue'

export default defineComponent({
  name: 'App',
  data(){
    return {
      isButtonAVisible: true,
      isButtonBVisible: true
    }
  },
  components: {
    Hero
  },
  methods:{
    onButtonAEvent(value:string){
      console.log(value)
    },
     onButtonBEvent(value:string){
      console.log(value)
    }
  }
});
</script>

<style>

</style>
