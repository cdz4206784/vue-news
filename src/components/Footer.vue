<template>
  <footer>
      <div class="container">
        <div class="row">
            <div class="col-sm-10">
                <ul class="nav">
                    <li v-for="footerNav in footerNavs">
                        <a href=""> {{footerNav}} </a>
                    </li>
                </ul>

                <p>合作伙伴：中国紫砂协会 江苏省陶瓷行业协会 宜兴紫砂壶艺术研究所</p>
                <p>艺术顾问：顾绍培 吕尧臣 毛国强 季益顺 徐汉棠 吕俊杰 李昌鸿 徐秀棠 潘持平 程辉 徐安碧</p>
                <p>法律支持：上海市汇业律师事务所</p>
                <p>沪公网安备 31010102002609号 沪ICP备09082854 增值电信许可 沪B2-20180503</p>
            </div>
            <div class="col-sm-2 text-center">
                <img src="../../src/assets/wapzhan.png" class="codeImg" alt=""><br>官方手机站
            </div>
        </div>
      </div>
  </footer>
</template>

<script>
export default {
  data () {
    return {
        footerNavs: ['关于我们','发展历程','公司动态','公司荣誉','媒体报道','全国连锁门店','官方客服验证','谨防假冒']
    }
  }
}
</script>

<style scoped>
    footer {
        background: #313131;
        color: #9fa0a0;
        padding-top: 20px;
        padding-bottom: 10px;
        font-size: 12px;
    }

    footer ul {
        margin-bottom: 15px;
    }

    footer ul a {
        margin-right: 15px;
    }


    footer p {
        margin-bottom: 5px;
    }

    footer .codeImg {
        margin-bottom: 5px;
    }
</style>
