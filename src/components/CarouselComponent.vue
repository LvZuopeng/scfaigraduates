<script setup>
import "vue3-carousel/carousel.css";
import { Carousel, Slide, Navigation } from "vue3-carousel";
import { ref, onMounted, onUnmounted } from "vue";

const images = Array.from({ length: 6 }, (_, index) => ({
id: index + 1,
url: require(`@/assets/${index + 1}.jpg`), // 动态加载本地图片
}));

const config = {
itemsToShow: 1.0,
gap: 5,
wrapAround: true,
};

const carouselRef = ref(null); // 用于引用 Carousel 组件的实例

// 自动切换图片
const goToNextSlide = () => {
if (carouselRef.value) {
carouselRef.value.next(); // 调用 next 方法切换到下一个图片
}
};

let intervalId = null; // 存储定时器 ID

onMounted(() => {
// 每3秒切换一次图片
intervalId = setInterval(goToNextSlide, 3000);
});

onUnmounted(() => {
// 清除定时器，避免组件销毁后依然执行
if (intervalId) {
clearInterval(intervalId);
}
});
</script>

<template>
<Carousel v-bind="config" ref="carouselRef">
<Slide v-for="image in images" :key="image.id">
<img :src="image.url" alt="image" />
</Slide>

<template #addons>
<Navigation />
</template>
</Carousel>
</template>

<style>
.carousel {
--vc-nav-background: rgba(255, 255, 255, 0.7);
--vc-nav-border-radius: 100%;
}

img {
border-radius: 2px;
width: 100%;
height: 100%;
}
</style>