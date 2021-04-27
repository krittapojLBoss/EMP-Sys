import { RouteConfig } from "vue-router";

import AddEmployeePage from "./pages/AddEmployeePage.vue";

const AddEmpRouter: (prefix?: string) => Array<RouteConfig> = (
  prefix = "add"
) => [
  {
    name: "AddEmployeePage",
    path: prefix,
    component: AddEmployeePage,
  },
];

export default AddEmpRouter;
