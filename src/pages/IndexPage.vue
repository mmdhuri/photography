<template>
  <section class="landing-banner">
    <div class="container">
      <div class="text-right q-py-xl text-white">
        <h1 class="q-my-sm font-size-38 text-bold" style="line-height: 3rem;">Look Deep Into The Nature</h1>
        <p class="text-uppercase">Nature will bear the closest inspection. She <br> invites us to lay our eye level with
          her smallest<br> leaf,
          and
          take
          an insect view of its plain.</p>
      </div>
    </div>
  </section>
  <section>
    <div class="container">
      <div class="row justify-center q-gutter-sm" style="transform: translateY(-60px);">
        <q-intersection once transition="scale" class="example-item col-3 q-ma-none">
          <q-card flat bordered class="q-ma-sm q-pa-md no-border no-border-radius" style="border-radius: 0px;">
            <img src="~src/assets/Site Images/nature/evening-sun.jpg" width="300" style="height: 300px;">
            <q-card-section>
              <div class="text-h6">Card #{{ index }}</div>
              <div class="text-subtitle2">by John Does</div>
            </q-card-section>
          </q-card>
        </q-intersection>
        <q-intersection once transition="scale" class="example-item col-3 q-ma-none">
          <q-card flat bordered class="q-ma-sm q-pa-md no-border no-border-radius" style="border-radius: 0px;">
            <img src="~src/assets/Site Images/nature/sea.jpg" width="300" style="height: 300px;">
            <q-card-section>
              <div class="text-h6">Card #{{ index }}</div>
              <div class="text-subtitle2">by John Doe</div>
            </q-card-section>
          </q-card>
        </q-intersection>
        <q-intersection once transition="scale" class="example-item col-3 q-ma-none">
          <q-card flat bordered class="q-ma-sm q-pa-md no-border no-border-radius" style="border-radius: 0px;">
            <img src="~src/assets/Site Images/nature/Nature_Tree.jpeg" width="300" style="height: 300px;">
            <q-card-section>
              <div class="text-h6">Card #{{ index }}</div>
              <div class="text-subtitle2">by John Doe</div>
            </q-card-section>
          </q-card>
        </q-intersection>
        <q-intersection once transition="scale" class="example-item col-3 q-ma-none">
          <q-card flat bordered class="q-ma-sm q-pa-md no-border no-border-radius" style="border-radius: 0px;">
            <img src="~src/assets/Site Images/nature/Rainbow.jpg" width="300" style="height: 300px;">
            <q-card-section>
              <div class="text-h6">Card #{{ index }}</div>
              <div class="text-subtitle2">by John Doe</div>
            </q-card-section>
          </q-card>
        </q-intersection>
      </div>
    </div>
  </section>
  <section class="nature-description-section q-py-xl">
    <div class="container">
      <div class="row justify-center align-end items-end">
        <div class="col-md-4 q-mx-xl">
          <q-card class="my-card no-border no-border-radius">
            <img src="~src/assets/Site Images/nature/evening.jpg" style="height: 650px;">
            <q-card-section>
              <div class="text-h6">Our Changing Planet</div>
              <div class="text-subtitle2">by John Doe</div>
            </q-card-section>
            <q-card-section class="q-pt-none">
              {{ lorem }}
            </q-card-section>
          </q-card>
        </div>
        <div class="col-md-4">
          <q-card class="my-card no-border no-border-radius">
            <q-card-section>
              <div class="text-h6">Our Changing Planet</div>
              <div class="text-subtitle2">by John Doe</div>
            </q-card-section>
          </q-card>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const slide = ref(1);

defineOptions({
  name: 'IndexPage'
});
</script>
