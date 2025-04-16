<template>
  <div class="container">
    <div class="row">
      <div class="col-md-12 text-start mt-4">
        <span class="title-d">Comments</span>
      </div>
      <div class="col-md-6 d-flex pe-4 pb-2">
        <span class="subtitle me-2">Title post: </span>
        <span class="subtitle-b"
          >{{ post.title }}</span>
      </div>
    </div>
    <div class="row">
      <div class="col-12 mt-3">
        <!-- repeat here -->
        <div class="card mb-3" v-for="item in comments" :key="item.id">
          <div class="card-body px-4">
            <div class="d-flex align-items-center mb-2">
                <div class="img">
                    <i class="fas fa-user-circle fa-2x"></i>
                </div>
                <div class="col-11 text-start">
                  <span class="user-e">{{ item.email }}</span> 
                </div>
            </div>
            <div class="row">
                 <div class="col-12 text-start pb-0">
                    <span class="txt-name-t">{{ item.name }}</span>
                 </div>
            </div>
            <div class="row">
                 <div class="col-12 text-start pt-1">
                    <span class="txt-body">{{ item.body }}</span>
                 </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
    
  <script>
export default {
  name: "CommentsView",
  data() {
    return {
        post:{},
        comments:[]
    };
  },
  methods: {
    getPostById(postId) {
      fetch("https://jsonplaceholder.typicode.com/posts/"+postId)
        .then((res) => res.json())
        .then((response) => {
          if (response) {
            this.post = response;
          } else {
            console.log("Respuesta de red OK pero respuesta HTTP no OK");
          }
        })
        .catch(function (error) {
          console.log(
            "Hubo un problema para obtener post" + error.message
          );
        });
    },

    getCommentsByPostId(postId) {
      fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
        .then((res) => res.json())
        .then((response) => {
          if (response) {
            this.comments = response;
          } else {
            console.log("Respuesta de red OK pero respuesta HTTP no OK");
          }
        })
        .catch(function (error) {
          console.log(
            "Hubo un problema para obtener post" + error.message
          );
        });
    },
    
  },
  mounted() {
    this.getPostById(this.$router.currentRoute.params.idPost);
    this.getCommentsByPostId(this.$router.currentRoute.params.idPost);
  },
};
</script>
    
<style>

.user-e{
    font-size: 14px;
    font-weight: 600;
    color: rgba(0, 0, 0, 0.722);
}

.txt-body{
    font-size: 14px;
    font-weight: 400;
    color: rgba(0, 0, 0, 0.722);
}

.txt-name-t{
    font-size: 15px;
    font-weight: 600;
    color: rgba(0, 0, 0, 0.722);
}

</style>