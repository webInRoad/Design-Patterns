var performanceS = function (salary) {
	return salary * 4
}
var performanceA = function (salary) {
	return salary * 3
}
var performanceB = function (salary) {
	return salary * 2
}
var performanceC = function (salary) {
	return salary * 0.3
}
var calculateBonus = function (performanceLevel, salary) {
	if (performanceLevel == 'S') {
		return performanceS(salary)
	}
	if (performanceLevel == 'A') {
		return performanceA(salary)
	}
	if (performanceLevel == 'B') {
		return performanceB(salary)
	}
	if (performanceLevel == 'C') {
		return performanceC(salary)
	}
}
console.info(calculateBonus('S', 20000)) // 80000
console.info(calculateBonus('C', 15000)) // 4500
