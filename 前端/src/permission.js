import router from './router'

router.beforeEach(async (to, from, next) => {

  let id = localStorage.getItem('id')

  //路由权限拦截
  let freeRouters = ['/login', '/register']
  if (!freeRouters.includes(to.path) && id == undefined) {
    next('/login')
  } else if (freeRouters.includes(to.path) && id != undefined) {
    next('/')
  } else {
    next()
  }
})

router.afterEach(() => {
})
