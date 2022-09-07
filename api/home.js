import fly from '@/utils/request.js'
// 获取轮播图
export const getbannerApi = () => {
  return fly.get('/home/swiperdata')
}
// 获取nav 
export const getnavApi = () => {
  return fly.get('/home/catitems')
}
// 获取floos
export const getfloorApi = () => {
  return fly.get('/home/floordata')
}
