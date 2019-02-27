let user = '傲傲';
let jh = {
    user: '傲傲',
    age: 19,
    work: 'web前端高级开发'
}
interface Person {
    user: string,
    age: number,
    work: string
}
function Greeter(jh: Person ){
    return `名字${jh.user},年龄${jh.age},工作是${jh.work}`
}

console.log(Greeter(jh))
document.body.innerHTML = Greeter(jh)