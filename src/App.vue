<template>
  <div id="app">
    <div class="row bg-blue justify-content-center">
      <div class="col-md-6 text-start mt-2 pb-2 ">
          <a class="lnk-rel" href="javascript:void(0)" @click="redirectDashboard()">
            <img class="img-logo ps-3" src="@/assets/linkTic_logo.jpeg" alt="logo">
          <span class="title ms-3 ">Prueba Técnica LinkTic</span>
          </a>
      </div>
      <div class="col-md-6 d-flex align-items-center justify-content-end pe-4 mt-2 pb-2">
          <span class="n-title me-2">Presentado por:</span>
          <span class="n-title-b">Leonardo Herrera M.</span>
      </div>
    </div>
    <div class="row">
      <RouterView />
    </div>
  </div>
</template>
<script>
export default {
  name: 'App',
  components: {
  },

  methods:{
    redirectDashboard(){
      const path = `/`;
      if (this.$route.path !== path) this.$router.push(path)
    }
  }

}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.title{
  color: white;
}

.img-logo{
  width: 60px;
}

.n-title-b{
  font-size: 14px;
  color: white;
  font-weight: 400;
}

.n-title{
  font-size: 14px;
  color: white;
  font-weight: 600;
}

.bg-blue{
  background-color: #009efc;
}

.lnk-rel{
  text-decoration: none;
}



</style>
