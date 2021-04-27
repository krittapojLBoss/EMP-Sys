import axios from "axios";
export default {
  GetId({ commit }: any, id: any) {
    axios.delete(`http://localhost:3000/api/employee/${id}`).then((res) => {
      console.log(res.data.message);
    });
  },
};
