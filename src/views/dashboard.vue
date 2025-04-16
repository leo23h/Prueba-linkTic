
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
              <span class="cont-card"> {{ userConts }}</span>
            </div>
          </div>
        </div>
      </div>
      <div class="col-4 mt-5">
        <div class="card">
          <div class="card-body">
            <span class="card-title">Post</span>
            <div class="col-12">
              <span class="cont-card"> {{ postConts }} </span>
            </div>
          </div>
        </div>
      </div>
      <div class="col-4 mt-5">
        <div class="card">
          <div class="card-body">
            <span class="card-title">Albums</span>
            <div class="col-12">
              <span class="cont-card"> {{ albumsCont }} </span>
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
              :items="users"
              :items-per-page="5"
              class="elevation-1"
            >
              <template v-slot:[`item.actions`]="{ item }">
                <a href="javascript(0)" @click="edit(item)" class="me-2"
                  ><i class="fas fa-pen"></i
                ></a>
                <a href="javascript(0)" @click="edit(item)"
                  ><i class="fas fa-trash-alt"></i
                ></a>
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
          value: "id",
        },
        { text: "Name", value: "name" },
        { text: "Username", value: "username" },
        { text: "Email", value: "email" },
        { text: "Company", value: "company.name" },
        { text: "Actions", value: "actions", sortable: false },
      ],
      users: [],
      userConts: 0,
      postConts: 0,
      albumsCont: 0,
    };
  },
  methods: {
     getUsers() {
      fetch("https://jsonplaceholder.typicode.com/users")
        .then((res) => res.json())
        .then((response) => {
          if (response.length > 0) {
            this.userConts = response.length;
            this.users = response;
            console.log("users", this.users)
          } else {
            console.log("Respuesta de red OK pero respuesta HTTP no OK");
          }
        })
        .catch(function (error) {
          console.log(
            "Hubo un problema para obtener usuarios" + error.message
          );
        });
    },

    getPosts() {
      fetch("https://jsonplaceholder.typicode.com/posts")
        .then((res) => res.json())
        .then((response) => {
          if (response.length > 0) {
            this.postConts = response.length;
          } else {
            console.log("Respuesta de red OK pero respuesta HTTP no OK");
          }
        })
        .catch(function (error) {
          console.log(
            "Hubo un problema para obtener posts" + error.message
          );
        });
    },

    getAlbums() {
      fetch("https://jsonplaceholder.typicode.com/albums")
        .then((res) => res.json())
        .then((response) => {
          if (response.length > 0) {
            this.albumsCont = response.length;
          } else {
            console.log("Respuesta de red OK pero respuesta HTTP no OK");
          }
        })
        .catch(function (error) {
          console.log(
            "Hubo un problema para obtener albums" + error.message
          );
        });
    },
  },
  mounted() {
    this.getUsers();
    this.getPosts();
    this.getAlbums();
  },
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
  