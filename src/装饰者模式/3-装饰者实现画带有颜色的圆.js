class Circle {
	draw() {
		console.info('画圆')
	}
}
class Decorator {
	constructor(circle) {
		this.circle = circle
	}
	draw() {
		this.circle.draw()
		this.setRedBorder()
	}
	setRedBorder() {
		console.info('设置红色边框')
	}
}
let c = new Circle()
let d = new Decorator(c)
d.draw()
