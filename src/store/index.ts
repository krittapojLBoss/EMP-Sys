import Vue from "vue";
import Vuex from "vuex";
import Employees from "./employees/index";
import DeleteEmp from "./deleteemployee/index";
import AddEmp from "./addemployee/index";
import EditEmp from "./editemployee/index";
Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    Employees,
    DeleteEmp,
    AddEmp,
    EditEmp,
  },
});
