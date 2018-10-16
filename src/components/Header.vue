<template>
  <header>
      
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container">
            <a class="navbar-brand" href="#">
                <img src="../../src/assets/logo.png">
            </a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarColor01">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item">
                        <router-link  class="nav-link" :to="{name:'homeLink'}">新闻首页</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/list/1">行业资讯</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/list/2">展会活动</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/list/3">拍卖升值</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/list/4">人物报道</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/list/5">职称评定</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/list/6">名家访谈</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/list/7">公司动态</router-link>
                    </li>
                </ul>

                <ul class="nav navbar-nav ml-auto">
                    <li class="nav-item">
                        <router-link class="nav-link" :to="{name:'usersLink'}">用户管理</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" :to="{name:'loginLink'}">登录</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" :to="{name:'regLink'}">注册</router-link>
                    </li>
                    
                </ul>

            </div>
        </div>
    </nav>

  </header>
</template>

<script>

</script>

<style scoped>
    header a {
        font-size: 15px;
    }
</style>
