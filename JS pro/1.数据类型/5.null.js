// console.log(typeof null, null instanceof Object); // object false
function f() {

}
const obj = new f()
// console.log(obj.hasOwnProperty('toString'), obj.__proto__.hasOwnProperty('toString'), Object.prototype.hasOwnProperty('toString'));
// console.log('toString' in obj); // in 会把对象原型链上的属性包含进去
console.log(obj instanceof Object);