import axios from 'axios'

export default {
  get () {
    axios({
      method: 'get',
      baseURL: '/test',
      url: 'telematics/v3/weather?location='
    }).then(function (res) {
      console.log('line7:', res)
    })
  },
  post () {
    axios({
      method: 'post',
      baseURL: '/test',
      url: 'telematics/v3/weather?location='
    }).then(function (res) {
      console.log('line7:', res)
    })
  }
}
