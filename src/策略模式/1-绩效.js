var calculateBonus = function (performanceLevel, salary) {
	if (performanceLevel == 'S') {
		return salary * 4
	}
	if (performanceLevel == 'A') {
		return salary * 3
	}
	if (performanceLevel == 'B') {
		return salary * 2
	}
	if (performanceLevel == 'C') {
		return salary * 0.3
	}
}
console.info(calculateBonus('S', 20000)) // 80000
console.info(calculateBonus('C', 15000)) // 4500
