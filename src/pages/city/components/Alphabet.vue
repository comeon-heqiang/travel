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
      @touchstart.prevent="handleTouchStart"
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
  data() {
    return {
      touchStatus: false,
      startY: 0, //第一个字母距离顶部的高度
      itemHeight: 0, //单个item的高度
      HeaderHeight: 0, //获取Header的高度
      timer: null
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
  mounted() {
    this.HeaderHeight =
      document.documentElement.clientHeight - this.$refs.listRef.clientHeight;
  },
  updated() {
    this.startY = this.$refs["A"][0].offsetTop;
    this.itemHeight = this.$refs["A"][0].clientHeight;
  },
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
        if (this.timer) {
          clearTimeout(this.timer);
        }
        // 函数节流
        this.timer = setTimeout(() => {
          const touchY = e.touches[0].clientY; //目标位置距离顶部的高度
          const index = Math.floor(
            (touchY - this.startY - this.HeaderHeight) / this.itemHeight
          ); //计算目标字母的下标值
          if (index >= 0 && index < this.letters.length) {
            let key = this.letters[index];
            this.$emit("change", key);
          }
        }, 15);
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
