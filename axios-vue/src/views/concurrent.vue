<template>
  <div class="home">
</div>
</template>

<script>
import axios from "axios";
export default {
  name: "concurrent",
  created() {
        // 并发请求
    axios.all([axios.get("/data.json"), axios.get("/city.json")]).then(
      axios.spread((dataRes, cityRes) => {
        console.log(dataRes, cityRes);
      })
    );
  }
};
</script>
