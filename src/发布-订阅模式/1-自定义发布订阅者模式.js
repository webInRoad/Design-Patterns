class EventEmitter {
	constructor() {
		this.handleEvents = {}
	}
	on(type, callback) {
		if (!this.handleEvents[type]) {
			this.handleEvents[type] = []
		}
		this.handleEvents[type].push(callback)
	}
	emit(type, ...args) {
		if (this.handleEvents[type]) {
			this.handleEvents[type].forEach((callback) => {
				callback(...args)
			})
		}
	}
	off(type, callback) {
		const callbacks = this.handleEvents[type]
		const index = callbacks.indexOf(callback)
		if (index !== -1) {
			callbacks.splice(index, 1)
		}
		if (callbacks.length === 0) {
			delete this.handleEvents[type]
		}
	}
	offAll(type) {
		if (this.handleEvents[type]) {
			delete this.handleEvents[type]
		}
	}
	once(type, callback) {
		const wrapper = (...args) => {
			callback.apply(args)
			this.off(type, wrapper)
		}
		this.on(type, wrapper)
	}
}

/* ===========================测试====================================== */

// 创建事件管理器实例
const emitter = new EventEmitter()
// 注册一个refresh事件监听者
emitter.on('refresh', function () {
	console.log('调用后台获取最新数据')
})
// 发布事件refresh
emitter.emit('refresh')
// 也可以emit传递参数
emitter.on('refresh', function (pageNo, pageSize) {
	console.log(`调用后台获取参数,参数为:{pageNo:${pageNo},pageSize:${pageSize}}`)
})
emitter.emit('refresh', '2', '20') // 此时会打印两条信息，因为前面注册了两个refresh事件的监听者

// 测试移除事件监听
const toBeRemovedListener = function () {
	console.log('我是一个可以被移除的监听者')
}
emitter.on('testRemove', toBeRemovedListener)
emitter.emit('testRemove')
emitter.off('testRemove', toBeRemovedListener)
emitter.emit('testRemove') // 此时事件监听已经被移除，不会再有console.log打印出来了

// 测试移除refresh的所有事件监听
emitter.offAll('refresh')
console.log(emitter) // 此时可以看到emitter.handleEvents已经变成空对象了，再emit发送refresh事件也不会有反应了

emitter.once('onlyOne', function () {
	console.info('只会触发一次')
})
emitter.emit('onlyOne')
emitter.emit('onlyOne') // 不会弹出信息
