<template>
  <div class="home">
      <recommend v-bind:newsArr="newsArr"></recommend>
      <div class="container">
        <div class="row">
          <div class="col-sm-9">
            <index-list v-bind:newsArr="newsArr"></index-list>
          </div>
          <div class="col-sm-3">
            <pub-right></pub-right>
          </div>
        </div>
      </div>
     
  </div>
</template>

<script>
import Recommend from './Recommend'
import IndexList from './IndexList'
import PubRight from './PubRight'

export default {
  name: 'home',
  data() {
    return {
      newsArr:''
    }
  },
  components: {
    Recommend,IndexList,PubRight
  },
  created(){
    // 热门推荐
    this.$axios.get("http://jsonplaceholder.typicode.com/photos?albumId=1").then(res=>{
      this.newsArr = res.data
      // console.log(res.data)
    })

  }
}
</script>

<style>

</style>
