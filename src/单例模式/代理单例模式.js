class SingleObject {
    constructor(name) {
        this.name = name
    }
    getName() {
        return this.name
    }
}
const ProxySingleObject = (function () {
    let instance
    return function (name) {
        if (!instance) {
            instance = new SingleObject(name)
        }
        return instance
    }
})()

export default ProxySingleObject

