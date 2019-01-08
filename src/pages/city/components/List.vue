<template>
  <div
    class="list"
    ref="wrapper"
  >
    <div>
      <!-- 当前城市 -->
      <div class="area">
        <div class="title border-topbottom">当前城市</div>
        <div class="button-list">
          <div class="button-wrapper">
            <div class="button">{{this.$store.state.city}}</div>
          </div>
        </div>
      </div>
      <!-- 热门城市 -->
      <div class="area">
        <div class="title border-topbottom">热门城市</div>
        <div class="button-list">

          <div
            class="button-wrapper"
            v-for="item of hotCities"
            :key="item.id"
          >
            <div
              class="button"
              @click="handleChangeCity(item.name)"
            >{{item.name}}</div>
          </div>
        </div>

      </div>
      <!-- 所有地区 -->
      <div
        class="area"
        v-for="(item,key) of cities"
        :key="key"
        :ref="key"
      >
        <div class="title border-topbottom">{{key}}</div>
        <div class="item-list">
          <div
            class="item border-bottom"
            v-for="itemCity of item"
            :key="itemCity.id"
            @click="handleChangeCity(itemCity.name)"
          >
            {{itemCity.name}}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
export default {
  name: "CityList",
  props: { cities: Object, hotCities: Array, letter: String },
  data() {
    return {};
  },
  computed: {},
  mounted() {
    this.scroll = new BScroll(this.$refs.wrapper);
  },
  watch: {
    // 监听传值改变 页面滚动到指定位置
    letter() {
      if (this.letter) {
        let element = this.$refs[this.letter][0];
        this.scroll.scrollToElement(element);
      }
    }
  },
  methods: {
    handleChangeCity(city) {
      this.$store.commit("changeCity", city);
      this.$router.push("/");
    }
  }
};
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
.border-topbottom
  &:before
    border-color: #ccc
  &:after
    border-color: #ccc
.border-bottom
  &:before
    border-color: #ccc
.list
  overflow: hidden
  position: absolute
  top: 1.58rem
  left: 0
  right: 0
  bottom: 0
  .title
    line-height: 0.54rem
    background: #eee
    padding-left: 0.2rem
    color: #666
    font-size: 0.26rem
  .button-list
    overflow: hidden
    padding: 0.1rem 0.6rem 0.1rem 0.1rem
    .button-wrapper
      float: left
      width: 33.33%
      .button
        margin: 0.1rem
        padding: 0.1rem 0
        text-align: center
        border: 0.02rem solid #ccc
        border-radius: 0.06rem
  .item-list
    .item
      line-height: 0.76rem
      padding-left: 0.2rem
</style>
