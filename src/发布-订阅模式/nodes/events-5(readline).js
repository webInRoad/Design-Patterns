// readLine 用到了自定义事件
const fs = require('fs')
const readLine = require('readline')
var rl = readLine.createInterface({
	input: fs.createReadStream('./data/1.js')
})
var lineNum = 0
rl.on('line', (line) => {
	lineNum++
})
rl.on('close', () => {
	console.info('lineNum:' + lineNum)
})
