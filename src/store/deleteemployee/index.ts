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

import actions from "./actions";

export default {
  actions,
};
