<template>
  <div class="UbdateEmpPage">
    <FormEdit :emp="Forms"></FormEdit>
  </div>
</template>

<script>
import FormEdit from "../components/FormEdit.vue";
export default {
  props: ["_id", "Firstname", "Lastname", "Email", "Job", "Tell"],
  components: {
    FormEdit,
  },

  data() {
    return {
      Forms: {
        _id: this._id,
        Firstname: this.Firstname,
        Lastname: this.Lastname,
        Tell: this.Tell,
        Email: this.Email,
        Job: this.Job,
      },
      Jobs: [
        { text: "Select Job", value: null },
        "manager",
        "sales",
        "developer",
        "designer",
      ],
    };
  },
};
</script>

<style scoped>
.UbdateEmpPage {
  max-width: 400px;
  width: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  padding: 20px;
  border-radius: 15px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.4);
}
</style>
