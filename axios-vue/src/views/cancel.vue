<template>
  <div class="home">
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "cancel",
  created() {
    let source = axios.CancelToken.source();
    axios
      .get("/data.json", {
        cancelToken: source.token
      })
      .then(res => {
        console.log(res);
      }).catch(err=>{
          console.log(err)
      })
    //   取消请求(参数msg)
      source.cancel('自定的的字符串可选')
  }
};
</script>
