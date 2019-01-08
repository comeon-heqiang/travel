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
import { mapMutations, mapState } from "vuex";
import axios from "axios";
export default {
  name: "Home",
  data() {
    return {
      swiperData: [],
      iconsData: [],
      recommendData: [],
      weekendData: [],
      lastCity: ""
    };
  },
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeRecommend,
    HomeWeekend
  },
  computed: {
    ...mapState(["city"])
  },
  methods: {
    initHomeData() {
      axios
        .get("/api/index.json", {
          params: {
            city: this.city
          }
        })
        .then(response => {
          let res = response.data;
          if (res.ret && res.data) {
            this.swiperData = res.data.swiperList;
            this.iconsData = res.data.iconList;
            this.weekendData = res.data.weekendList;
            this.recommendData = res.data.recommendList;
          } else {
            console.log("获取首页数据失败");
          }
        });
    }
  },
  mounted() {
    this.lastCity = this.city;
    this.initHomeData();
  },
  //keepalive会使用缓存数据, 判断选择城市是否改变，如果改变则重新发送请求 ----activated声明周期钩子是keep-alive 组件激活时调用
  activated() {
    if (this.lastCity !== this.city) {
      this.lastCity = this.city;
      this.initHomeData();
    }
  }
};
</script>

<style scoped>
</style>