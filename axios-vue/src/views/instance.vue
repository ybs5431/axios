<template>
  <div class="home">
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "instance",
  created() {
    let instance = axios.create({
      baseURL: "http://loacalhost:8080",
      timeout: 1000
    });
    instance.get("/data.json").then(res => {
      console.log(res);
    });
    let instance2 = axios.create({
      baseURL: "http://loacalhost:8081",
      timeout: 2000
    });
    instance2.get("/city.json").then(res => {
      console.log(res);
    });
  }
};
</script>
