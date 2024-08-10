<template>
  <div class="q-pa-md" style="max-width: 400px">

    <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md">
      <q-input filled v-model="email" label="Enter Email *" hint="Name and surname" lazy-rules
        :rules="[val => val && val.length > 0 || 'Please type something']" />
      <q-input filled v-model="email" label="Enter Email *" hint="password" lazy-rules
        :rules="[val => val && val.length > 0 || 'Please type something']" />
      <div>
        <q-btn label="Submit" type="submit" color="primary" />
        <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm" />
      </div>
    </q-form>
  </div>
</template>
<script setup>
import { ref, onMounted } from 'vue';
import { api } from 'boot/axios';

const model = ref({
  email: "",
  password: ""
});

const onSubmit = async () => {
  if (await v$.value.$validate()) {
    processing.value = true;

  }
};

</script>
