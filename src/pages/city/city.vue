<template>
  <div>
    <city-header></city-header>
    <city-search></city-search>
    <city-list
      :cities="cities"
      :hotCities="hotCities"
      :letter="letter"
    ></city-list>
    <city-alphabet
      @change="handleLetterChange"
      :cities="cities"
      :letter="letter"
    ></city-alphabet>
  </div>
</template>

<script>
import CityHeader from "./components/Header";
import CitySearch from "./components/Search";
import CityList from "./components/List";
import CityAlphabet from "./components/Alphabet";
import axios from "axios";
export default {
  name: "city",
  data() {
    return {
      cities: {},
      hotCities: [],
      letter: ""
    };
  },
  components: {
    CityHeader,
    CitySearch,
    CityList,
    CityAlphabet
  },
  methods: {
    getCityData() {
      axios.get("/api/city.json").then(response => {
        let res = response.data;
        if (res.ret && res.data) {
          this.cities = res.data.cities;
          this.hotCities = res.data.hotCities;
        }
      });
    },
    //右侧字母表改变
    handleLetterChange(letter) {
      this.letter = letter;
    }
  },
  mounted() {
    this.getCityData();
  }
};
</script>

<style lang="stylus" scoped>
</style>
