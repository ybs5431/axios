<template>
  <div class="home">
</div>
</template>

<script>
import axios from "axios";
export default {
  name: "home",
  created() {
    axios
      .get("/data.json")
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  }
};
</script>
