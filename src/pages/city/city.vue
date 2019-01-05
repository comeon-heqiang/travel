<template>
  <div>
    <city-header></city-header>
    <city-search></city-search>
    <city-list
      :cities="cities"
      :hotCities="hotCities"
    ></city-list>
    <city-alphabet :cities="cities"></city-alphabet>
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
      hotCities: []
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
    }
  },
  mounted() {
    this.getCityData();
  }
};
</script>

<style lang="stylus" scoped>
</style>
