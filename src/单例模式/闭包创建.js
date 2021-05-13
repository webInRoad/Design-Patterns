const SingleObject = (function () {
    let instance = null
    return function (name) {
        // 判断变量是否为 null
        if (!instance) {
            this.name = name
            instance = this
        }
        return instance
    }
})()
SingleObject.prototype.getName = function () {
    return this.name
}

const s1 = new SingleObject("张三")
const s2 = new SingleObject("李四")
console.info(s1.getName()) // 张三
console.info(s2.getName()) // 张三
console.info(s1 == s2) // true

const s3 = new SingleObject("王五")
console.info(s3.getName()) // 张三
console.info(s3 == s2) // true