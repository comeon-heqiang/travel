<template>
  <ul
    class="list"
    ref="listRef"
  >
    <li
      class="item"
      v-for="item of letters"
      :key="item"
      :ref="item"
      @touchstart="handleTouchStart"
      @touchmove="handleTouchMove"
      @touchend="handleTouchEnd"
      @click="handleClick"
    >
      {{item}}
    </li>
  </ul>
</template>

<script>
export default {
  name: "CityAlphabet",
  props: { cities: Object },
  computed: {},
  data() {
    return {
      touchStatus: false
    };
  },
  computed: {
    letters() {
      let letter = [];
      for (let i in this.cities) {
        letter.push(i);
      }
      return letter;
    }
  },
  updated() {},
  methods: {
    handleClick(e) {
      let key = e.target.innerText;
      this.$emit("change", key);
    },
    handleTouchStart(e) {
      this.touchStatus = true;
    },
    handleTouchMove(e) {
      if (this.touchStatus) {
        //  (document.documentElement.clientHeight -
        //     this.$refs["listRef"].clientHeight)
        // const startY =
        //   this.$refs["A"][0].offsetTop -
        //  ;
        console.log(startY);
        // const touchY = e.touches[0].clientY -;
        // const touchEnd=
      }
    },
    handleTouchEnd(e) {
      this.touchStatus = false;
    }
  }
};
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
.list
  display: flex
  flex-direction: column
  justify-content: center
  position: absolute
  top: 1.58rem
  right: 0
  bottom: 0
  width: 0.4rem
  .item
    line-height: 0.4rem
    text-align: center
    color: $bgColor
</style>
