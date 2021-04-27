<template>
  <div class="AddEmployeePage">
    <FormAdd></FormAdd>
  </div>
</template>

<script>
import FormAdd from "../components/FormAdd.vue";
export default {
  components: {
    FormAdd,
  },
};
</script>

<style scoped>
.AddEmployeePage {
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
