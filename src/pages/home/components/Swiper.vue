<template>
  <div>
    <div class="wrapper">
      <swiper
        :options="swiperOption"
        :not-next-tick="notNextTick"
        ref="mySwiper"
        v-if="swiperList"
      >
        <!-- slides -->
        <swiper-slide
          v-for="item of list"
          :key="item.id"
        >
          <img
            :src="item.imgUrl"
            class="swiper-img"
            alt=""
          >
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
  name: "carrousel",
  props: {
    list: Array
  },
  data() {
    return {
      notNextTick: true,
      swiperOption: {
        pagination: ".swiper-pagination",
        loop: true
      }
    };
  },
  computed: {
    swiperList() {
      return this.list.length;
    }
  }
};
</script>

<style lang="stylus" scoped>
.wrapper >>> .swiper-pagination-bullet-active
  background: #fff
.wrapper
  overflow: hidden
  height: 0
  width: 100%
  padding-bottom: 31.25%
  background: #eee
  .swiper-img
    width: 100%
</style>

