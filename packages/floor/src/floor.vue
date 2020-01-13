<template>
  <div class="floor-warpper">
    <section class="floor-nav" id="floorNavList">
      <ul class="nav-list">
        <li 
          class="nav-list-item" 
          v-for="(item, index) in data" 
          :key="item.id" 
          @click="setFloorNavMountClick(index)"
        >{{ item.name }}</li>
      </ul>
    </section>
    <section 
      class="floor-item" 
      v-for="item in data" 
      :key="item.id">
      <div class="floor-item-box">
        <h2>{{ item.name }}</h2>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'LFloor',
  props: {
    data: {
      type: Array,
      default: function () {
        return []
      }
    }
  },
  data () {
    return {
      element: {
        nav_item: null,
        floor_item: null
      },
      timer: null
    }
  },
  mounted () {
    this.element = {
      nav_item: document.getElementsByClassName('nav-list-item'),
      floor_item: document.getElementsByClassName('floor-item')
    }
    this.element.nav_item[0].classList.add('active')
    window.addEventListener('scroll', this.floorSrcollEventListener)
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.floorSrcollEventListener)
  },
  methods: {
    /**
     * 设置楼层导航事件驱动方法
     * @param {Number} index  楼层下标
     */
    setFloorNavMountClick (index) {
      const { floor_item } = this.element
      const floor_offsetTop = floor_item[index].offsetTop - floor_item[0].offsetTop,
        window_scrollTop = document.documentElement.scrollTop || document.body.scrollTop,
        timer = {
          step: 60,
          times: 16,
          FLOOR_OFFSETTOP: floor_offsetTop,
        }
      if (window_scrollTop > floor_offsetTop) {
        this.setFloorScrollArrowUp(timer)
      } else if (window_scrollTop == floor_offsetTop) {
        return false
      } else {
        this.setFloorScrollArrowDown(timer)
      }
    },
    /**
     * 设置楼层向上滚动
     * @param {Object} timer 定时器配置
     */
    setFloorScrollArrowUp (timer) {
      clearInterval(this.timer)
      this.timer = setInterval(() => {
        let window_scrollTop = document.documentElement.scrollTop || document.body.scrollTop
        if (window_scrollTop <= timer.FLOOR_OFFSETTOP) {
          document.documentElement.scrollTop = timer.FLOOR_OFFSETTOP
          document.body.scrollTop = timer.FLOOR_OFFSETTOP
          clearInterval(this.timer)
        } else {
          document.documentElement.scrollTop = window_scrollTop - timer.step
          document.body.scrollTop = window_scrollTop - timer.step
        }
      }, timer.times)
    },
    /**
     * 设置楼层向下滚动
     * @param {Object} timer 定时器配置
     */
    setFloorScrollArrowDown (timer) {
      clearInterval(this.timer)
      this.timer = setInterval(() => {
        let window_scrollTop = document.documentElement.scrollTop || document.body.scrollTop
        if (window_scrollTop >= timer.FLOOR_OFFSETTOP) {
          document.documentElement.scrollTop = timer.FLOOR_OFFSETTOP
          document.body.scrollTop = timer.FLOOR_OFFSETTOP
          clearInterval(this.timer)
        } else {
          document.documentElement.scrollTop = window_scrollTop + timer.step
          document.body.scrollTop = window_scrollTop - timer.step
        }
      }, timer.times)
    },
    /**
     * 监听窗口滚动楼层导航动态定位
     */
    floorSrcollEventListener () {
      const { nav_item, floor_item } = this.element
      const window_scrollTop = document.documentElement.scrollTop || document.body.scrollTop
      for (let i = 0, len = floor_item.length; i < len; i++) {
        let floor_offsetTop = floor_item[i].offsetTop - floor_item[0].offsetTop
        if (window_scrollTop >= floor_offsetTop) {
          for (let n = 0, len = nav_item.length; n < len; n++) {
            const current_classList = nav_item[n].classList
            i === n
              ? current_classList.add('active')
              : current_classList.remove('active')
          }
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.floor-warpper {
  width: 1000px;
  margin: auto;
}
.floor-nav {
  position: fixed;
  top: 200px;
  left: 50px;
  .nav-list {
    width: 48px;
    padding: 0;
    display: inline-block;
    text-align: center;
    background-color: #f8f8f8;
    .nav-list-item {
      display: inline-block;
      width: 100%;
      height: 100%;
      line-height: 48px;
      vertical-align: middle;
      align-self: center;
      border-bottom: 1px solid #fff;
      cursor: pointer;
      &.active {
        color: #FFF;
        background-color: #404040;
      }
      &:hover {
        color: #FFF;
        background-color: #404040;
      }
    }
  }
}

.floor-item {
  width: 100%;
  margin: 60px auto;
  min-height: 300px;
  text-align: center;
  color: #FFF;
  background-color: #404040;
}
</style>