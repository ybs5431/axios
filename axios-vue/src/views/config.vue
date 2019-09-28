<template>
  <div class="home">
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "config",
  created() {
    axios.create({
        baseURL:'', //请求的域名（基本地址）
        timeout:2000, //请求的超时时长，单位毫秒，默认。
        url:'/data.json', //请求路径
        method:'get', //请求方法
        headers:{
            token:''
        }, //设置请求头
        params:{

        },//将请求参数拼接到url上
        data:{

        }, //将请求参数放置到请求体里
    });

    // 1、axios全局配置
    axios.defaults.baseURL = 'http://localhost:8080'
    axios.defaults.timeout = 2000
    // 2、axios实例配置
    let instance = axios.create();
    instance.defaults.timeout = 3000
    // 3、axios请求配置
    instance.get('/data.json',{
        timeout:5000
    })


    let instance1 = axios.create({
        baseURL = 'http://localhost:9090',
        timeout:1000
    })
    instance1.get("/contactList",{
        params:{
            id:10
        }
    }).then(res=>{
        console.log(res)
    })

    let instance2 = axios.create({
        baseURL = 'http://localhost:9091',
        timeout:3000
    })
    instance2.get("/contactList",{
        timeout:5000
    }).then(res=>{
        console.log(res)
    })
  }
};
</script>
