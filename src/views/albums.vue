<template>
  <div class="container">
    <div class="row">
      <div class="col-md-12 text-start mt-4">
        <span class="title-d">Albums</span>
      </div>
      <div class="col-md-6 d-flex pe-4 pb-2">
        <span class="subtitle me-2">Name: </span>
        <span class="subtitle-b">{{ user?.name }}</span>
      </div>
    </div>
    <div class="row mt-5">
      <div class="col-3" v-for="item in albums" :key="item.id">
        <a href="javascript:void(0);" class="lnk-rel">
          <div class="card" style="width: 18rem">
            <div class="d-flex box-img align-items-center">
              <div class="col-12">
                <i class="fas fa-image fa-3x"></i>
              </div>
            </div>
            <div class="card-body">
              <p class="card-text">{{ item.title }}</p>
            </div>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>
    
  <script>
export default {
  name: "AlbumsView",
  data() {
    return {
        user:{},
        albums:[],

    };
  },
  methods: {
    getUserById(userId) {
      fetch("https://jsonplaceholder.typicode.com/users/"+userId)
        .then((res) => res.json())
        .then((response) => {
          if (response) {
            this.user = response;

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


    getAlbumsByUser(userId){
      fetch("https://jsonplaceholder.typicode.com/albums?userId="+userId)
        .then((res) => res.json())
        .then((response) => {
          if (response.length > 0) {
            this.albums = response;
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
    this.getUserById(this.$router.currentRoute.params.idUser);
    this.getAlbumsByUser(this.$router.currentRoute.params.idUser);
    
  },
};
</script>
    
<style>
.box-img {
  background-color: gray;
  height: 10em;
}

.lnk-rel{
  text-decoration: none;
}
</style>
    