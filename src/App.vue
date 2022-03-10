<script setup lang="ts">
import { userCryptoStore } from '~/stores/crypto'
const props = userCryptoStore()
// https://github.com/vueuse/head
// you can use this to manipulate the document head in any components,
// they will be rendered correctly in the html results with vite-ssg
useHead({
  title: 'Ghulam Mustafa',
  meta: [
    { name: 'description', content: 'Ghulam Mustafa Crypto Project' },
  ],
})
</script>

<template>
<Loader v-if="props.loading" />
  <router-view />
</template>
