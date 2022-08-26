import Request from '@/libs/axios'
import type { GetFundDetailListItem } from '@/types/response/demo'
import type { GetFundDetailListParams } from '@/types/request/demo'
type Response<T> = Promise<
  {
    data: T
  }
>

export function getFundDetailList (params:GetFundDetailListParams):Response<GetFundDetailListItem> {
  return Request.get(
    {
      url: '/f10/lsjz',
      params,
      showTips: true
    }
  )
}
