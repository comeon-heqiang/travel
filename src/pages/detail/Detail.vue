<template>
  <div>
    <detail-header></detail-header>
    <detail-banner
      :imgs="gallaryImgs"
      :bannerImg="bannerImg"
      :sightName="sightName"
    ></detail-banner>
    <detail-list :list="list"></detail-list>
    <div class="contact"></div>
  </div>
</template>

<script>
import DetailBanner from "./components/DetailBanner";
import DetailHeader from "./components/Header";
import DetailList from "./components/List";
import axios from "axios";
export default {
  name: "Detail",
  data() {
    return {
      bannerImg: "",
      gallaryImgs: [],
      list: [],
      sightName: ""
    };
  },
  components: {
    DetailBanner,
    DetailHeader,
    DetailList
  },
  methods: {
    getDetail() {
      axios
        .get("/api/detail.json", {
          params: {
            id: "0001"
          }
        })
        .then(this.response);
    },
    response(res) {
      res = res.data;
      if (res.ret && res.data) {
        const data = res.data;
        this.list = data.categoryList;
        this.sightName = data.sightName;
        this.gallaryImgs = data.gallaryImgs;
        this.bannerImg = data.bannerImg;
      }
    }
  },
  mounted() {
    this.getDetail();
  }
};
</script>

<style lang="stylus" scoped>
.contact
  height: 50rem
</style>
