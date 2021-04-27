<template>
  <div class="EmployeesPage">
    <div v-if="LoadingStatus" class="loading-div">
      <Spinner />
    </div>
    <div class="TableLayOut">
      <TableList></TableList>
    </div>
  </div>
</template>

<script>
import TableList from "../components/TavleList.vue";
import Spinner from "vue-simple-spinner";
export default {
  components: {
    TableList,
    Spinner,
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
@media only screen and (max-width: 787px) {
  .EmployeesPage {
    max-width: 1400px;
    width: 100%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    margin-top: 330px;
  }
}
@media only screen and (max-width: 444px) {
  .EmployeesPage {
    max-width: 1400px;
    width: 100%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    margin-top: 370px;
  }
}
</style>
