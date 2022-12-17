export function timestamp2time(timestamp: number): string {
  var newDate = new Date()
  newDate.setTime(timestamp * 1000)
  return newDate.toLocaleDateString()
}
export function timestamp2date(timestamp: number): string {
  var newDate = new Date()
  newDate.setTime(timestamp * 1000)
  return `${newDate.getFullYear()}-${newDate.getMonth() + 1}-${newDate.getDate()}`
}


// 获取指定范围内的随机数
export function randomNum(min: number, max: number) {
  return Math.floor(Math.random() * (min - max) + max)
}
// 解码Unicode
function solveUnicode(str: string) {
  //Unicode显示方式是\u4e00
  str = '\\u' + str
  str = str.replace(/\\/g, '%')
  //转换中文
  str = unescape(str)
  //将其他受影响的转换回原来
  str = str.replace(/%/g, '\\')
  return str
}
//生成随机汉字包括生僻字
export function randomCNWord(length: number) {
  let name = ''
  for (let i = 0; i < length; i++) {
    let unicodeNum = ''
    unicodeNum = randomNum(0x4e00, 0x9fa5).toString(16)
    name += solveUnicode(unicodeNum)
  }
  return name
}
