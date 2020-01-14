<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import { Bus } from './event bus/bus'

export default {
  data() {
    return {
    }
  },

  beforeDestroy() {
    Bus.$off();
  }
}
</script>


<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0;

  // a {
  //   font-weight: bold;
  //   color: #2c3e50;

  //   &.router-link-exact-active {
  //     color: #42b983;
  //   }
  // }
}
</style>
