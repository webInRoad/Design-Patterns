var googleMap = {
	show: function () {
		// 方法是show
		console.log('开始渲染谷歌地图')
	}
}
var baiduMap = {
	display: function () {
		//方法是display
		console.log('开始渲染百度地图')
	}
}
var baiduMapAdapter = {
	show: function () {
		//适配器也改为show,返回的是display
		return baiduMap.display()
	}
}
//下面是渲染地图的方法，传入地图对象
var renderMap = function (map) {
	//传入地图对象
	if (map.show instanceof Function) {
		//判断
		map.show() //地图对象的show方法
		//在传入baiduMapAdapter对象的时候，调用show方法，返回的
		//实际是baiduMap的display方法。
	}
}

renderMap(googleMap) // 输出：开始渲染谷歌地图
renderMap(baiduMapAdapter) // 输出：开始渲染百度地图
