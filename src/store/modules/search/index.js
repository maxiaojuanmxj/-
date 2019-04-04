
import {GET_SEARCH_DATA} from './mutations-type'
import {reqsearch} from '../../../api/index'
const state={
  search_data:{}
}
const actions={
  async getsearch({commit}){
    const reslut=await reqsearch()
    if(reslut.code){
      const search_data=reslut.data
      console.log(search_data)
      commit(GET_SEARCH_DATA,search_data)
    }
  }
}

const mutations={
  [GET_SEARCH_DATA](state,search_data){
    state.search_data=search_data
  }
}
const getters={

}
export default{
  state,
  actions,
  mutations,
  getters,
}
