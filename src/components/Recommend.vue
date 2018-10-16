<template>
    <div class="recommend">
        <div class="container">

            <h3 v-html="cloumnTitle"></h3>

            <div class="row">
                <div class="col-sm-3 news" v-for="(news,index) in newsArr" v-if="index<4">
                    <a href="#" class="news-img"><img v-bind:src="news.url"></a>
                    <div class="news-xx">
                        <p>
                            <a href="">{{news.title}}</a>
                        </p>
                        <p>
                            <span>
                                <a href="#">类别：公司动态</a>
                            </span>
                            <span>
                                时间：2018-10-10
                            </span>
                        </p>
                    </div>
                    
                </div>
            </div>


        </div>
    </div>
    
</template>

<script>
export default {
  props: ["newsArr"],
  data() {
    return {
      cloumnTitle: "热门推荐 <span>HOTS</span>"
    };
  }
};
</script>

<style scoped>
.recommend {
  background: url("../../src/assets/rmtj_bg.jpg") center no-repeat;
  height: 450px;
  padding-top: 15px;
  box-sizing: border-box;
}

.news {
}
.news .news-img {
  width: 260px;
  height: 260px;
  background: #fff;
}

.news .news-img img {
    width: 100%;
    display: block;
}

.news-xx {
    background: #fff;
    padding: 10px;
}

.news-xx p:first-child {
    text-overflow: -o-ellipsis-lastline;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    line-clamp: 2;
    -webkit-box-orient: vertical;
}
.news-xx p:last-child {
    font-size: 12px;
    display: flex;
    justify-content: space-between
}
</style>

