function mixin(...list) {
	console.info(...list, 'list') // ...list 是个对象, key 为 "foo",值为 function() { alert('foo')}
	return function (target) {
		Object.assign(target, ...list)
		console.dir(target, 'target')
	}
}

const Foo = {
	foo() {
		alert('foo')
	}
}

@mixin(Foo)
class Button {}
let d = new Button()
d.foo()
