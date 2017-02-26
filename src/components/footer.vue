<template>
  <div class="footer">
    <div class="footer-main">
      <Row>
        <i-col span="4" offset="20">
          <h4>powered by Chalk</h4>
        </i-col>
      </Row>
    </div>
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
  .footer {
    background: #fff;
    color: #666;
  }
  .footer-main {
    width: 90%;
    margin: 0 auto;
  }
  .footer-main .ivu-row {
    padding: 14px 0;
  }
  .footer-main .ivu-row h4 {
    margin-bottom: 4px;
  }
</style>
