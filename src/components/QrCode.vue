<script lang="ts" setup>
import { useQRCode } from '@vueuse/integrations/useQRCode'

const { i } = defineProps<{ i: number }>()
const url = `https://krd.scsee.cn/?page=${i}`

const qrcode = useQRCode(url, {
  errorCorrectionLevel: 'H',
  margin: 2.5,
})
</script>

<template>
  <div class="w-40 h-40 border rounded">
    <img :src="qrcode" class="w-full h-full" :title="url" :alt="`QR Code:${i + 1}`">
  </div>
</template>
