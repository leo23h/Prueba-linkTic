
<template>
  <div class="container">
    <div class="row">
      <div class="col-md-12 text-start mt-4">
        <span class="title-d">Post</span>
      </div>
      <div class="col-md-6 d-flex pe-4 pb-2">
        <span class="subtitle me-2">By: </span>
        <span class="subtitle-b">{{ user.name }}</span>
      </div>
    </div>
    <!-- post list -->
    <div class="row mt-5">
      <div class="col-3" v-for="item in posts" :key="item.id">
          <div class="card" style="height: 344px;">
            <div class="card-body">
              <h5 class="card-title">{{ item.title }}</h5>
              <p class="card-text">
                {{ item.body }}
              </p>
              <div class="d-flex justify-content-end">
                <a href="javascript:void(0);" class="btn btn-more" @click="showMore(item)">Show more</a>
              </div>
            </div>
          </div>
      </div>
    
    </div>
  </div>
</template>
    
  <script>
export default {
  name: "PostView",
  data() {
    return {
        user:{},
        posts:[]
    };
  },
  methods: {
   showMore(item){
    console.log("key", item)
    this.$router.push({ name: 'comments', params: {idPost: item.id} });
   },

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

   getPostByUser(userId) {
      fetch("https://jsonplaceholder.typicode.com/posts?userId="+userId)
        .then((res) => res.json())
        .then((response) => {
          if (response.length > 0) {
            this.posts = response;

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

  },
  mounted() {
    this.getUserById(this.$router.currentRoute.params.idUser);
    this.getPostByUser(this.$router.currentRoute.params.idUser);
  },
};
</script>
    
<style>
.subtitle {
  font-size: 16px;
  font-weight: 600;
  color: rgba(0, 0, 0, 0.722);
}

.subtitle-b {
  font-size: 16px;
  font-weight: 400;
  color: rgba(0, 0, 0, 0.722);
}

.lk-card{
    text-decoration:none
}

.btn-more{
    background-color: #009efc;
    color: white;
}

.btn-more:hover{
    background-color: #0e8eda;
    color: white;
}




</style>
    