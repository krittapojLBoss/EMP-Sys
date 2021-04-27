import axios from "axios";
export default {
  AddEmp({ commit }: any, obj: any) {
    axios
      .post("http://localhost:3000/api/employee/add", {
        Firstname: obj.FirstName,
        Lastname: obj.LastName,
        Tell: obj.Tell,
        Email: obj.Email,
        Job: obj.job,
      })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  },
};
