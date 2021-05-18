//策略类（S）
class performanceS {
    calculate(salary) {
        return salary * 4;
    }
}

//策略类（A）
class performanceA {
    calculate(salary) {
        return salary * 3;
    }
}

//策略类（B）
class performanceB {
    calculate(salary) {
        return salary * 2;
    }
}

//策略类（C）
class performanceC {
    calculate(salary) {
        return salary * 0.3;
    }
}

// 环境类
class Bonus {
    constructor() {
        this.salary = null;     //原始工资
        this.strategy = null;  //绩效公司对应的策略对象
    }
    setSalary(salary) {
        this.salary = salary;  //设置原始工资
    }
    setStrategy(strategy) {
        this.strategy = strategy; //设置员工绩效等级对应的策略对象
    }
    getBonus() {//取得奖金数额
        //维持对策略对象的引用
        return this.strategy.calculate( this.salary );  //委托给对应的策略对象
    }
}

// 测试
const bonus = new Bonus()
bonus.setSalary( 20000 );
bonus.setStrategy( new performanceS() ); //设置策略对象

console.info(bonus.getBonus()) // 80000
