import Request from '@/libs/simpleAxios'
import type { getFundDetailListItem } from '@/types/response/demo'
import type { form } from '@/types/request/demo'
type Response<T> = Promise<
  {
    data: T
  }
>

export function getFundDetailList (params:form):Response<getFundDetailListItem> {
  return Request.get(
    {
      url: '/f10/lsjz',
      params,
      showTips: true
    }
  )
}
