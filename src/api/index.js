import ajax from './ajax'
const prefix='./api'
  // 首页数据
export const reqMockHome=()=>ajax('/home')
export const reqMockCategory=()=>ajax('/category')
