// 定义策略类
const strategies = {
    isNonEmpty: function ( value, errorMsg) {
        if ( value === '') {
            return errorMsg;
        }
    },
    minLength: function ( value, length, errorMsg ) {
        if ( value.length < length ) {
            return errorMsg
        }
    },
    isMobile: function ( value, errorMsg) {
        if ( !/(^1[3|5|8][0-9]{9}$)/.test( value )) {
            return errorMsg;
        }
    }
}
class Validator {
    constructor() {
        this.cache = [];  //保存校验规则 
    }
    //添加检验规则函数
    // add(dom,rule,errorMsg){
    //     //把strategy和参数分开'minLength:6' 如'minLength:6' -> ["minLength", "6"]
    //     let ary = rule.split(':'); 
    //     this.cache.push ( function () {
    //         let strategy = ary.shift(); //用户挑选的strategy ["minLength", "6"] -> 'minLength' 
    //         ary.unshift( dom.value ); //把input的value添加进参数列表
    //         ary.push( errorMsg ); //把errorMsg添加进参数列表
    //         return strategies[ strategy ].apply( dom, ary ); //委托策略对象调用
    //     })
    // }
    add (dom, rules) {
        let self = this;
        for (let i = 0,rule; rule = rules[i++];) {
            (function ( rule ) {
                let strategyAry = rule.strategy.split( ':' );
                let errorMsg = rule.errorMsg;
                
                self.cache.push( function () {
                    let strategy = strategyAry.shift();
                    strategyAry.unshift( dom.value );
                    strategyAry.push( errorMsg );
                    return strategies[ strategy ].apply( dom, strategyAry )
                })
            })(rule)
        }
    }
    start(){
        for ( var i = 0,validatorFunc; validatorFunc = this.cache[i++];) {
            var msg = validatorFunc(); //开始校验，并取得校验后的返回信息
            if ( msg ) {  //如果msg存在，则说明校验不通过
                return msg; 
            }
        }
    }
}
const validataFunc = function () {
    //创建一个validator对象
    const validator = new Validator();
    //添加校验规则
    validator.add( registerForm.userName, 'isNonEmpty', '用户名不能为空');
    validator.add( registerForm.password, 'minLength:6', '密码长度不能少于6位');
    validator.add( registerForm.phoneNumber, 'isMobile', '手机号码格式不正确');
    const errorMsg = validator.start();
    //返回校验结果
    return errorMsg;
}
const registerForm = document.getElementById('registerForm');
registerForm.onsubmit = function () {
    const errorMsg = validataFunc();   //如果存在，则说明未通过校验
    if ( errorMsg ) {
        alert( errorMsg );
        return false; //阻止表单提交
    }
}