import axios from "axios";
export default {
  Getdata({ commit }: any, obj: any) {
    axios
      .put(`http://localhost:3000/api/employee/update/${obj._id}`, {
        Firstname: obj.Firstname,
        Lastname: obj.Lastname,
        Tell: obj.Tell,
        Email: obj.Email,
        Job: obj.Job,
      })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
    console.log(obj);
  },
};
