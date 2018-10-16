<template>
    <div class="newsList">
        <h3>行业资讯</h3>
        <div class="row">
            <div class="col-sm-12">

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
    .newsList {
        margin-bottom: 20px
    }
    .newsList h3 {
        border-bottom: 2px solid #dcdcdc;
        padding: 15px 0
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

