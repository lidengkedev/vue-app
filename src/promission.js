import router from './router'

router.beforeEach((to, from, next) => {
    to.query.t = Date.now()
    next()
})

router.afterEach(() => {
    // to and from are both route objects.
})
