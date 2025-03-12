<script setup>
import Slider from "./components/Slider.vue";

const mainVisual = [
  {
    file: "/images/slider01.webp",
    title: "スライダー1",
    link: "https://www.google.com/",
    target: "",
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
</script>

<template>
  <main>
    <Slider :mainVisual="mainVisual" />
  </main>
</template>
