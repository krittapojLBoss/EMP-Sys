<template>
  <b-container fluid>
    <b-table
      :items="Emps"
      :fields="fields"
      stacked="md"
      show-empty
      small
      @filtered="onFiltered"
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

    <!-- Info modal -->
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
      pageOptions: [5, 10, 15, { value: 100, text: "Show a lot" }],
      filter: null,
      filterOn: [],
      infoModal: {
        id: "info-modal",
        title: "",
        content: "",
      },
    };
  },
  computed: {
    Emps() {
      return this.GetEmps;
    },
  },
  mounted() {
    this.totalRows = this.Emps.length;
  },
  created() {
    this.GetEmp();
  },

  methods: {
    ...mapActions({
      GetEmp: "GetEmps",
      GetId: "GetId",
    }),
    ...mapGetters({
      GetEmps: "GetEmps",
    }),
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

<style></style>
