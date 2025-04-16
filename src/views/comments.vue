<template>
  <div class="container">
    <div class="row">
      <div class="col-md-12 text-start mt-4">
        <span class="title-d">Comments</span>
      </div>
      <div class="col-md-6 d-flex pe-4 pb-2">
        <span class="subtitle me-2">Title post: </span>
        <span class="subtitle-b"
          >sunt aut facere repellat provident occaecati excepturi optio
          reprehenderit</span>
      </div>
    </div>
    <div class="row">
      <div class="col-12 mt-3">
        <!-- repeat here -->
        <div class="card mb-3">
          <div class="card-body px-4">
            <div class="d-flex align-items-center mb-2">
                <div class="img">
                    <i class="fas fa-user-circle fa-2x"></i>
                </div>
                <div class="col-11 text-start">
                  <span class="user-e">Eliseo@gardner.biz</span> 
                </div>
            </div>
            <div class="row">
                 <div class="col-12 text-start pb-0">
                    <span class="txt-name-t">id labore ex et quam laborum</span>
                 </div>
            </div>
            <div class="row">
                 <div class="col-12 text-start pt-1">
                    <span class="txt-body">laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium</span>
                 </div>
            </div>
          </div>
        </div>
        <div class="card">
          <div class="card-body px-4">
            <div class="d-flex align-items-center mb-2">
                <div class="img">
                    <i class="fas fa-user-circle fa-2x"></i>
                </div>
                <div class="col-11 text-start">
                  <span class="user-e">Eliseo@gardner.biz</span> 
                </div>
            </div>
            <div class="row">
                 <div class="col-12 text-start pb-0">
                    <span class="txt-name-t">id labore ex et quam laborum</span>
                 </div>
            </div>
            <div class="row">
                 <div class="col-12 text-start pt-1">
                    <span class="txt-body">laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium</span>
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
    return {};
  },
  methods: {},
  mounted() {},
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