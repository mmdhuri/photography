<template>
  <div class="">
    <q-carousel animated v-model="slide" arrows navigation infinite height="500px">
      <q-carousel-slide :name="1" img-src="~src/assets/Site Images/Slider-1.jpg" />
      <q-carousel-slide :name="2" img-src="~src/assets/Site Images/Slider-2.jpg" />
      <q-carousel-slide :name="3" img-src="~src/assets/Site Images/Slider-3.jpg" />
      <q-carousel-slide :name="4" img-src="~src/assets/Site Images/Slider-4.jpg" />
    </q-carousel>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import EssentialLink from 'components/EssentialLink.vue'

const slide = ref(1);
defineOptions({
  name: 'IndexPage'
});
</script>
