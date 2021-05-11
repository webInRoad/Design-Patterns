// 定义基本发布者类
class Publisher {
	constructor() {
		this.observers = []
	}
	// 增加订阅者
	add(observer) {
		this.observers.push(observer)
	}
	// 移除订阅者
	remove(observer) {
		this.observers.forEach((item, i) => {
			if (item === observer) {
				this.observers.splice(i, 1)
			}
		})
	}
	// 通知所有订阅者
	notify() {
		console.log('Publisher.notify invoked')
		this.observers.forEach((observer) => {
			observer.update(this)
		})
	}
}
// 定义基本订阅者类
class Observer {
	update() {
		console.log('Observer.update invoked')
	}
}
/* ========================================================================================================================================== */

// 定义个具体的销售员发布类
class SalesPublisher extends Publisher {
	constructor() {
		super()
		// 楼盘起初是还未开盘
		this.state = 'close'
		// 还没将人员号码登记
		this.observers = []
	}
	// 获取当前楼盘状态
	getState() {
		return this.state
	}
	// 设置楼盘状态
	setState(state) {
		console.info('楼盘开盘了')
		this.state = state
		// 楼盘状态一改, 通知要购买房子的人
		this.notify()
	}
}

// 购房子类
class BuyerObserver extends Observer {
	constructor(name) {
		super()
		this.name = name
	}

	// 重写一个具体的 update 方法
	update(publisher) {
		// 获取楼盘的状态
		let state = publisher.getState()
		console.info(`${this.name} update, state: ${state}`)
		this.doSomething()
	}
	// 接收到消息之后,后续要处理的逻辑,比如回复销售员收到,开始筹钱等等
	doSomething() {
		console.info('开始筹钱')
	}
}

// 创建订阅者: 小明
const xiaoMing = new BuyerObserver('小明')
// 创建订阅者: 小红
const xiaoHong = new BuyerObserver('小红')
// 创建订阅者: 小二
const xiaoEr = new BuyerObserver('小二')

// 创建发布者: 王五
const wangwu = new SalesPublisher()

// 开始添加购房者的号码
wangwu.add(xiaoMing)
wangwu.add(xiaoHong)
wangwu.add(xiaoEr)

// 楼盘开盘了，是时候通知购房者了
wangwu.setState('open')
