<template>
  <div>
    <div class="wrapper">
      <swiper
        :options="swiperOption"
        :not-next-tick="notNextTick"
        ref="mySwiper"
      >
        <!-- slides -->
        <swiper-slide
          v-for="item of swiperList"
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
  data() {
    return {
      swiperList: [
        {
          id: "0001",
          imgUrl:
            "http://img1.qunarzz.com/piao/fusion/1609/4d/3dc09bcc290f0c02.jpg_750x200_09c97d67.jpg"
        },
        {
          id: "0002",
          imgUrl:
            "http://img1.qunarzz.com/piao/fusion/1712/51/36632b2cb850e902.jpg_750x200_fa4120db.jpg"
        }
      ],
      notNextTick: true,
      swiperOption: {
        pagination: ".swiper-pagination",
        loop: true
      }
    };
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
  padding-bottom: 26.6%
  background: #eee
  .swiper-img
    width: 100%
</style>

