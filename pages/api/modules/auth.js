import request from '../request'

export function getAuthId(requestBody){
  return request({
    url:'/api/auth',
    method:'POST',
    data: requestBody
  })
}