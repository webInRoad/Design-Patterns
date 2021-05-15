// // 装饰器函数，它的第一个参数是目标类
// function classDecorator(target) {
// 	target.hasAdd = true
// 	// return target // 可有可无, 默认就是返回 this 的
// }

// // 将装饰器"安装"到 Button 类上
// @classDecorator
// class Button {}

// // 验证装饰器是否生效
// alert('Button 是否被装饰了：' + Button.hasAdd)

function classDecorator(target) {
	target.hasAdd = true
	return target // 此时一定要用, 因为这时是作为函数使用，而非构造函数
}

class Button {}

Button = classDecorator(Button)
// 验证装饰器是否生效
alert('Button 是否被装饰了：' + Button.hasAdd)
