<template>
  <div class="wrapper-header">
    <Menu mode="horizontal" :theme="theme1" active-key="1">
      <div class="wrapper-header-nav">
        <a class="wrapper-header-nav-logo v-link-active" href="/">
          <img src="http://cn.vuejs.org/images/logo.png">
        </a>
        <div class="wrapper-header-nav-search">
        </div>

        <div class="wrapper-header-nav-list">
          <Menu-item key="1">
            <a href="/">
            <Icon type="ios-paper"></Icon>
            首页
            </a>
          </Menu-item>
          <Menu-item key="2">
            <a href="https://github.com/ChalkTao/vue-blog-front">
              <Icon type="social-github"></Icon>
              Github
            </a>
          </Menu-item>
          <!--<Submenu key="3">-->
            <!--<template slot="title">-->
              <!--<Icon type="stats-bars"></Icon>-->
              <!--统计分析-->
            <!--</template>-->
            <!--<Menu-group title="使用">-->
              <!--<Menu-item key="3-1">新增和启动</Menu-item>-->
              <!--<Menu-item key="3-2">活跃分析</Menu-item>-->
              <!--<Menu-item key="3-3">时段分析</Menu-item>-->
            <!--</Menu-group>-->
            <!--<Menu-group title="留存">-->
              <!--<Menu-item key="3-4">用户留存</Menu-item>-->
              <!--<Menu-item key="3-5">流失用户</Menu-item>-->
            <!--</Menu-group>-->
          <!--</Submenu>-->
          <!--<Menu-item key="4">-->
            <!--<Icon type="settings"></Icon>-->
            <!--综合设置-->
          <!--</Menu-item>-->
        </div>
      </div>

    </Menu>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        cityList: [],
        theme1: 'light'
      }
    }
  }
</script>
<style>
  .wrapper-header .ivu-menu-horizontal {
    height: 80px;
    line-height: 80px;
  }
  .wrapper-header {
    box-shadow: 0 1px 1px rgba(0,0,0,.08);
  }
  .wrapper-header-nav {
    width: 90%;
    height: 80px;
    margin: 0 auto;
  }
  .wrapper-header-nav-logo {
    height: 50px;
    margin-top: 15px;
    float: left;
  }
  .wrapper-header-nav-logo img {
    height: 100%;
  }
  .wrapper-header-nav-search {
    float: left;
    margin-left: 100px;
  }
  .wrapper-header-nav-search .ivu-select {
    width: 230px;
    font-size: 14px;
  }
  .wrapper-header-nav-search .ivu-select-selection {
    border: 0;
  }
  .wrapper-header-nav-list {
    height: inherit;
    float: right;
  }
  .ivu-menu-light.ivu-menu-horizontal .ivu-menu-item a{
    height: inherit;
    line-height: inherit;
    border-bottom: 2px solid transparent;
    color: #657180;
  }
</style>
