<template>
  <div class="home">
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "intercepters",
  created() {
    //   请求拦截器
    axios.interceptors.request.use(config => {
      // 在发送请求前做些什么
      return config;
    }, err=>{
        // 在请求错误的时候的逻辑处理
        return Promise.reject(err)
    });


    // 响应拦截器
    axios.interceptors.response.use(res => {
      // 在请求成功后的数据处理
      return res;
    }, err=>{
        // 在响应错误的时候的逻辑处理
        return Promise.reject(err)
    });

    // 取消拦截器
    let inter = axios.interceptors.request.use(config=>{
        config.header={
            auth:true
        }
        return config
    })
    axios.interceptors.request.eject(inter)

    // 需要token的接口
    let instance = axios.create({});
    instance.interceptors.request.use(config=>{
        config.headers.token = '';
        return config
    })

    // 不需要token接口
    let newInstance = axios.create({});

    // 请求的加载动画loading
    let instance_phone = axios.create({});
    instance_phone.interceptors.request.use(config=>{
        $('#loading').show();
        return config
    })
    instance_phone.interceptors.response.use(res=>{
        $('#loading').hide();
        return res
    })

  }
};
</script>
