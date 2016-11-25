// //Bom browser Object Model
// window.close(); //关闭窗口  方法
// window.closed;  //boolean  false   属性
// alert === window.alert;   //全等  true
// window.history.back     //历史 back返回历史 forget 前进
// //如果不是苹果的 safariy
// if (!safariyBrower) {
// }
// location    //位置对象
// location.host //主机加端口
// location.href //当前地址
// location.protocol //登口号  拿到地理位置
// screen  //屏幕
// screen.height   //屏幕高
// event     //浏览器事件对象
// var a = document.createElement('a');
// a.href;  //访问到属性位置
// //节点树
// document.body
// document.body.style.backgroundColor
//表单
// var table = <HTMLTableElement>document.getElementById('table');
// for (var i = 0; i < table.rows.length; i++) {
//     var row = table.rows.item(i);
//     if (++i) {
//         row.style.color = 'red';
//         row.style.background = 'yellow';
//     }
// }
//往表单插入100行
var table = document.getElementById('table');
for (var i = 0; i < 100; i++) {
    var row = table.insertRow();
    row.textContent = "新增一行";
    var _a = [parseInt(Math.random() * 10 + ''),
        parseInt(Math.random() * 10 + ''),
        parseInt(Math.random() * 10 + '')], r = _a[0], g = _a[1], b = _a[2];
    row.style.color = '#fff';
    row.style.background = "#" + r + g + b;
}
//# sourceMappingURL=1.js.map