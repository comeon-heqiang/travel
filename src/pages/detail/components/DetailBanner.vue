<template>
  <div>
    <div
      class="banner"
      @click="handleBannerClick"
    >
      <img
        class="banner-img"
        src="http://img1.qunarzz.com/sight/p0/1810/cc/cc47164357acbeb5a3.water.jpg_600x330_aed5d0a5.jpg"
      />
      <div class="banner-info">
        <div class="banner-title">
          海洋乐园
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
  data() {
    return {
      imgs: [
        "http://img1.qunarzz.com/sight/p0/1810/cc/cc47164357acbeb5a3.water.jpg_r_800x800_0271f7e2.jpg",
        "http://img1.qunarzz.com/sight/p0/1810/32/32392eea822d11c8a3.water.jpg_r_800x800_4172a5f9.jpg",
        "http://img1.qunarzz.com/sight/p0/1810/54/54a97e731330c416a3.water.jpg_r_800x800_3a69f2a8.jpg"
      ],
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
