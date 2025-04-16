
<template>
  <div class="container">
    <div class="row">
      <div class="col-md-12 text-start mt-4">
        <span class="title-d">Post</span>
      </div>
      <div class="col-md-6 d-flex pe-4 pb-2">
        <span class="subtitle me-2">By: </span>
        <span class="subtitle-b">Leonardo Herrera M.</span>
      </div>
    </div>
    <!-- post list -->
    <div class="row mt-5">
      <div class="col-3">
        <a class="lk-card" href="javascript:void(0)">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">magnam facilis autem</h5>
              <p class="card-text">
                dolore placeat quibusdam ea quo vitae\nmagni quis enim qui quis
                quo nemo aut saepe\nquidem repellat excepturi ut quia\nsunt ut
                sequi eos ea sed quas
              </p>
              <div class="d-flex justify-content-end">
                <a href="#" class="btn btn-more" @click="showMore(1)">Show more</a>
              </div>
            </div>
          </div>
        </a>
      </div>
      <div class="col-3">
        <a class="lk-card" href="javascript:void(0)">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">magnam facilis autem</h5>
              <p class="card-text">
                dolore placeat quibusdam ea quo vitae\nmagni quis enim qui quis
                quo nemo aut saepe\nquidem repellat excepturi ut quia\nsunt ut
                sequi eos ea sed quas
              </p>
              <div class="d-flex justify-content-end">
                <a href="#" class="btn btn-more" >Show more</a>
              </div>
            </div>
          </div>
        </a>
      </div>
      <div class="col-3">
        <a class="lk-card" href="javascript:void(0)">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">magnam facilis autem</h5>
              <p class="card-text">
                dolore placeat quibusdam ea quo vitae\nmagni quis enim qui quis
                quo nemo aut saepe\nquidem repellat excepturi ut quia\nsunt ut
                sequi eos ea sed quas
              </p>
              <div class="d-flex justify-content-end">
                <a href="#" class="btn btn-more" >Show more</a>
              </div>
            </div>
          </div>
        </a>
      </div>
      <div class="col-3">
        <a class="lk-card" href="javascript:void(0)">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">magnam facilis autem</h5>
              <p class="card-text">
                dolore placeat quibusdam ea quo vitae\nmagni quis enim qui quis
                quo nemo aut saepe\nquidem repellat excepturi ut quia\nsunt ut
                sequi eos ea sed quas
              </p>
              <div class="d-flex justify-content-end">
                <a href="#" class="btn btn-more" >Show more</a>
              </div>
            </div>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>
    
  <script>
export default {
  name: "PostView",
  data() {
    return {};
  },
  methods: {
   showMore(key){
    console.log("key", key)
    this.$router.push({ name: 'comments', params: {id: key} })
   }

  },
  mounted() {},
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
    