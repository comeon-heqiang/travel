<template>
  <div>
    <detail-header></detail-header>
    <detail-banner></detail-banner>
    <detail-list :list="list"></detail-list>

  </div>
</template>

<script>
import DetailBanner from "./components/DetailBanner";
import DetailHeader from "./components/Header";
import DetailList from "./components/List";
export default {
  data() {
    return {
      list: [
        {
          title: "（暖冬节）杭州云曼温泉成人票",
          children: [
            {
              title: "云曼温泉亲子套票",
              children: [
                {
                  title: "云曼温泉亲子套票(1大1小)"
                }
              ]
            }
          ]
        },
        {
          title: "云曼温泉畅玩年卡",
          children: [
            {
              title: "云曼温泉畅玩个人年卡"
            },
            {
              title: "云曼温泉畅玩情侣年卡"
            }
          ]
        }
      ]
    };
  },
  components: {
    DetailBanner,
    DetailHeader,
    DetailList
  }
};
</script>

<style lang="stylus" scoped>
.contact
  height: 50rem
</style>
