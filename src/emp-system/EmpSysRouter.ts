import { RouteConfig } from "vue-router";
import AppLayout from "../components/AppLayout.vue";
import EmployeesRouter from "./feature/employeespage/EmployeesRouter";
const EmpSysRouter: (prefix?: string) => Array<RouteConfig> = (
  prefix = "emp-system"
) => [
  {
    path: prefix,
    redirect: "emp-system/employees",
    component: AppLayout,
    children: [...EmployeesRouter()],
  },
];
export default EmpSysRouter;
