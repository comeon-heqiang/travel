<template>
  <div>
    <div
      class="banner"
      @click="handleBannerClick"
    >
      <img
        class="banner-img"
        :src="bannerImg"
      />
      <div class="banner-info">
        <div class="banner-title">
          {{sightName}}
        </div>
        <div class="banner-number">
          <span class="iconfont banner-icon">&#xe755;</span>
          {{imgs.length}}
        </div>
      </div>
    </div>
    <detail-gallary
      :imgs="imgs"
      @close="closeGallary"
      v-show="showGallary"
    ></detail-gallary>
  </div>
</template>

<script>
import DetailGallary from "common/gallary/Gallary";
export default {
  name: "DetailBanner",
  props: ["imgs","bannerImg","sightName"],
  data() {
    return {    
      showGallary: false
    };
  },
  components: {
    DetailGallary
  },
  methods: {
    handleBannerClick() {
      this.showGallary = true;
    },
    closeGallary() {
      this.showGallary = false;
    }
  }
};
</script>

<style lang="stylus" scoped>
.banner
  position: relative
  overflow: hidden
  height: 0
  padding-bottom: 55%
  .banner-img
    width: 100%
  .banner-info
    display: flex
    position: absolute
    left: 0
    right: 0
    bottom: 0
    line-height: 0.6rem
    color: #fff
    background-image: linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8))
    .banner-title
      flex: 1
      font-size: 0.32rem
      padding: 0 0.2rem
    .banner-number
      height: 0.32rem
      line-height: 0.32rem
      margin-top: 0.14rem
      padding: 0 0.4rem
      border-radius: 0.2rem
      background: rgba(0, 0, 0, 0.8)
      font-size: 0.24rem
      .banner-icon
        font-size: 0.24rem
</style>
