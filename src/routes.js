export default function (router) {
  router.map({
    '/': {
      name: 'home',
      component: require('./views/Home.vue')
    },
    '/:user': {
      name: 'user',
      component: require('./views/Page.vue')
    },
    '*': {
      component: require('./views/Home.vue')
    }
  })
}
