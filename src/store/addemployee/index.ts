// export default new Vuex.Store({
//   state: {
//     status:true,
//   },
//   mutations: {
//     setValue(state,value){
//         state.status = !value;
//     }
//   },
//   getters: {
//     getStatus(state){
//       return state.status
//     }
//   },
//   actions: {
//       changeStatus(context){
//           context.commit("setValue",this.getters.getStatus)
//       }
//   },
//   modules: {},
// });

import state from "./state";
import mutations from "./mutations";
import actions from "./actions";
import getters from "./getters";
export default {
  state,
  mutations,
  getters,
  actions,
};
