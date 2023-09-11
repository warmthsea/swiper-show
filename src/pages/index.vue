<script lang="ts" setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Pagination, Zoom } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
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
    <Swiper :modules="[Pagination, Zoom]" :pagination="true" :zoom="true" class="h-screen">
      <SwiperSlide v-for="i in fileList" :key="i.name" class="flex items-center">
        <div class="swiper-zoom-container">
          <img :src="`${baseURL}${i.url}`">
        </div>
      </SwiperSlide>
    </Swiper>
  </div>
</template>

<style scoped>
:deep(.swiper-pagination-bullet-active){
  background-color: #3E9691;
}
</style>
