import axios from "axios";
export default {
  GetEmps({ commit }: any) {
    axios.get("http://localhost:3000/api/employees").then((res) => {
      console.log(res.data);
      commit("SetEmps", res.data);
    });
  },
};
