<template>
  <div>
    <detail-header></detail-header>
    <detail-banner></detail-banner>
    <div class="contact"></div>
  </div>
</template>

<script>
import DetailBanner from "./components/DetailBanner";
import DetailHeader from "./components/Header";
export default {
  data() {
    return {};
  },
  components: {
    DetailBanner,
    DetailHeader
  }
};
</script>

<style lang="stylus" scoped>
.contact
  height: 50rem
</style>
