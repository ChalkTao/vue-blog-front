<template>
  <div style="min-height: 500px;">
    <div class="wrapper-content">
      <h1>Hello, World!</h1>
      <h2 v-for="item in userList"><a v-link="{name:'user', params: {user: item.nickname}}">{{item.nickname}}</a></h2>
    </div>
  </div>
</template>

<script>
export default {
  components: {
  },
  data () {
    return {
      userList: []
    }
  },
  created () {
    this.$http.get('user/list').then(response => {
      this.userList = response.data.data
    }, response => {
      var msg = (response.data && response.data.error_msg) || '获取失败'
      this.$Message.error(msg)
    })
  }
}
</script>

<style>
</style>
