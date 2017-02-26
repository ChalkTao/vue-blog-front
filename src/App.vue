<template>
  <div>
    <div class="wrapper">
      <nvheader></nvheader>
      <div class="wrapper-container">
        <router-view></router-view>
      </div>
      <nvfooter></nvfooter>
      <Back-top></Back-top>
    </div>
  </div>

</template>

<script>
  import nvheader from './components/header.vue'
  import nvfooter from './components/footer.vue'
  export default {
    name: 'App',
    data: function () {
      return {
      }
    },
    components: {
      nvheader, nvfooter
    }
  }
</script>

<style>
  .wrapper {
    background: #eee;
    padding: 1px;
  }
  .wrapper-container {
    background: #fff;
    width: 90%;
    margin: 30px auto 20px;
    border-radius: 6px;
    box-shadow: 0 1px 1px 0 rgba(0,0,0,.1);
  }
</style>
