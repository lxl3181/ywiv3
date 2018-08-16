<template>
  <div id="three_main" ref="three_main">
    <Button id="backBtn" size="large"  transfer="true" @click="back">返回</Button>
    <Button id="loadingBtn" size="large"  transfer="true" @click="handleSpinCustom">加载</Button>
  </div>
</template>

<script>
import * as THREE from 'three'
import OrbitControls from 'three/examples/js/controls/OrbitControls'
import { Button } from 'iview'

export default {
  name: 'Three',
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
    // this.initThree()
  },
  methods: {
    back: function () {
      this.$router.push('/')
    },
    initThree: function () {
      let scene = new THREE.Scene()
      let camera = new THREE.PerspectiveCamera(75, this.$refs.three_main.clientWidth / this.$refs.three_main.clientHeight, 0.1, 100000)
      let controls = new OrbitControls(camera)
      let light = new THREE.AmbientLight('white')
      scene.add(light)
      // 网格
      let size = 200
      let divisions = 10
      let gridHelper = new THREE.GridHelper(size, divisions, 'white', 'white')
      scene.add(gridHelper)
      // 读取json模型
      let loader = new THREE.ObjectLoader()
      loader.load('static/json/three/command-centre.json', function (obj) {
        obj.scale.set(0.1, 0.1, 0.1)
        scene.add(obj)
      }, function (a) {
        console.log('line47:', a)
      }, function (b) {
        console.log('line49:', b)
      })
      let renderer = new THREE.WebGLRenderer({
        alpha: true
      })
      renderer.setSize(this.$refs.three_main.clientWidth, this.$refs.three_main.clientHeight)
      renderer.setClearAlpha(0)
      this.$refs.three_main.appendChild(renderer.domElement)
      camera.position.set(50, 30, 0)
      let animate = function () {
        requestAnimationFrame(animate)
        controls.update()
        renderer.render(scene, camera)
      }
      animate()
    },
    handleSpinCustom () {
      this.$store.commit('isLoading', true)
      setTimeout(() => {
        this.$store.commit('isLoading', false)
      }, 3000)
    }
  },
  components: {
    Button,
    THREE,
    OrbitControls
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#three_main{
  width: 100%;
  height: 100%;
  background-color: black;
}
#backBtn{
  position:absolute;
  left:20%;
  top:50%;
}
#loadingBtn{
  position:absolute;
  left:30%;
  top:50%;
}
</style>
