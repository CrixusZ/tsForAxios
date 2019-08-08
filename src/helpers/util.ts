const tosString = Object.prototype.toString
export function isDate (val:any): val is Date {
  return tosString.call(val) === '[object Date]'
}

export function isObject (val:any): val is Object {
  return val !== null && typeof val === 'object'
}


