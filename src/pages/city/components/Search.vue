<template>
  <div>
    <div class="search">
      <input
        v-model="keyword"
        class="search-input"
        type="text"
        placeholder="输入城市名或拼音"
      />
    </div>
    <div
      class="search-content"
      v-show="keyword"
    >
      <ul>
        <li
          class="search-item border-bottom"
          v-for="item in List"
          :key="item.id"
          @click="handleChangeCity(item.name)"
        >
          {{item.name}}
        </li>
        <li
          class="search-item border-bottom"
          v-show="noSearchData"
        >没有数据</li>
      </ul>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
import { mapMutations, mapState } from "vuex";
export default {
  name: "CitySearch",
  props: { cities: Object },
  data() {
    return {
      keyword: "",
      List: [],
      timer: null
    };
  },
  watch: {
    keyword() {
      if (!this.keyword) {
        this.List = [];
        return;
      }
      if (this.timer) {
        clearInterval(this.timer);
      }
      // 函数节流
      this.timer = setTimeout(() => {
        const result = [];
        for (let i in this.cities) {
          this.cities[i].forEach(value => {
            if (
              value.spell.indexOf(this.keyword) > -1 ||
              value.name.indexOf(this.keyword) > -1
            ) {
              result.push(value);
            }
          });
        }
        this.List = result;
      }, 500);
    }
  },
  mounted() {
    this.scroll = new BScroll(".search-content");
  },
  computed: {
    noSearchData() {
      return !this.List.length;
    }
  },
  methods: {
    handleChangeCity(city) {
      this.changeCity(city);
      this.$router.push("/");
    },
    ...mapMutations(["changeCity"])
  }
};
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
.search
  height: 0.72rem
  padding: 0 0.1rem
  background: $bgColor
  .search-input
    box-sizing: border-box
    width: 100%
    height: 0.62rem
    padding: 0 0.1rem
    line-height: 0.62rem
    text-align: center
    border-radius: 0.06rem
    color: #666
.search-content
  z-index: 1
  overflow: hidden
  position: absolute
  top: 1.58rem
  left: 0
  right: 0
  bottom: 0
  background: #eee
  .search-item
    line-height: 0.62rem
    padding-left: 0.2rem
    background: #fff
    color: #666
</style>
