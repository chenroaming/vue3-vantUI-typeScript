// 所有的import语句都写在文件顶部，避免Import in body of module; reorder to top  import/first的报错
import { generate } from '@/libs/axios'
import { apiConfig } from '@/types'
/**
 * 示例接口
 */
const config:apiConfig = {
  items: [
    // 登录接口
    {
      key: 'login',
      url: '/vue3-element-template/user/login',
      method: 'post',
      showTips: true
    },
    // 获取用户角色接口
    {
      key: 'getRoles',
      url: '/vue3-element-template/user/getRoles',
      method: 'get',
      showTips: false
    },
    {
      key: 'getFundDetailList',
      url: '/f10/lsjz',
      method: 'get',
      showTips: true
    }
  ]
}

export default {
  ...generate(config)
}
