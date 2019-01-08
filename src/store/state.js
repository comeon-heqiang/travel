let defaultCity = "杭州";
try {
  if (localStorage.getItem("city")) {
    defaultCity = localStorage.getItem('city')
  }
} catch (error) {
}

export default {
  city: defaultCity
}
