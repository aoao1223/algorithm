var user = '傲傲';
var jh = {
    user: '傲傲',
    age: 19,
    work: 'web前端高级开发'
};
function Greeter(jh) {
    return "\u540D\u5B57" + jh.user + ",\u5E74\u9F84" + jh.age + ",\u5DE5\u4F5C\u662F" + jh.work;
}
console.log(Greeter(jh));
document.body.innerHTML = Greeter(jh);
