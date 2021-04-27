import { RouteConfig } from "vue-router";
import EmployeesPage from "./pages/EmplyeesPage.vue";
import AppLayout from "./components/AppLayout.vue";
import AddEmpRouter from "./pages/addemployee/AddEmpRouter";
import EditEmpRouter from "./pages/editemployee/EditEmpRouter";
const EmployeesRouter: (prefix?: string) => Array<RouteConfig> = (
  prefix = "employees"
) => [
  {
    name: "employeespage",
    path: prefix,
    component: EmployeesPage,
  },
  {
    name: "addemployeepage",
    path: prefix,
    component: AppLayout,
    children: [...AddEmpRouter()],
  },
  {
    name: "editemployeepage",
    path: prefix,
    component: AppLayout,
    children: [...EditEmpRouter()],
  },
];
export default EmployeesRouter;
