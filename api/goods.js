import fly from '@/utils/request.js'

// 商品列表搜索
export const getGoodsSeachApi = (data) => {
  return fly.get('/goods/search', data)
}
