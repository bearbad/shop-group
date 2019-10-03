const toStringCurry = (type: string) => {
  return function (o: any): boolean {
    return Object.prototype.toString.call(o) === `[object ${type}]`
  }
}

export const isArray = (o: any) => {
  return toStringCurry('Array')(o)
}

export const isString = (o: any) => {
  return toStringCurry('String')(o)
}