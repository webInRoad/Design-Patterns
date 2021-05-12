const EventEmitter = require('events').EventEmitter
class Person extends EventEmitter {
	constructor(name) {
		super()
		this.name = name
	}
}
var p = new Person('wangwu')
p.on('showName', function (name) {
	console.info('My name is ' + (this.name || name))
})
p.emit('showName', 'zhangsan')
