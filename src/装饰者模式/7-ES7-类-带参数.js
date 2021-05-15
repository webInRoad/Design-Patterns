// // 装饰器要接收参数时,就要返回个函数,该函数的第一个参数是目标类
// function classDecorator(name) {
// 	return function (target) {
// 		target.btnName = name
// 	}
// }

// // 将装饰器"安装"到 Button 类上
// @classDecorator('登录')
// class Button {}

// // 验证装饰器是否生效
// alert('按钮名称：' + Button.btnName)

// 装饰器要接收参数时,就要返回个函数,该函数的第一个参数是目标类
function classDecorator(name) {
	return function (target) {
		target.btnName = name
		return target
	}
}

// 将装饰器"安装"到 Button 类上
class Button {}

Button = classDecorator('登录')(Button)
// 验证装饰器是否生效
alert('按钮名称：' + Button.btnName)
