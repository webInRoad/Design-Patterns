// class Circle {
// 	draw() {
// 		console.info('画圆')
// 		this.setRed()
// 	}
// 	setRed() {
// 		console.info('设置红色边框')
// 	}
// }
// let c = new Circle()
// c.draw()

class Circle {
	draw() {
		console.info('画圆')
		this.setGreen()
	}
	setRed() {
		console.info('设置红色边框')
	}
	setGreen() {
		console.info('设置绿色边框')
	}
}
let c = new Circle()
c.draw()
