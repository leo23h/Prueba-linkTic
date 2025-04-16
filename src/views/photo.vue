<template>
  <div class="container">
    <div class="row">
      <div class="col-md-12 text-start mt-4">
        <span class="title-d">Photos</span>
      </div>
      <div class="col-md-6 d-flex pe-4 pb-2">
        <span class="subtitle me-2">Album: </span>
        <span class="subtitle-b">{{ album.title }}</span>
      </div>
    </div>
    <div class="row mt-5">
      <div class="col-3 mb-3" v-for="item in photos" :key="item.id">
        <a
          class="lnk-rel"
          :href="item.url"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div class="card" style="width: 18rem">
            <div class="d-flex box-img align-items-center">
              <div class="col-12">
                <i class="fas fa-image fa-3x"></i>
              </div>
            </div>
            <div class="card-body" style="height: 90px">
              <p class="card-text">
                {{ item.title }}
              </p>
            </div>
          </div>
        </a>
      </div>
     
    </div>
  </div>
</template>
      
    <script>
export default {
  name: "PhotoView",
  data() {
    return {
        album:{},
        photos:[]
    };
  },
  methods: {
    getAlbumById(AlbumId){
      fetch("https://jsonplaceholder.typicode.com/albums/"+AlbumId)
        .then((res) => res.json())
        .then((response) => {
          if (response) {
            this.album = response;
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

    getPhotoByAlbumId(AlbumId){
      fetch("https://jsonplaceholder.typicode.com/photos?albumId="+AlbumId)
        .then((res) => res.json())
        .then((response) => {
          if (response) {
            this.photos = response;
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
    this.getAlbumById(this.$router.currentRoute.params.idAlbum);
    this.getPhotoByAlbumId(this.$router.currentRoute.params.idAlbum);
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
      