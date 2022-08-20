/* 
    You-Dont-Know-JS

    当 [0] 需要被强制转成 Boolean 的时候会被认为是 true。
    所以进入第一个 if 语句，而 a == true 的转换规则在 ES5 规范的第 11.9.3 节中已经定义过，你可以自己详细探索下。
    规范指出，== 相等中，如果有一个操作数是布尔类型，会先把他转成数字，所以比较变成了 [0] == 1；
    同时规范指出如果其他类型和数字比较，会尝试把这个类型转成数字再进行宽松比较，
    而对象（数组也是对象）会先调用它的 toString() 方法，此时 [0] 会变成 "0"，
    然后将字符串 "0" 转成数字 0，而 0 == 1 的结果显然是 false。
*/
/* var a = [0];
if ([0]) {
  console.log(a == true);
} else {
  console.log("wut");
} */

/* let a = [ 0 ]
let b = a.toString()
console.log( b, typeof b, b == true, b == false ); */

let arr =[ 1, 2, 3 ]
console.log( arr.toString() );