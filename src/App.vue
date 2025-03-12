<script setup>
import Slider from "./components/Slider.vue";

const mainVisual = [
  {
    file: "/images/slider01.webp",
    title: "スライダー1",
    link: "https://www.google.com/",
    target: "true",
  },
  {
    file: "/images/slider02.webp",
    title: "スライダー2",
    link: "",
    target: "",
  },
  {
    file: "/images/slider03.webp",
    title: "スライダー2",
    link: "",
    target: "",
  },
  {
    file: "/images/slider04.webp",
    title: "スライダー2",
    link: "",
    target: "",
  },
];

const slides = [
  {
    file: "/images/slider01.webp",
    title: "スライダー1",
    link: "https://www.google.com/",
    target: "true",
  },
  {
    file: "/images/slider02.webp",
    title: "スライダー2",
    link: "",
    target: "",
  },
];
</script>

<template>
  <main>
    <div class="c-sliderList">
      <Slider :mainVisual="mainVisual" />

      <Slider :mainVisual="slides" />
    </div>
  </main>
</template>
<style>
.c-sliderList {
  display: flex;
  flex-direction: column;
  gap: 50px;
}
</style>
