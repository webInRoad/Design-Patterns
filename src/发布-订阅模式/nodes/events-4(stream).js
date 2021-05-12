// Steam 用到了自定义事件
const fs = require('fs')
var readStream = fs.createReadStream('./data/1.js')
var len = 0
readStream.on('data', (chunk) => {
	len += chunk.toString().length
})
readStream.on('end', () => {
	console.info('总共多少个字符:' + len)
})
