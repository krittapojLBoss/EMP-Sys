<template>
  <div class="EmployeesPage">
    <div class="TableLayOut">
      <TableList></TableList>
    </div>
  </div>
</template>

<script>
import TableList from "../components/TavleList.vue";

export default {
  components: {
    TableList,
  },
};
</script>

<style scoped>
.EmployeesPage {
  max-width: 1400px;
  width: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.TableLayOut {
  background-color: white;
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.4);
}
</style>
