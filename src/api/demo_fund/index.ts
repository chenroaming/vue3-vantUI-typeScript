import service from '@/libs/simpleAxios'
import type { getFundDetailListItem } from '@/types/response/demo'
import type { AxiosRqConfig } from '@/types/utils'
import type { form } from '@/types/request/demo'
type Response<T> = Promise<
  {
    data: T
  }
>

export function getFundDetailList (params:form):Response<getFundDetailListItem> {
  return service({
    url: '/f10/lsjz',
    method: 'get',
    params,
    showTips: true
  } as AxiosRqConfig)
}
