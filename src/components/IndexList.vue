<template>
    <div class="indexList">
        <h3>行业资讯</h3>
        <div class="row">
            <div class="col-sm-5" v-for="(news, index) in newsArr" v-if="index==4">
                <img :src="news.url" alt="">
            </div>
            <div class="col-sm-7">

                <ul class="news-list">
                    <li v-for="(news, index) in newsArr" v-if="index>4 && index <=12">
                        <a href="#">{{news.title}}</a>
                    </li>
                </ul>

            </div>
        </div>

    </div>
</template>

<script>
    export default {
        props: ["newsArr"]
    }
</script>

<style>
    .indexList {
        margin-bottom: 20px
    }
    .indexList h3 {
        border-bottom: 2px solid #dcdcdc;
        padding: 15px 0
    }
    .indexList .col-sm-5 img {
        width: 100%;
    }

    .news-list {
        padding: 0;
        line-height: 40px;
        font-size: 16px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        -webkit-box-orient: vertical;
    }

    .news-list li {
        list-style: none;
    }
</style>

