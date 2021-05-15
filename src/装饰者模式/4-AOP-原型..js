Function.prototype.before = function (beforeFunc) {
	var that = this
	console.info(that, 'that')
	return function () {
		beforeFunc.apply(this, arguments)
		return that.apply(this, arguments)
	}
}
Function.prototype.after = function (afterFunc) {
	var that = this
	return function () {
		var ret = that.apply(this, arguments)
		afterFunc.apply(this, arguments)
		return ret
	}
}
var foobar = function (x, y, z) {
	console.log(x, y, z)
}
var foo = function (x, y, z) {
	console.log(x / 10, y / 10, z / 10)
}
var bar = function (x, y, z) {
	console.log(x * 10, y * 10, z * 10)
}
foobar = foobar.before(foo).after(bar)
foobar(1, 2, 3)
