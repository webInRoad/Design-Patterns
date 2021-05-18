//策略对象
var strategies = {
  //一系列算法
  "S": function ( salary ) {
    return salary * 4;
  },
  "A": function ( salary ) {
    return salary * 3;
  },
  "B": function ( salary ) {
    return salary * 2;
  },
  "C": function (salary) {
    return salary * 0.3;
  },
};

var calculateBonus = function ( level, salary) {
  return strategies[ level ]( salary );    
};

console.log( calculateBonus('S', 20000)); // 80000

