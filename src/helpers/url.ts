import { isDate, isObject } from './util'

function encode (val: string): string {
  return encodeURIComponent(val)
    .replace(/%40/g, '@')
    .replace(/%3A/gi, ':')
    .replace(/%24/g, '$')
    .replace(/%2C/gi, ',')
    .replace(/%20/g, '+')
    .replace(/%5B/gi, '[')
    .replace(/%5D/gi, ']')
}

export function bulidURL (url: string, params?:any) {
  if(!params){
    return url
  }

  const parts: string[] = []

  Object.keys(params).forEach((key) => {
    let val = params[key]
    if(val === null || typeof val === 'undefined') {
      return
    }
  })

}