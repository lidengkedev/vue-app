<template>
  <div class="main">
    <div id="nav">
      <router-link v-for="(item, index) in menu" :key="index" :to="item.to" class="router-link">
        {{ item.name }}
      </router-link>
      <router-link to="/example" class="router-link">
        测试
      </router-link>
    </div>
    <router-view v-if="isActive" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      isActive: true,
      menu: []
    }
  },
  created() {
    const routes = this.$router.options.routes[0].children
    this.menu = routes.map(item => ({ name: (item.meta && item.meta.title) || '', to: `/${item.path}` }))
  },
  watch: {
    '$route': 'fetchData',
    // isActive(val) {
    //   !val && (this.isActive = true)
    // }
  },
  methods: {
    fetchData() {
      this.isActive = false
      setTimeout(() => {
        this.isActive = true
      }, 100)
    }
  }
}
</script>

<style lang="scss" scoped>
.main {
  margin-top: 100px;
}
#nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  padding: 20px;
  text-align: center;
  box-shadow: 0 -1px 3px 0 rgba($color: #000000, $alpha: 1.0);
  .router-link {
    padding: 10px;
    text-decoration: none;
  }
  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
      text-decoration: underline;
    }
  }
}
</style>