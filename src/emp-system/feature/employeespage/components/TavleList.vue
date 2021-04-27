<template>
  <b-container fluid>
    <div class="InputSearch py-3">
      <b-form-group
        label="Search"
        label-for="filter-input"
        label-cols-sm="3"
        label-align-sm="right"
        label-size="sm"
        class="mb-0"
      >
        <b-input-group size="sm">
          <b-form-input
            id="filter-input"
            v-model="filter"
            type="search"
            placeholder="Type to Search"
          ></b-form-input>

          <b-input-group-append>
            <b-button :disabled="!filter" @click="filter = ''">Clear</b-button>
          </b-input-group-append>
        </b-input-group>
      </b-form-group>
    </div>

    <b-table
      :items="GetEmps"
      :fields="fields"
      :current-page="currentPage"
      :per-page="perPage"
      stacked="md"
      :filter="filter"
      :filter-included-fields="filterOn"
      show-empty
      small
      responsive
    >
      <template #cell(actions)="row">
        <b-button
          size="sm"
          class="mr-1"
          @click="test(row.item._id, row.item.Firstname)"
          variant="danger"
        >
          Delete
        </b-button>
        <b-button size="sm" variant="primary" @click="SendEdit(row.item)">
          Edit
        </b-button>
      </template>
    </b-table>
    <div class="Pagination my-4">
      <b-pagination
        v-model="currentPage"
        :total-rows="length"
        :per-page="perPage"
        align="fill"
        size="sm"
      ></b-pagination>
    </div>
  </b-container>
</template>

<script>
import Swal from "sweetalert2";
import { mapActions, mapGetters } from "vuex";
export default {
  data() {
    return {
      fields: [
        {
          label: "ชื่อ",
          key: "Firstname",
          sortable: true,
          sortDirection: "desc",
        },
        {
          label: "นามสกุล",
          key: "Lastname",
          sortable: true,
        },
        {
          label: "เบอร์โทร",
          key: "Tell",
          sortable: true,
        },
        {
          label: "Email",
          key: "Email",
          sortable: true,
        },
        {
          label: "ตำแหน่ง",
          key: "Job",
          sortable: true,
        },
        {
          label: "Date",
          key: "Date_to_create",
          sortable: true,
        },
        { key: "actions", label: "Actions" },
      ],
      totalRows: 1,
      currentPage: 1,
      perPage: 5,
      filter: null,
      filterOn: [],
    };
  },
  computed: {
    ...mapGetters({
      GetEmps: "GetEmps",
    }),
    length() {
      return this.GetEmps.length;
    },
  },

  mounted() {
    this.GetEmp();
  },

  methods: {
    ...mapActions({
      GetEmp: "GetEmps",
      GetId: "GetId",
    }),
    onFiltered(filteredItems) {
      // Trigger pagination to update the number of buttons/pages due to filtering
      this.totalRows = filteredItems.length;
      this.currentPage = 1;
    },
    SendEdit(item) {
      this.$router.push({
        name: "EditEmployeePage",
        params: item,
      });
    },
    test(item, Firstname) {
      Swal.fire({
        title: "Are you sure?",
        text: `ท่านเเน่ใจว่าต้องการลบข้อมูลของ คุณ ${Firstname} หรือไม่`,
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes",
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire(
            "ทำรายการสำเร็จ",
            `ระบบได้ลบ ID: ${item} เรียบร้อยเเล้ว`,
            "success"
          ).then(() => {
            this.GetId(item);
            location.reload();
          });
        }
      });
    },
  },
};
</script>

<style scoped>
.InputSearch {
  margin: auto;
  max-width: 400px;
  width: 100%;
  height: 70px;
}
.Pagination {
  max-width: 400px;
  width: 100%;
  height: 100%;
}
</style>
