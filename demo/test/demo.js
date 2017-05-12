/**
 * Created by py on 2017/4/12.
 */

/*var foo='get-element-by-id';
var b = foo.split('-');
var bb=b[0];
(function () {
    for(var i=1;i<b.length;i++){
        bb+= b[i].slice(0, 1).toUpperCase() + b[i].slice(1);
    }
    console.log(bb);
}());*/

/*var obj1 = {
    b:'1',
    a:function () {
        alert(this.b)
    }
};
var obj2={
    b:"2"
};
console.log(obj1.a.call(obj2));*/

/*
var time = new Date();
//年
var year = time.getFullYear();
//月
var mouth = time.getMonth()+1;
mouth= mouth<10?'0'+mouth:mouth;
//日
var day = time.getDay();
day= day<10?'0'+day:day;

alert(year+'-'+mouth+'-'+day);*/

/*
var foo = 1;
(function add(){
    console.log(foo);
    var foo = 2;
    console.log(foo);
}())*/
//用js实现随机选取10–100之间的10个数字，存入一个数组，并排序。



//随机10-100十个数，逆序排列
/*
var numList= new Set();
var arr=[];
for (var i=0;arr.length=10;i++){
    var num = Math.round(10+(Math.random()*90));
    numList.add(num);
    arr=[...numList];
    if(arr.length==10){
        break
    }
}
var fished=(arr.sort(function (a,b) {
    return b-a
}));
alert(fished);*/
//合并两个数组
/*var array1 = ['a','b','c'];
var bArray = ['d','e','f'];
var arr =   array1.concat(bArray);
var arr2 = arr.splice(1,1);
console.log(arr);*/

//深复制
/*
function clone(Obj) {
    var buf;
    if (Obj instanceof Array) {
        buf = [];                    //创建一个空的数组
        var i = Obj.length;
        while (i--) {
            buf[i] = clone(Obj[i]);
        }
        return buf;
    }else if (Obj instanceof Object){
        buf = {};                   //创建一个空对象
        for (var k in Obj) {           //为这个对象添加新的属性
            buf[k] = clone(Obj[k]);
        }
        return buf;
    }else{                         //普通变量直接赋值
        return Obj;
    }
}
var b = {
    a:1
};
alert(clone(b.a))*/

//自己尝试深复制
/*function clone(obj) {
    var res;
    if(obj instanceof Array){
        res=[];
        var i = obj.length;
        while(i--){
            res[i]=obj[i]
        }
        return res
    }else if(obj instanceof Object){
        res={};
        for(var k in obj){
            res[k]=obj[k]
        }
        return res
    }else {
        return obj
    }
}

var a={
    c:function () {
        return (1)
    }
};
var b=[1,2,3];
var c='string';
var d=undefined
console.log(clone(a),clone(b),clone(c),clone(d));*/

//闭包
/*
var data = [];

for (var k = 0; k < 3; k++) {
    data[k] = (function _helper(x) {
        return function () {
            return x
        };
    })(k); // 传入"k"值
}
console.log(data[0]());
console.log(data[1]());
console.log(data[2]());
*/



//bibao

/*
var arr=[];
for(var i =0;i<arr.length;i++){
    arr[i]=(function (x) {
        return function () {
            return x
        }
    })(k)
}
*/

/*
for(var i=1;i<=3;i++){
   fin(i)
}
function fin(i) {
    console.log(i)
}
setTimeout(
fin(i),0);
*/


/*
var num = 12345678 +'';
(function aa() {
    var numa=num.split('');
    var c = numa.splice(2,0,',');
    var b = numa.splice(6,0,',');
    var f= numa.join('');
    console.log(f)
}());
*/

/*(function () {
    var numList= new Set();
    var arr=[];
    for (var i=0;arr.length=5;i++){
        var num = Math.round((Math.random()*10));
        numList.add(num);
        arr=[...numList];
       /!* if(arr.length==5){
            break
        }*!/
    }
    console.log(arr)
}())*/

/*

var numList= new Set();
var arr=[];
for (var i=0;arr.length=10;i++){
    var num = Math.round(10+(Math.random()*90));
    numList.add(num);
    arr=[...numList];
    if(arr.length==10){
        break
    }
}
var fished=(arr.sort(function (a,b) {
    return b-a
}));
alert(fished);*/


/*
function m(a,b) {
    var v
    for(var i = 0 ;i<999;i++){
         v = a-b*i;
        if(v<0){
            break
        }
    }
    console.log(v+b)
}
m(12,5)*/
/*for(var i=0;i<5;++i){
    setTimeout((function(){
        console.log(i+'');
    }(i)),100*i);
}*/


(function () {
    var num= [5,2,3,6,8,6,5,4,7,1,9];
    var hh = new Set(num);
    var m = Array.from(hh)

     f=  m.sort(function (a,b) {
        return b-a
    })


   console.log(f)

}())
