(function () {
    var msg = "BlueKeKe"
    function f () { console.log(`f() ${msg.toUpperCase()}`) }
    function g () { console.log(`g() ${msg.toLowerCase()}`)}
    window.module2 = { f, g }
})()