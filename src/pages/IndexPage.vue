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
        <q-intersection once transition="scale" class="example-item col-md-6 col-lg-3 q-ma-none full-height">
          <q-card flat bordered class="q-ma-sm q-pa-md no-border no-border-radius full-height"
            style="border-radius: 0px;">
            <img src="~src/assets/Site Images/nature/evening-sun.jpg" width="300" style="height: 300px;">
            <q-card-section>
              <div class="text-h6">Solitary Bird at Sunset</div>
              <div class="text-subtitle2">The sky is painted with shades of orange and pink, creating a serene and
                tranquil moment as the day comes to a close.</div>
            </q-card-section>
          </q-card>
        </q-intersection>
        <q-intersection once transition="scale" class="example-item col-md-6 col-lg-3 q-ma-none full-height">
          <q-card flat bordered class="q-ma-sm q-pa-md no-border no-border-radius full-height"
            style="border-radius: 0px;">
            <img src="~src/assets/Site Images/nature/sea.jpg" width="300" style="height: 300px;">
            <q-card-section>
              <div class="text-h6">Rainy Dusk by the Sea</div>
              <div class="text-subtitle2">The rhythmic sound of the waves adds a calming melody to this tranquil scene,
                capturing the essence of Goa's rainy season.</div>
            </q-card-section>
          </q-card>
        </q-intersection>
        <q-intersection once transition="scale" class="example-item col-md-6 col-lg-3 q-ma-none full-height">
          <q-card flat bordered class="q-ma-sm q-pa-md no-border no-border-radius" style="border-radius: 0px;">
            <img src="~src/assets/Site Images/nature/Nature_Tree.jpeg" width="300" style="height: 300px;">
            <q-card-section>
              <div class="text-h6">Tree Base View</div>
              <div class="text-subtitle2">The image showcases the intricate network of roots spreading outwards,
                creating a natural tapestry that intertwines with the earth.
              </div>
            </q-card-section>
          </q-card>
        </q-intersection>
        <q-intersection once transition="scale" class="example-item col-md-6 col-lg-3 q-ma-none full-height">
          <q-card flat bordered class="q-ma-sm q-pa-md no-border no-border-radius" style="border-radius: 0px;">
            <img src="~src/assets/Site Images/nature/Rainbow.jpg" width="300" style="height: 300px;">
            <q-card-section>
              <div class="text-h6">Rainbow Bliss</div>
              <div class="text-subtitle2">The spectrum of red, orange, yellow, green, blue, indigo, and violet stretches
                gracefully, offering a moment of serenity and wonder.</div>
            </q-card-section>
          </q-card>
        </q-intersection>
      </div>
    </div>
  </section>
  <section class="nature-description-section q-py-xl q-mb-sm">
    <div class="container">
      <div class="row justify-center align-end items-end">
        <div class="col-md-4 q-mx-xl">
          <q-card class="my-card no-border no-border-radius">
            <img src="~src/assets/Site Images/nature/evening.jpg" style="height: 650px;">
            <q-card-section>
              <div class="text-h6">Sunset Serenity at Sea</div>
              <div class="text-subtitle2">The sun sets over the tranquil sea, casting a golden glow across the evening
                sky. The horizon is painted with warm hues of orange, pink, and purple, reflecting beautifully on the
                calm waters. The serene atmosphere captures the perfect moment of day transitioning into night, offering
                a peaceful and picturesque view of the evening sea.</div>
            </q-card-section>
          </q-card>
        </div>
        <div class="col-md-4">
          <q-card class="my-card no-border no-border-radius">
            <img src="~src/assets/Site Images/nature/cat-short.jpg" style="height: 650px;">
            <q-card-section>
              <div class="text-h6">Cat Behind the Tree</div>
              <div class="text-subtitle2">A curious cat peeks out from behind a tree, its eyes glowing with intrigue.
                The tree's bark forms a natural backdrop, partially concealing the feline while adding a touch of
                mystery to the scene.<br> This playful moment captures the cat's natural curiosity and the beauty of its
                woodland surroundings.</div>
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
<style scoped>
.q-card {
  box-shadow: 0px 0px 2px #878787 !important;
}

.example-item>div {
  height: 100% !important;
}
</style>
