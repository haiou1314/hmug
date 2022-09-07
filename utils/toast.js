// 普通提示
function toast(title, duration) {
  uni.showToast({
    title,
    icon: 'none',
    duration
  })
}
// 失败提示
toast.err = function(title, duration = 3000) {
  uni.showToast({
    title,
    icon: 'error',
    duration
  })
}
// 成功提示
toast.success = function(title, duration = 3000) {
  uni.showToast({
    title,
    icon: 'success',
    duration
  })
}
// loding加载
toast.loding = function(title, duration = 3000) {
  uni.showToast({
    title,
    icon: 'loading',
    duration
  })
}
export default toast
