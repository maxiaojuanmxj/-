import {
  GET_HOME_DATA
} from './mutation-type'
import {reqMockHome} from '../../../api'
export default {
  async getHomeData({commit}){
    const result=await reqMockHome();
    console.log(result);
    if(result.code===0){
      const homeData=result.data
      commit(GET_HOME_DATA, {homeData})
    }
  }
}
