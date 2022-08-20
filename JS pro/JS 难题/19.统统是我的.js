/* 
    在 JavaScript 中，参数变量和 arguments 是双向绑定的。
    改变参数变量，arguments 中的值会立即改变；而改变 arguments 中的值，参数变量也会对应改变。
*/
function sidEffecting(ary) {
  ary[0] = ary[2];
}

function bar(a, b, c) {
  c = 10;
  console.log('⚔️⚔️⚔️⚔️⚔️', arguments);
  sidEffecting(arguments);
  return a + b + c;
}

console.log(bar(1, 1, 1));