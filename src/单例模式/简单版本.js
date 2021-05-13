class SingleObject {
    constructor(name) {
        this.name = name;
        this.instance = null
    }
    getName() {
        console.info(this, "this")
        return this.name
    }
    static getInstance(name) {
        // 判断是否已经 new 过1个实例
        if (!this.instance) {
            // 若这个唯一的实例不存在，则创建它并存储
            this.instance = new SingleObject(name)
        }
        // 如果这个唯一实例已经存在,则直接返回
        return this.instance
    }
}

const s1 = SingleObject.getInstance("张三")
const s2 = SingleObject.getInstance("李四")
console.info(s1.getName()) // 张三
console.info(s2.getName()) // 张三
console.info(s1 == s2) // true

// 这里只能用 getInstance 才能保证单例，如果用 new SingleObject 就没办法保证了
const s3 = new SingleObject("王五")
console.info(s3.getName()) // 王五
console.info(s3 == s2) // false
