<template>
  <div id="app" class="container">
    <router-view></router-view>
    <footer class="footer">
      <nav class="weui-flex">
          <div class="weui-flex__item" v-for="(item,index) in itemTab" @click="changeTab(index)" :class="{ 'active': select === item.type}">
            <span v-html="item.icon"></span>
            <div class="placeholder">{{item.title}}</div>
          </div>
          <!--<div class="weui-flex__item" @click="goadd" :class="{active: showpage ==='addpage'}">
            <i class="icon iconfont icon-wps-create"></i>
            <div class="placeholder">创建发现</div>
          </div>
          <div class="weui-flex__item" @click="gomy" :class="{active: showpage ==='mypage'}">
            <i class="icon iconfont icon-wo"></i>
            <div class="placeholder">我的</div>
          </div>-->
      </nav>
    </footer>
  </div>
</template>

<script>
import {RouterLink ,Router} from 'vue-router'
import { mapGetters } from 'vuex'
export default {
  name: 'app',
  data(){
    return {

    }
  },
  mounted(){

  },
  computed: {
    ...mapGetters({
      itemTab: 'itemTab',
      select: 'getSelect',
    })
  },
  methods: {
    changeTab(index) {
      let gopath= this.itemTab[index].type
      this.$router.replace({path:  gopath, query: { select: gopath } })
    }
  }
}
</script>

<style>
body{
  width:100%;
  height: 100%;
  background-color: #f2f2f2;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.page-pad{
  padding-bottom: 72px;
}
.footer{
  position: fixed;
  z-index: 99;
  bottom: 0;
  width: 100%;
  text-align: center;
  border-top: 1px solid #ddd;
  background-color: #fff;
}
.footer i.icon{
  font-size: 20px;
}
.footer .weui-flex__item{
  padding:5px 0;
}
.placeholder{
  line-height: 1.2;
}
.active{
  color: #f60;
}
@media screen and (min-width:768px) {
  body{
    width:675px;
    margin:0 auto;
  }
  .footer{
    width:675px;
    margin:0 auto;
  }
}
</style>
