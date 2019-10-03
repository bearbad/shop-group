import {isArray, isString } from '@/util/validate'

describe('util:calidate', () => {
  it('isArray', () => {
    expect(isArray([])).toBe(true)
    expect(isArray({})).toBe(false)
    expect(isArray(111)).toBe(false)
    expect(isArray('111')).toBe(false)
    expect(isArray(undefined)).toBe(false)
    expect(isArray(null)).toBe(false)
    expect(isArray(Symbol())).toBe(false)
  })

  it('isString', () => {
    expect(isString([])).toBe(false)
    expect(isString({})).toBe(false)
    expect(isString(111)).toBe(false)
    expect(isString('111')).toBe(true)
    expect(isString(undefined)).toBe(false)
    expect(isString(null)).toBe(false)
    expect(isString(Symbol())).toBe(false)
  })
})