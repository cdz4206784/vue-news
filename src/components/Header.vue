<template>
  <header>
      
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container">
            <a class="navbar-brand" href="#">
                <img src="../../src/assets/logo.png">
            </a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarColor01">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item" v-for="nav in navs">
                        <a class="nav-link" href="#">{{nav}}</a>
                    </li>
                </ul>

                <ul class="nav navbar-nav ml-auto">
                    <li class="nav-item">
                        <a class="nav-link" href="#">登录</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">注册</a>
                    </li>
                </ul>

            </div>
        </div>
    </nav>

  </header>
</template>

<script>
export default {
  data () {
    return {
      navs: ['新闻首页','行业资讯','展会活动','拍卖升值','人物报道','职称评定','公司动态']
    }
  },
  created(){
      this.$axios.post('/api/news/news_class_name', {cid:2}).then(res=>{
          console.log(res)
      })
  }
}
</script>

<style scoped>
    header a {
        font-size: 15px;
    }
</style>
