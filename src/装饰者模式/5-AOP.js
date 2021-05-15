var before = function (fn, beforeFunc) {
	return function () {
		beforeFunc.apply(this, arguments)
		return fn.apply(this, arguments)
	}
}
var after = function (fn, afterFunc) {
	return function () {
		var ret = fn.apply(this, arguments)
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
var a = before(
	function () {
		alert(3)
	},
	function () {
		alert(2)
	}
)
a = before(a, function () {
	alert(1)
})
a()
