<template>
  <div>
    <div class="title">周末去哪儿</div>
    <ul>
      <li
        class="item border-bottom"
        v-for="item of list"
        :key="item.id"
      >
        <div class="item-img-wrapper">
          <img class="item-img" :src="item.imgUrl" />
        </div>
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "HomeWeekend",
  data() {
    return {
      list: [
        {
          id: "0001",
          imgUrl:
            "http://img1.qunarzz.com/sight/source/1510/c1/afe3ab32b3bc23.jpg_r_640x214_beb61760.jpg",
          title: "精致暖汤",
          desc:
            "天然高品质温泉，这是冬天秀美容颜首选之地，让你疲惫的身影在这里消失的无影无踪"
        },
        {
          id: "0002",
          imgUrl:
            "http://img1.qunarzz.com/sight/source/1505/4e/3e87ee62e59cdb.jpg_r_640x214_fe6cc902.jpg",
          title: "杭州必打卡",
          desc: "杭州，前世今生与你有一场美丽约会"
        },
        {
          id: "0003",
          imgUrl:
            "http://img1.qunarzz.com/sight/source/1811/52/b6776b49d27025.jpg_r_640x214_35ae205c.jpg",
          title: "美丽普陀山",
          desc:
            "人间仙境杭州，佛教圣地普陀山等你来玩！在这里静心接收佛家的洗礼，用心感受佛文化"
        },
        {
          id: "0004",
          imgUrl:
            "http://img1.qunarzz.com/sight/source/1505/9f/7d45cc38259e0.jpg_r_640x214_156f4299.jpg",
          title: "承载杭城的历史之地",
          desc: "饱经沧桑的地方诉述着这座城的段段衷肠"
        },
        {
          id: "0005",
          imgUrl:
            "http://img1.qunarzz.com/sight/source/1505/a3/9c9d78e925e8bc.jpg_r_640x214_74656d68.jpg",
          title: "泡汤好去处",
          desc: "泡在氤氲的温泉中，聆听冬天脚步的声音"
        }
      ]
    };
  }
};
</script>

<style lang="stylus" scoped>
  @import '~styles/mixins.styl'
  .title
    line-height: .8rem
    background: #eee
    text-indent: .2rem
  .item-img-wrapper
    overflow: hidden
    height: 0
    padding-bottom: 37.01%
    .item-img
      width: 100%
  .item-info
    padding: .1rem
    .item-title
      line-height: .54rem
      font-size: .32rem
      ellipsis()
    .item-desc
      line-height: .4rem
      color: #ccc
      ellipsis()
</style>
