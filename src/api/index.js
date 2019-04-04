import ajax from './ajax'
// const prefix='./api'
  // 首页数据
export const reqMockHome=()=>ajax('/home')
export const reqMockCategory=()=>ajax('/category')
export const reqThingsHeader=()=>ajax('/api/topic/v1/find/getTabs.json')
export const reqThingsManual=()=>ajax('/api/topic/v1/find/recManual.json')
export const reqsearch=()=>ajax('/api/xhr/search/init.json')
