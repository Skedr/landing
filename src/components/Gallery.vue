<script setup lang="ts">
import { computed, ref } from "vue";
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper/modules";

const thumbsSwiper = ref(null);

const setThumbsSwiper = (swiper) => {
  thumbsSwiper.value = swiper;
};

interface IProps {
  images: { default: ImageMetadata }[];
  credits?: string;
}
defineProps<IProps>();

const modules = [FreeMode, Navigation, Thumbs];
</script>

<template>
  <swiper
    :style="{
      '--swiper-navigation-color': '#fff',
      '--swiper-pagination-color': '#fff',
    }"
    :loop="true"
    :spaceBetween="10"
    :navigation="true"
    :thumbs="{ swiper: thumbsSwiper }"
    :modules="modules"
  >
    <swiper-slide v-for="image of images">
      <img :src="image.default.src" class="max-h-96 object-contain w-full" />
    </swiper-slide>
  </swiper>
  <swiper
    @swiper="setThumbsSwiper"
    :loop="true"
    :spaceBetween="10"
    :slidesPerView="4"
    :freeMode="true"
    :watchSlidesProgress="true"
    :modules="modules"
    class="mySwiper"
  >
    <swiper-slide v-for="image of images">
      <img :src="image.default.src" class="max-h-24 w-full" />
    </swiper-slide>
  </swiper>
  <div class="text-sm">{{ credits }}</div>
</template>
