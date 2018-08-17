<template>
  <div class="login">
    <Card class="card">
        <p slot="title">
            <Icon type="ios-home-outline" size="20" />
            用户登录
        </p>
        <a href="#" slot="extra" @click.prevent="changeLimit">
            <Icon type="ios-loop-strong"></Icon>
            Change
        </a>
      <Button size="large">test</Button>
    </Card>
  </div>
</template>

<script>
import { Button, Card, Icon } from 'iview'
export default {
  name: 'Login',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
      transfer: true,
      size: 'large'
    }
  },
  props: {},
  mounted: function() {},
  methods: {
    dosomething: function() {
      this.$router.push('/three')
    }
  },
  components: {
    Button,
    Card,
    Icon
  }
}
</script>

<!-- 添加scoped属性代表此css只针对此组件 -->
<style scoped>
.login {
  width: 100%;
  height: 100%;
  background-color: #2b85e4;
}
.card {
  width: 365px;
  margin: 0 auto;
  height: 450px;
  top: 20px;
}
</style>
