<template>
  <div>
    <home-header></home-header>
    <home-swiper :list="swiperData"></home-swiper>
    <home-icons :list="iconsData"></home-icons>
    <home-recommend :list="recommendData"></home-recommend>
    <home-weekend :list="weekendData"></home-weekend>
  </div>
</template>

<script>
import HomeHeader from "./components/Header";
import HomeSwiper from "./components/Swiper";
import HomeIcons from "./components/Icons";
import HomeRecommend from "./components/Recommend";
import HomeWeekend from "./components/Weekend";
import axios from "axios";
export default {
  name: "Home",
  data() {
    return {      
      swiperData: [],
      iconsData: [],
      recommendData: [],
      weekendData: []
    };
  },
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeRecommend,
    HomeWeekend
  },
  mounted() {
    axios.get("/api/index.json").then(response => {
      let res = response.data;
      if (res.ret && res.data) {
        this.swiperData = res.data.swiperList;
        this.iconsData = res.data.iconList;
        this.weekendData = res.data.weekendList;
        this.recommendData=res.data.recommendList;
      } else {
        console.log("获取首页数据失败");
      }
    });
  }
};
</script>

<style scoped>
</style>