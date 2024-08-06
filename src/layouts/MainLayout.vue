<template>
  <q-layout view="lHh Lpr lFf">
    <div class="home-header flex justify-between items-center">
      <div>
        <img src="~src/assets/Site Images/logo.png" width="120">
      </div>
      <div class="flex">
        <div class="menu">
          <div class="menu-item q-px-sm text-weight-medium">Home</div>
        </div>
        <div class="menu">
          <div class="menu-item q-px-sm text-weight-medium">Restaurants</div>
        </div>
        <div class="menu">
          <div class="menu-item q-px-sm text-weight-medium">Menu</div>
        </div>
        <div class="menu">
          <div class="menu-item q-px-sm text-weight-medium">About Us</div>
        </div>
        <div class="menu">
          <div class="menu-item q-px-sm text-weight-medium">Contact Us</div>
        </div>
      </div>
      <div></div>
    </div>
    <div class="">
      <q-carousel animated v-model="slide" arrows navigation infinite height="500px">
        <q-carousel-slide :name="1" img-src="~src/assets/Site Images/Slider-1.jpg" />
        <q-carousel-slide :name="2" img-src="~src/assets/Site Images/Slider-2.jpg" />
        <q-carousel-slide :name="3" img-src="~src/assets/Site Images/Slider-3.jpg" />
        <q-carousel-slide :name="4" img-src="~src/assets/Site Images/Slider-4.jpg" />
      </q-carousel>
    </div>
    <q-page-container>
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<script setup>
import { ref } from 'vue'
import EssentialLink from 'components/EssentialLink.vue'

defineOptions({
  name: 'MainLayout'
})
const slide = ref(1);

const linksList = [
  {
    title: 'Docs',
    caption: 'quasar.dev',
    icon: 'school',
    link: 'https://quasar.dev'
  },
  {
    title: 'Github',
    caption: 'github.com/quasarframework',
    icon: 'code',
    link: 'https://github.com/quasarframework'
  },
  {
    title: 'Discord Chat Channel',
    caption: 'chat.quasar.dev',
    icon: 'chat',
    link: 'https://chat.quasar.dev'
  },
  {
    title: 'Forum',
    caption: 'forum.quasar.dev',
    icon: 'record_voice_over',
    link: 'https://forum.quasar.dev'
  },
  {
    title: 'Twitter',
    caption: '@quasarframework',
    icon: 'rss_feed',
    link: 'https://twitter.quasar.dev'
  },
  {
    title: 'Facebook',
    caption: '@QuasarFramework',
    icon: 'public',
    link: 'https://facebook.quasar.dev'
  },
  {
    title: 'Quasar Awesome',
    caption: 'Community Quasar projects',
    icon: 'favorite',
    link: 'https://awesome.quasar.dev'
  }
]

const leftDrawerOpen = ref(false)

function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value
}
</script>
