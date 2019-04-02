import {
  GET_HOME_DATA,
} from "./mutation-type"

export default {
  [GET_HOME_DATA](state,{homeData}){
    state.homeData=homeData
  }
}
