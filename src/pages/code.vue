<script lang="ts" setup>
import html2canvas from 'html2canvas'
import { getPageCountApi } from '~/api'

const codeRefs = ref<HTMLElement[]>([])

const data = await getPageCountApi()
const count = data as unknown as number

function downloadCode() {
  codeRefs.value.forEach((item, index) => {
    html2canvas(item, { backgroundColor: '#fff', scale: 1.5 }).then((canvas) => {
      const base64Img = canvas.toDataURL('image/png')
      utilDownloadBase64Image(base64Img, `${index + 1}.png`)
    })
  })
}
</script>

<template>
  <div class="p-10">
    <div class="pl-6 mt-10 mb-10">
      <button class="border px-4 py-2 rounded duration-200 active:opacity-50" @click="downloadCode()">
        DownLoad QR Code
      </button>
    </div>
    <div class="flex flex-wrap">
      <div v-for="i in count" ref="codeRefs" :key="i" class="m-6">
        <QrCode :i="i" />
      </div>
    </div>
  </div>
</template>
