import service from './request'

export function getPageFileCountApi(page: number | string) {
  return service({
    url: `/count/${page}`,
    method: 'get',
  })
}

export function getPageCountApi() {
  return service({
    url: '/page/count',
    method: 'get',
  })
}
