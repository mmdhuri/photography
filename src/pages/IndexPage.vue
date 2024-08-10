<template>
  <div class="">
    <q-carousel animated v-model="slide" arrows navigation infinite height="500px">
      <q-carousel-slide :name="1" img-src="~src/assets/Site Images/Slider-1.jpg" />
      <q-carousel-slide :name="2" img-src="~src/assets/Site Images/Slider-2.jpg" />
      <q-carousel-slide :name="3" img-src="~src/assets/Site Images/Slider-3.jpg" />
      <q-carousel-slide :name="4" img-src="~src/assets/Site Images/Slider-4.jpg" />
    </q-carousel>
  </div>
  <div class="q-pa-md row items-start q-gutter-md justify-center q-mt-md" v-if="foodCategories">
    <div class="col-md-3" v-for="foodCategories in foodCategories" :key="foodCategories.id">
      <q-card class="my-card">
        <img src="https://cdn.quasar.dev/img/mountains.jpg">
        <q-card-section>
          <div class="text-h6">{{ foodCategories.category }}</div>
          <div class="text-subtitle2">{{ foodCategories.description }}</div>
        </q-card-section>
      </q-card>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { api } from 'boot/axios';

const slide = ref(1);
const foodCategories = ref(null);
const error = ref(null);

const getFoodCategories = async () => {
  try {
    const response = await api.get('/food-categories'); // Ensure $api is used
    foodCategories.value = response.data;
    console.log(response.data);
  } catch (err) {
    error.value = `Error: ${err.message}`;
  }
};

onMounted(() => {
  getFoodCategories();
});
defineOptions({
  name: 'IndexPage'
});
</script>
