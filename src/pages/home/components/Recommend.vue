<template>
  <div>
    <div class="title">热销推荐</div>
    <ul>
      <li
        v-for="item of RecommendList"
        :key="item.id"
        class="item border-bottom"
      >
        <img
          class="item-img"
          :src="item.imgUrl"
        />
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
          <button class="item-button">查看详情</button>
        </div>
      </li>
      <!-- <router-link
        tag="li"
        class="item border-bottom"
        v-for="item of list"
        :key="item.id"
        :to="'/detail/' + item.id"
      >
        <img
          class="item-img"
          :src="item.imgUrl"
        />
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
          <button class="item-button">查看详情</button>
        </div>
      </router-link> -->
    </ul>
  </div>
</template>

<script>
export default {
  name: "HomeRecommend",
  data() {
    return {
      RecommendList: [
        {
          id: "0001",
          imgUrl:
            "http://img1.qunarzz.com/sight/p0/1810/cc/cc47164357acbeb5a3.water.jpg_200x200_151f0405.jpg",
          title: "杭州云曼温泉",
          desc: "杭州云曼温泉杭州云曼温泉"
        },
        {
          id: "0002",
          imgUrl:
            "http://img1.qunarzz.com/sight/p0/201309/25/70edd368471094bdc8d65eac.jpg_200x200_75b6f391.jpg",
          title: "临安湍口众安氡温泉",
          desc: "临安湍口众安氡温泉临安湍口众安氡温泉"
        },
        {
          id: "0003",
          imgUrl:
            "http://img1.qunarzz.com/sight/p0/1812/30/308fce51111d148fa3.img.jpg_200x200_eca5da3f.jpg",
          title: "临安大明山滑雪场",
          desc: "临安大明山滑雪场临安大明山滑雪场"
        },
        {
          id: "0004",
          imgUrl:
            "http://img1.qunarzz.com/sight/p0/201212/18/f195032e85740a4b93835fbb.jpg_200x200_77761d11.jpg",
          title: "杭州海底世界",
          desc: "杭州海底世界杭州海底世界"
        },
        {
          id: "0005",
          imgUrl:
            "http://img1.qunarzz.com/sight/p0/1603/33/337b483a8f5e76fb90.water.jpg_200x200_8f62ff4e.jpg",
          title: "瑶琳仙境",
          desc: "瑶琳仙境瑶琳仙境"
        }
      ]
    };
  }
};
</script>

<style lang="stylus" scoped>
@import '~styles/mixins.styl'
.title
  margin-top: 0.2rem
  line-height: 0.8rem
  background: #eee
  text-indent: 0.2rem
.item
  overflow: hidden
  display: flex
  height: 1.9rem
  .item-img
    width: 1.7rem
    height: 1.7rem
    padding: 0.1rem
  .item-info
    flex: 1
    padding: 0.1rem
    min-width: 0
    .item-title
      line-height: 0.54rem
      font-size: 0.32rem
      ellipsis()
    .item-desc
      line-height: 0.4rem
      color: #ccc
      ellipsis()
    .item-button
      line-height: 0.44rem
      margin-top: 0.16rem
      background: #ff9300
      padding: 0 0.2rem
      border-radius: 0.06rem
      color: #fff
</style>
