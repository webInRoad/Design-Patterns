// 将传入的所有参数相乘
const mult = function() {
    console.info("执行了一次计算")
    let a = 1
    for (let i = 0, l; l = arguments[i++];) {
      a = a * l
    }
    return a
}

// 为上面的乘积方法创建代理
const proxyMult = (function() {
    // 乘积结果的缓存池
    const cache = {}
    return function() {
      // 将入参转化为一个唯一的入参字符串,作为是否执行过运算的标识符
      const tag = Array.prototype.join.call(arguments, ',')
      // 执行过，则直接返回
      if (cache[tag]) {
        // 如果执行过，则返回缓存池里现成的结果
        return cache[tag]
      }
      cache[tag] = mult.apply(this, arguments)
      return cache[tag]
    }
})()
  
console.info(proxyMult(1, 2, 3, 4))// 24
console.info(proxyMult(1, 2, 3, 4))// 24