<template>
  <div class="home">
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "axios2-2",
  created() {
    // get方法
    // axios
    //   .get("/data.json")
    //   .then(res => {
    //     console.log(res);
    //   })
    //   .catch(err => {
    //     console.log(err);
    //   });

    // axios
    //   .get("/data.json", {
    //     params: {
    //       id: 12
    //     }
    //   })
    //   .then(res => {
    //     console.log(res);
    //   })
    //   .catch(err => {
    //     console.log(err);
    //   });

    // axios({
    //   method: "get",
    //   url: "/data.json",
    //   params: {
    //     id: 12
    //   }
    // }).then(res => {
    //   console.log(res);
    // });

    // post方法
    let data = {
      id: 12
    };
    axios.post("/data.json", data).then(res => {
      console.log(res, "post");
    });
    axios({
      method: "post",
      url: "/data.json",
      data: data
    }).then(res => {
      console.log(res);
    });

    let formData = new FormData();
    for (let key in data) {
      formData.append(key, data[key]);
    }
    console.log(formData);
    axios.post("/data.json", formData).then(res => {
      console.log(res, "formData");
    });

    // put方法
    axios.put("/data.json", data).then(res => {
      console.log(res, "put");
    });
    // patch方法
    axios.patch("/data.json", data).then(res => {
      console.log(res, "patch");
    });
    // delete方法
    axios
      .delete("/data.json", {
        params: {
          id: 12
        }
      })
      .then(res => {
        console.log(res, "delete");
      });
    axios
      .delete("/data.json", {
        data: {
          id: 12
        }
      })
      .then(res => {
        console.log(res, "delete");
      });


  }
};
</script>
