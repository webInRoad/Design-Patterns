class Adapter {
	specificRequest() {
		return '德国标准插头'
	}
}
class Target {
	constructor() {
		this.adapter = new Adapter()
	}
	request() {
		let info = `${this.adapter.specificRequest()}---转换成---中国插头`
		return info
	}
}
let target = new Target()
console.info(target.request())
