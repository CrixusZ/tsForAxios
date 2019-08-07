import axios from '../../src/index'
// params 对象的 key 和 value 拼接到 url 上
axios({
  method: 'get',
  url: '/simple/get',
  params: {
    a: 1,
    b: 2
  }
})
