<template>
  <div class="home">
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "errDeal",
  created() {
    //  请求拦截器
    axios.interceptors.request.use(
      config => {
        // 在发送请求前做些什么
        return config;
      },
      err => {
        // 在请求错误的时候的逻辑处理
        return Promise.reject(err);
      }
    );
    // 响应拦截器
    axios.interceptors.response.use(
      res => {
        // 在请求成功后的数据处理
        return res;
      },
      err => {
        // 在响应错误的时候的逻辑处理
        return Promise.reject(err);
      }
    );
    axios
      .get("data.json")
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(res);
      });
    //   请求错误处理
    let instance = axios.create({});
    instance.interceptors.request.use(
      config => {
        return config;
      },
      err => {
        // 请求错误的常见状态码：4XX  401-请求超时  404-mot found
        $("#error").show();
        setTimeout(() => {
          $("#error").hide();
        }, 2000);
        return Promise.reject(err);
      }
    );
    // 响应错误处理
    instance.interceptors.response.use(
      res => {
        return res;
      },
      err => {
        // 响应错误的常见状态码 5XX 500-服务器错误 502-服务器重启
        $("#error").show();
        setTimeout(() => {
          $("#error").hide();
        }, 2000);
        return Promise.reject(err);
      }
    );
    instance.get("/data.json").then(res=>{
        console.log(res,'请求成功')
    }).catch(err=>{
        console.log(err,'除了拦截器设置的处理之外的其他处理')
    })
  }
};
</script>
