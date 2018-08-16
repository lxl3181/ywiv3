<template>
  <div id="main">
    <Button size="large" transfer="true" @click="dosomething">登录</Button>
    <div>{{$store.state.testStr}}</div>
    <div id="myChart"></div>
  </div>
</template>

<script>
import { Button } from 'iview'
import common from 'resources/common'
import echarts from 'echarts'
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
    common.post()
    console.log(this.$store.state.testStr)
    this.drawEcharts()
  },
  methods: {
    dosomething: function () {
      this.$router.push('/three')
    },
    drawEcharts: function () {
      // 基于准备好的dom，初始化echarts实例
      let myChart = echarts.init(document.getElementById('myChart'))
      // 绘制图表
      myChart.setOption({
        title: { text: 'ECharts 入门示例' },
        tooltip: {},
        xAxis: {
          data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
        },
        yAxis: {},
        series: [{
          name: '销量',
          type: 'bar',
          data: [5, 20, 36, 10, 10, 20]
        }]
      })
    }
  },
  components: {
    Button,
    echarts,
    common
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
#myChart{
  width:300px;
  height:300px;
}
</style>
