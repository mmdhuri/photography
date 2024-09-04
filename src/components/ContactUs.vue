<template>
  <div class="">
    <div class="row justify-center q-pt-xl">
      <div class="col-4 q-pa-md shadow-2">
        <h4 class="text-center">Connect with us</h4>
        <div class="q-gutter-md">
          <q-form @submit="handleSubmit" class="q-gutter-md">
            <q-input v-model="name" label="Name" required autofocus filled />
            <q-input v-model="email" label="Email" type="email" required filled />
            <q-input v-model="message" label="Message" type="textarea" rows="5" required filled />
            <q-btn type="submit" label="Submit" color="primary" />
          </q-form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { ref } from 'vue'

const model = ref({
  name: "",
  email: "",
  message: ""
})
</script>
