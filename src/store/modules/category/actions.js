import {GET_CATEGORY_DATA} from './mutations-type'
import {reqMockCategory} from '../../../api/index'
export default {
  async getMockCategory({commit}){
    const result=await reqMockCategory()
    if(result.code===0){
      const categoryDate=result.data
      commit(GET_CATEGORY_DATA,{categoryDate})
    }
  }
}
