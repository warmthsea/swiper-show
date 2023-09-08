<script lang="ts" setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import { getPageFileCountApi } from '~/api'
import { baseURL } from '~/api/request'

interface ResType {
  count: number
  fileList: {
    name: string
    url: string
  }[]
}

const route = useRoute()

const { count, fileList } = await getPageFileCountApi(route.query.page as string) as unknown as ResType
console.log(count, fileList)
</script>

<template>
  <div>
    <Swiper class="h-screen">
      <SwiperSlide v-for="i in fileList" :key="i.name">
        <div class="h-screen flex items-center">
          <img :src="`${baseURL}${i.url}`" class="w-full">
        </div>
      </SwiperSlide>
    </Swiper>
  </div>
</template>
