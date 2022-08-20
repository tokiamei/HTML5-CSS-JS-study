function myModule() {
    // 私有
    var msg = "BlueKeKe"
    function f () { console.log(`f() ${msg.toUpperCase()}`) }
    function g () { console.log(`g() ${msg.toLowerCase()}`)}

    // 向外暴露对象，对象包含方法
    return { f, g }
}
// export {myModule}