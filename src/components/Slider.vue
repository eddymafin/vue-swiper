<script setup>
import { computed } from "vue";
import { register } from "swiper/element/bundle";

import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";

register();

const props = defineProps({
  mainVisual: {
    type: Object,
    required: true,
  },
});

// 参考 webcomponentの方を使用する
//  https://swiperjs.com/element
//  https://zenn.dev/karakure178/scraps/cf38fa198013d9

// cssは、shadow ::partであてる
//  https://qiita.com/suin/items/72b85e7d4465719aa4e8

const setSlidesPerView = computed(() => {
  return props.mainVisual.length > 3 ? 2.5 : 1;
});
</script>

<template>
  <div class="c-home-sliderTest">
    <div class="c-home-sliderWrap">
      <swiper-container
        class="c-home-slider"
        :loop="props.mainVisual.length > 1"
        :centered-slides="true"
        :slides-per-view="1"
        :space-between="30"
        :autoplay="{
          delay: 3000,
          disableOnInteraction: false,
        }"
        :speed="1000"
        :breakpoints="{
          768: {
            slidesPerView: setSlidesPerView,
          },
        }"
        :pagination="{
          hideOnClick: false,
        }"
      >
        <swiper-slide
          class="c-home-sliderItem"
          v-for="(visual, index) in props.mainVisual"
          :key="index"
        >
          <a :href="visual.link" class="c-home-sliderItemInner">
            <img :src="visual.file" alt="" width="100%" height="100%" />
          </a>
        </swiper-slide>
      </swiper-container>
    </div>
  </div>
</template>
