<template>
  <view>
    <van-card :thumb-link="`/subpkg/goods_detail/goods_detail?id=${item.goods_id}`"
      :thumb="item.goods_small_logo || defaultPic" v-for="item in goods" :key="item.goods_id"
      :price="item.goods_price | toFixed" :title="item.goods_name" />
  </view>
</template>

<script>
  import toast from '@/utils/toast.js'
  import {
    getGoodsSeachApi
  } from '@/api/goods.js'
  export default {
    data() {
      return {
        queryDate: {
          query: '', //关键字
          cid: '', //分类id
          pagenum: 1, //页码
          pagesize: 10 //页容量
        },
        total: '',
        goods: [],
        defaultPic: 'https://img3.doubanio.com/f/movie/8dd0c794499fe925ae2ae89ee30cd225750457b4/pics/movie/celebrity-default-medium.png',
        islodaing: false
      };
    },
    methods: {
      // 获取页面搜索
      async loadGoods(stop) {
        this.islodaing = true
        const {
          total,
          goods
        } = await getGoodsSeachApi(this.queryDate)
        this.islodaing = false
        this.total = total
        this.goods = [...this.goods, ...goods]
        stop && stop()
      }
    },
    onLoad(options) {
      this.queryDate.query = options.query
      this.loadGoods()
    },
    onPullDownRefresh() {
      this.queryDate = {
        query: '', //关键字
        cid: '', //分类id
        pagenum: 1, //页码
        pagesize: 10 //页容量
      }
      this.total = ''
      this.goods = []
      this.loadGoods(() => {
        uni.stopPullDownRefresh()
      })
    },
    onReachBottom() {
      if (this.queryDate.pagenum * this.queryDate.pagesize >= this.total) return toast('亲没有更多数据了哦~')
      if (this.islodaing) return
      // 让页码值自增 +1
      this.queryDate.pagenum + 1
      // 重新获取列表数据
      this.loadGoods()
    }
  }
</script>

<style lang="scss">

</style>
