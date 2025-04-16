
<template>
  <div class="container">
    <div class="row">
      <div class="col-md-12 text-start mt-4">
        <span class="title-d">Dashboard</span>
      </div>
    </div>
    <div class="row">
      <div class="col-4 mt-5">
        <div class="card">
          <div class="card-body">
            <span class="card-title">Users</span>
            <div class="col-12">
              <span class="cont-card"> 32 </span>
            </div>
          </div>
        </div>
      </div>
      <div class="col-4 mt-5">
        <div class="card">
          <div class="card-body">
            <span class="card-title">Post</span>
            <div class="col-12">
              <span class="cont-card"> 32 </span>
            </div>
          </div>
        </div>
      </div>
      <div class="col-4 mt-5">
        <div class="card">
          <div class="card-body">
            <span class="card-title">Albums</span>
            <div class="col-12">
              <span class="cont-card"> 32 </span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-12 text-start mt-5 pt-3 divider">
        <span class="title-card-t">Usuarios</span>
      </div>
      <div class="col-12 mt-5">
        <div class="card">
          <div class="card-body">
            <v-data-table
              :headers="headers"
              :items="desserts"
              :items-per-page="5"
              class="elevation-1"
            >
              <template v-slot:[`item.actions`]="{ item }">
               <a href="javascript(0)" @click="edit(item)" class="me-2"><i class="fas fa-pen"></i></a>
               <a href="javascript(0)" @click="edit(item)"><i class="fas fa-trash-alt"></i></a>
              </template>
            </v-data-table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
  
<script>
export default {
  name: "DashboardMain",
  data() {
    return {
      headers: [
        {
          text: "Id",
          align: "start",
          sortable: false,
          value: "name",
        },
        { text: "Name", value: "calories" },
        { text: "Username", value: "fat" },
        { text: "Email", value: "carbs" },
        { text: "Company", value: "protein" },
        { text: "Actions", value: "actions", sortable: false },
      ],
      desserts: [
        {
          name: "Frozen Yogurt",
          calories: 159,
          fat: 6.0,
          carbs: 24,
          protein: 4.0,
        },
        {
          name: "Ice cream sandwich",
          calories: 237,
          fat: 9.0,
          carbs: 37,
          protein: 4.3,
          iron: 1,
        },
        {
          name: "Eclair",
          calories: 262,
          fat: 16.0,
          carbs: 23,
          protein: 6.0,
          iron: 7,
        },
        {
          name: "Cupcake",
          calories: 305,
          fat: 3.7,
          carbs: 67,
          protein: 4.3,
          iron: 8,
        },
        {
          name: "Gingerbread",
          calories: 356,
          fat: 16.0,
          carbs: 49,
          protein: 3.9,
          iron: 16,
        },
        {
          name: "Jelly bean",
          calories: 375,
          fat: 0.0,
          carbs: 94,
          protein: 0.0,
          iron: 0,
        },
        {
          name: "Lollipop",
          calories: 392,
          fat: 0.2,
          carbs: 98,
          protein: 0,
          iron: 2,
        },
        {
          name: "Honeycomb",
          calories: 408,
          fat: 3.2,
          carbs: 87,
          protein: 6.5,
          iron: 45,
        },
        {
          name: "Donut",
          calories: 452,
          fat: 25.0,
          carbs: 51,
          protein: 4.9,
          iron: 22,
        },
        {
          name: "KitKat",
          calories: 518,
          fat: 26.0,
          carbs: 65,
          protein: 7,
          iron: 6,
        },
      ],
    };
  },
  methods: {},
  mounted() {},
};
</script>
  
  <style>
.title-d {
  color: rgba(0, 0, 0, 0.722);
  font-weight: 700;
  font-size: 25px;
}

.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

.card-title {
  font-size: 32px;
}

.cont-card {
  font-size: 32px;
  font-weight: 600;
  color: #06a519;
}

.title-card-t {
  font-size: 25px;
  font-weight: 500;
  color: rgba(0, 0, 0, 0.722);
}

.divider {
  border-bottom: 1px solid #bbb;
}
</style>
  