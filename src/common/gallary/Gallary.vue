<template>
  <div
    class="container"
    @click="handleGallaryClick"
  >
    <div class="wrapper">
      <swiper :options="swiperOptions">
        <swiper-slide
          v-for="(item,index) in imgs"
          :key="index"
        >
          <img
            class="gallary-img"
            :src="item"
          />
        </swiper-slide>
        <div
          class="swiper-pagination"
          slot="pagination"
        ></div>
      </swiper>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    imgs: {
      type: Array,
      default() {
        return [
          "http://img1.qunarzz.com/sight/p0/1810/cc/cc47164357acbeb5a3.water.jpg_r_800x800_0271f7e2.jpg",
          "http://img1.qunarzz.com/sight/p0/1810/32/32392eea822d11c8a3.water.jpg_r_800x800_4172a5f9.jpg"
        ];
      }
    }
  },
  data() {
    return {
      swiperOptions: {
        pagination: ".swiper-pagination",
        paginationType: "fraction",
        observer: true,
        observeParents: true
      }
    };
  },
  methods: {
    handleGallaryClick() {
      this.$emit("close");
    }
  }
};
</script>
<style lang="stylus" scoped>
.container >>> .swiper-container
  overflow: inherit
.container
  display: flex
  flex-direction: column
  justify-content: center
  z-index: 99
  position: fixed
  left: 0
  right: 0
  top: 0
  bottom: 0
  background: #000
  .wrapper
    height: 0
    width: 100%
    padding-bottom: 67%
    .gallary-img
      width: 100%
    .swiper-pagination
      color: #fff
      bottom: -1rem
</style>
