import { describe ,it, expect } from "vitest"
// add
function add(a: number, b:number) {
  return a + b
}
// 判断邮箱地址是否合法
function isEmail(email: string) {
  return /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/.test(email)
}

describe("Test", () => {
  it("two sum", () => {
    expect(add(1, 2)).toEqual(3)
  })
  it("isEmail", () => {
    expect(isEmail("test@163.com")).toEqual(true)
  })
})
