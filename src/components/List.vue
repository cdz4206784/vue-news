<template>
  <div class="list">
      <div class="container">
        <div class="row">
          <div class="col-sm-9">
            <news-list v-bind:newsArr="newsArr"></news-list>
          </div>
          <div class="col-sm-3">
            <pub-right></pub-right>
          </div>
        </div>
      </div>
     
  </div>
</template>

<script>
import NewsList from './NewsList'
import PubRight from './PubRight'

export default {
  name: 'list',
  data() {
    return {
      newsArr:''
    }
  },
  components: {
    NewsList,PubRight
  },

  created(){
    // 调取数据
    this.$axios.get("http://jsonplaceholder.typicode.com/photos?albumId="+ this.$route.params.id).then(res=>{
      this.newsArr = res.data
      // console.log(res.data)
    })
  },

  // 复用组件时，想对路由参数的变化作出响应 watch (监测变化) 
  // watch: {
  //   '$route' (to, from) {
  //     if(to){
  //       this.$axios.get("http://jsonplaceholder.typicode.com/photos?albumId="+ to.params.id).then(res=>{
  //       this.newsArr = res.data
  //     })
  //   }
  //   }
  // },

  // 复用组件时，想对路由参数的变化作出响应 2.2中引入的导航守卫
  beforeRouteUpdate (to, from, next) {
    // alert('hello' + this.$route.params.id);
    if(to){
      this.$axios.get("http://jsonplaceholder.typicode.com/photos?albumId="+ to.params.id).then(res=>{
        this.newsArr = res.data
      })
    }
    next()
  }

}
</script>

<style>

</style>
