<template>
  <div id="login">
  </div>
</template>

<script>
import { Button } from 'iview'
export default {
  name: 'Login',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      transfer: true,
      size: 'large'
    }
  },
  props: {
  },
  mounted: function () {
  },
  methods: {
    dosomething: function () {
      this.$router.push('/three')
    }
  },
  components: {
    Button
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#main{
  width: 100%;
  height: 100%;
  background-color: black;
}
</style>
