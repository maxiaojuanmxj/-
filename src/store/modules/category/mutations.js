import {GET_CATEGORY_DATA} from './mutations-type'
export default {
  [GET_CATEGORY_DATA](state,{categoryDate}){
    state.categoryDate=categoryDate
  }
}
