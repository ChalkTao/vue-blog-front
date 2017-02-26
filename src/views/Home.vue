<template>
  <div style="min-height: 500px;">
    <Row>
      <i-col span="20">
        <div class="wrapper-content">
          <div v-if="article" class="content-item ivu-article" >
            <div class="article-title">
              <a @click.prevent="back(item)">
                <Icon type="arrow-left-b"></Icon>
              </a>
              {{article.title}}
              <Tag type="border" color="blue" v-for="label in article.labels">{{label}}</Tag>
            </div>
            <div>
              <span class="article-category">文章分类: {{article.category}}</span>
              <small>发布于: {{article.created | formatDate}}</small>
            </div>
            <p v-html="article.content" class="markdown-body"></p>
          </div>
          <div v-else>
            <div class="content-item ivu-article" v-for="item in articles">
              <div class="article-title"><a @click.prevent="getArticle(item)">{{item.title}}</a>
                <Tag type="border" color="blue" v-for="label in item.labels">{{label}}</Tag>
              </div>
              <div>
                <span class="article-category">文章分类: {{item.category}}</span>
                <small>发布于: {{item.created | formatDate}}</small>
              </div>
              <div class="article-content">
                <p v-html="item.content" class="markdown-body"></p>
              </div>
              <div class="article-tail"></div>
            </div>
            <div v-if="hasMore">
              <i-button class="more" long :loading="loading" @click="toLoading">
                <span v-if="!loading">加载更多</span>
                <span v-else>Loading...</span>
              </i-button>
            </div>
            <div v-else>
              <i-button class="more" long disabled>
                没有更多内容了
              </i-button>
            </div>
          </div>
        </div>
      </i-col>
      <i-col class="navigate" span="4">
        <Menu active-key="1-2" width="auto" @on-select="select" accordion>
          <Menu-item key="__all">
            <Icon type="navicon-round"></Icon>
            全部文章
          </Menu-item>
          <Menu-group title="文章分类">
          </Menu-group>
          <Submenu :key="item.category" v-for="item in categories">
              <template slot="title">
                <Icon type="ios-paper"></Icon>
                {{item.category}} ({{item.count}})
              </template>
              <Menu-item :key="item.category + ';' + label" v-for="label in item.labels">{{label}}</Menu-item>
          </Submenu>
        </Menu>
      </i-col>

    </Row>
  </div>
</template>

<script>
export default {
  components: {
  },
  data: function () {
    return {
      userId: '',
      article: null,
      articles: [{
        title: '一二三',
        category: '分子',
        content: '132132311331',
        created: new Date()
      }],
      categories: [],
      loading: false,
      hasMore: true,
      options: {
        page: 1
      }
    }
  },
  methods: {
    onError: function (response) {
      var msg = (response.data && response.data.error_msg) || '获取失败'
      this.$Message.error(msg)
      this.loading = false
    },
    select: function (event) {
      this.back()
      console.log(event)
      if (event !== '__all') {
        let data = event.split(';')
        this.options = {
          category: data[0],
          label: data[1],
          page: 1
        }
        this.hasMore = true
      } else {
        this.options = {
          page: 1
        }
        this.hasMore = true
      }
      console.log(this.options)
      this.$http.get('article/front/' + this.userId, {params: this.options}).then(response => {
        this.articles = response.data.data
      }, this.onError)
    },
    getArticle: function (item) {
      this.article = item
    },
    back: function () {
      this.article = null
    },
    toLoading: function () {
      this.loading = true
      this.options.page = this.options.page + 1
      this.$http.get('article/front/' + this.userId, {params: this.options}).then(response => {
        let newItems = response.data.data
        if (!newItems || newItems.length === 0) {
          this.hasMore = false
        } else {
          this.articles = this.articles.concat(newItems)
        }
        this.loading = false
      }, this.onError)
    }
  },
  created () {
    this.$http.get('user/name/11@11').then(response => {
      this.userId = response.data._id
      this.$http.get('article/category/' + this.userId).then(response => {
        this.categories = response.data.data
      }, this.onError)
      this.$http.get('article/front/' + this.userId).then(response => {
        this.articles = response.data.data
      }, this.onError)
    }, this.onError)
  }
}
</script>

<style>
  .wrapper-content {
    padding: 20px 25px;
    position: relative;
  }
  .navigate {
    font-size: 14px;
    padding: 15px 0;
  }
  .ivu-menu-vertical.ivu-menu-light:before {
    width: 1px;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 1;
  }
  .ivu-menu-vertical.ivu-menu-light:before {
    background: #d7dde4;
    position: absolute;
    bottom: 0;
    display: block;
    content: '';
  }
  .ivu-menu-vertical.ivu-menu-light:after {
    width: 0px;
  }
  .content-item {
    border-bottom: 1px #D7DDE3 solid;
    padding: 10px;
    line-height: 2;
  }
  .article-title {
    font-size: 24px;
    color: #2c3e50;
  }
  .article-title a {
    color: #2c3e50;
  }
  .article-category {
    font-size: 18px;
    margin-right: 40px;
  }
  .article-content {
    height: 200px;
    overflow: hidden;
  }
  .markdown-body h2 {
    border-bottom: none;
    margin-bottom: 6px;
  }
  .markdown-body h1 {
    border-bottom: none;
    margin-bottom: 6px;
  }
  .article-tail {
    position: relative;
    margin-bottom: -60px;
    top: -60px;
    z-index: 999;
    height: 60px;
    background: -webkit-linear-gradient(rgba(255,255,255,0), rgba(255,255,255,1)); /* Safari 5.1 - 6.0 */
    background: -o-linear-gradient(rgba(255,255,255,0), rgba(255,255,255,1)); /* Opera 11.1 - 12.0 */
    background: -moz-linear-gradient(rgba(255,255,255,0), rgba(255,255,255,1)); /* Firefox 3.6 - 15 */
    background: linear-gradient(rgba(255,255,255,0), rgba(255,255,255,1)); /* 标准的语法（必须放在最后） */
  }
  .more {
    border: none;
  }
</style>
