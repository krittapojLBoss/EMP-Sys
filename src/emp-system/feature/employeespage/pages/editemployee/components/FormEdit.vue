<template>
  <div class="FormEdit">
    <div class="Layout">
      <b-form>
        <b-form-group id="input-group-1" label="ชื่อจริง:" label-for="input-1">
          <b-form-input
            id="input-1"
            type="text"
            v-model="emp.Firstname"
            required
          ></b-form-input>
        </b-form-group>
        <b-form-group id="input-group-2" label="นามสกุล:" label-for="input-2">
          <b-form-input
            id="input-2"
            type="text"
            v-model="emp.Lastname"
            required
          ></b-form-input>
        </b-form-group>
        <b-form-group id="input-group-3" label="เบอร์โทร:" label-for="input-3">
          <b-form-input
            id="input-3"
            type="text"
            v-model="emp.Tell"
            required
          ></b-form-input>
        </b-form-group>
        <b-form-group id="input-group-4" label="Email:" label-for="input-4">
          <b-form-input
            id="input-4"
            type="Email"
            placeholder="ใส่ Email ของท่าน"
            v-model="emp.Email"
            required
          ></b-form-input>
        </b-form-group>
        <b-form-group
          id="input-group-5"
          label="ตำเเหน่งงาน:"
          label-for="input-5"
        >
          <b-form-select
            id="input-5"
            :options="Jobs"
            v-model="emp.Job"
            required
          ></b-form-select>
        </b-form-group>
        <div class="BttGroup">
          <b-button
            class="mx-4 my-2"
            type="button"
            variant="primary"
            @click="Update"
            >บันทึกข้อมูล</b-button
          >
          <b-button
            class="mx-4 my-2"
            type="button"
            variant="danger"
            @click="Back"
            >Back</b-button
          >
        </div>
      </b-form>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import Swal from "sweetalert2";
export default {
  props: {
    emp: Object,
  },
  data() {
    return {
      Jobs: [
        { text: "Select Job", value: null },
        "manager",
        "sales",
        "developer",
        "designer",
      ],
    };
  },
  methods: {
    Update() {
      Swal.fire({
        title: "Are you sure?",
        text: `ท่านเเน่ใจว่าต้องการบันทึกข้อมูลหรือไม่`,
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes",
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire(
            "ทำรายการสำเร็จ",
            `ระบบได้บันทึกข้อมูลเรียบร้อยเเล้ว`,
            "success"
          )
            .then(() => {
              this.Getdata({
                _id: this.emp._id,
                Firstname: this.emp.Firstname,
                Lastname: this.emp.Lastname,
                Email: this.emp.Email,
                Job: this.emp.Job,
                Tell: this.emp.Tell,
              });
            })
            .then(() => {
              this.$router.push({
                name: "employeespage",
              });
            });
        }
      });
    },
    ...mapActions({
      Getdata: "Getdata",
    }),
    Back() {
      this.$router.push({
        name: "employeespage",
      });
    },
  },
};
</script>

<style scoped>
.BttGroup {
  display: flex;
  flex-direction: column;
}
</style>
