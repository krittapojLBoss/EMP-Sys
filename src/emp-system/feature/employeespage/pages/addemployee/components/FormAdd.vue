<template>
  <div class="FormAdd">
    <div class="Layout">
      <b-form>
        <b-form-group
          id="input-group-1"
          label="ชื่อจริง:"
          label-for="input-1"
          @reset="onReset"
        >
          <b-form-input
            id="input-1"
            type="text"
            placeholder="ใส่ชื่อของท่าน"
            v-model="Forms.FirstName"
            required
          ></b-form-input>
        </b-form-group>
        <b-form-group id="input-group-2" label="นามสกุล:" label-for="input-2">
          <b-form-input
            id="input-2"
            type="text"
            placeholder="ใส่นามสกุลของท่าน"
            v-model="Forms.LastName"
            required
          ></b-form-input>
        </b-form-group>
        <b-form-group id="input-group-3" label="เบอร์โทร:" label-for="input-3">
          <b-form-input
            id="input-3"
            type="text"
            placeholder="ใส่เบอร์โทรของท่าน"
            v-model="Forms.Tell"
            required
          ></b-form-input>
        </b-form-group>
        <b-form-group id="input-group-4" label="Email:" label-for="input-4">
          <b-form-input
            id="input-4"
            type="Email"
            placeholder="ใส่ Email ของท่าน"
            v-model="Forms.Email"
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
            v-model="Forms.job"
            required
          ></b-form-select>
        </b-form-group>
        <div class="BttGroup">
          <b-button
            class="mx-4 my-2"
            type="button"
            variant="primary"
            @click="onSubmit"
            >Submit</b-button
          >
          <b-button class="mx-4 my-2" type="reset" variant="danger"
            >Reset</b-button
          >
        </div>
      </b-form>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  data() {
    return {
      Forms: {
        FirstName: "",
        LastName: "",
        Tell: "",
        Email: "",
        job: null,
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
  methods: {
    ...mapActions({
      AddEmp: "AddEmp",
    }),
    onSubmit() {
      this.AddEmp(this.Forms).then(() => {
        this.$router.push({
          name: "employeespage",
        });
      });
    },
    onReset(event) {
      event.preventDefault();
      this.Forms.FirstName = "";
      this.Forms.LastName = "";
      this.Forms.Tell = "";
      this.Forms.Email = null;
      this.Forms.job = "";
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
