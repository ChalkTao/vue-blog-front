export default function (router) {
  router.map({
    '/': {
      name: 'home',
      component: require('./views/Home.vue')
    },
    '*': {
      component: require('./views/Home.vue')
    }
  })
}
