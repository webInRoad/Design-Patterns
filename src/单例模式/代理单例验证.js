import ProxySingleObject from './代理单例模式'
const s1 = new ProxySingleObject("张三")
const s2 = new ProxySingleObject("李四")
console.info(s1.getName()) // 张三
console.info(s2.getName()) // 张三
console.info(s1 == s2) // true

const s3 = new ProxySingleObject("王五")
console.info(s3.getName()) // 张三
console.info(s3 == s2) // true