class EventEmitter {
	constructor() {
		// handleEvents 是一个 map ，用于存储事件与回调之间的对应关系
		this.handleEvents = {}
	}
	/**
	 * 注册事件监听者, 它接受事件类型和回调函数作为参数
	 * @param {String} type 事件类型
	 * @param {Function} callback 回调函数
	 */
	on(type, callback) {
		// 先检查一下事件类型有没有对应的监听函数队列
		if (!this.handleEvents[type]) {
			// 如果没有，那么首先初始化一个监听函数队列, 否则直接 push 会报错(Uncaught TypeError: Cannot read property 'push' of undefined)
			this.handleEvents[type] = []
		}
		// 把回调函数推入事件类型的监听函数队列里去
		this.handleEvents[type].push(callback)
	}
	/**
	 * 发布事件,它接受事件类型和监听函数入参作为参数
	 * @param {String} type 事件类型
	 * @param  {...any} args 参数列表，把emit传递的参数赋给回调函数
	 */
	emit(type, ...args) {
		// 检查事件类型是否有监听函数队列
		if (this.handleEvents[type]) {
			// 如果有，则逐个调用队列里的回调函数
			this.handleEvents[type].forEach((callback) => {
				callback(...args)
			})
		}
	}
	/**
	 * 移除某个事件回调队列里的指定回调函数
	 * @param {String} type 事件类型
	 * @param {Function} callback 回调函数
	 */
	off(type, callback) {
		const callbacks = this.handleEvents[type]
		const index = callbacks.indexOf(callback)
		// 找到则移除
		if (index !== -1) {
			callbacks.splice(index, 1)
		}
		// 该事件类型对应的回调函数为空了,则将该对象删除
		if (callbacks.length === 0) {
			delete this.handleEvents[type]
		}
	}
	/**
	 * 移除某个事件的所有回调函数
	 * @param {String} type 事件类型
	 */
	offAll(type) {
		if (this.handleEvents[type]) {
			delete this.handleEvents[type]
		}
	}
	/**
	 * 为事件注册单次监听器
	 * @param {String} type 事件类型
	 * @param {Function} callback 回调函数
	 */
	once(type, callback) {
		// 对回调函数进行包装，使其执行完毕自动被移除
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
