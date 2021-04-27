import axios from "axios";
export default {
  async GetEmps({ commit }: any) {
    await axios.get("http://localhost:3000/api/employees").then((res) => {
      console.log(res.data);
      commit("SetEmps", res.data);
    });
  },
};
