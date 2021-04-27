import { RouteConfig } from "vue-router";

import EditEmployeePage from "./pages/EditEmployeePage.vue";

const EditRouter: (prefix?: string) => Array<RouteConfig> = (
  prefix = "edit"
) => [
  {
    name: "EditEmployeePage",
    path: prefix,
    component: EditEmployeePage,
    props: true,
  },
];

export default EditRouter;
