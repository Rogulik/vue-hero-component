<template>
  <Hero imageURL="https://www.stevenstone.co.uk/website_steven_stone/static/src/images/home/chrismas.png" leadText="discover" titleText="your stone" descriptionText="Start your engagement ring journey here. Craft your own bespoke design or browse from our ready to wear collection." :buttonAVisible="true" buttonABgc="" buttonATextC="#fff" buttonAText="new arrivals"  :buttonBVisible="true" buttonBBgc="" buttonBTextC="" buttonBText="best sellers"  />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Hero from './components/Hero.vue'

export default defineComponent({
  name: 'App',
  components: {
    Hero
  },
  methods:{
  }
});
</script>

<style>

</style>
