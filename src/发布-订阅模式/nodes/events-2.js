const EventEmitter = require('events').EventEmitter
const emitter1 = new EventEmitter()
emitter1.on('some', (name) => {
	// 监听 some 事件
	console.info('some event is occured 1 ' + name)
})
emitter1.on('some', () => {
	// 监听 some 事件
	console.info('some event is occured 2')
})
// 触发 some 事件
// 并传递参数
emitter1.emit('some', 'zhangsan')
