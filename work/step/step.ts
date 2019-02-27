
let num:number = 0;
function tiao(arr:Array<any>) {
    for (let i = 1; i <= 2; i++) {
        let _res = [...arr]
        // console.log(_res)
        if (i + (arr.length > 0 ? arr.reduce((a, b) => a + b) : 0) === 10) {
            _res.push(i)
            num++;
            console.log(_res, '===', num); 
        } else if (i + (arr.length > 0 ? arr.reduce((a, b) => a + b) : 0) < 10) {
            _res.push(i)
            tiao(_res)
        }
    }
}
tiao([])
function printLine(n){
    for(let x=0;x<=n;x++){
        for(let y = 0;y<=n/2;y++){
            if((x+2*y)==n){
                console.log("x="+x+"|y="+y);
                console.log(x+y)
            }
        }
    }
}
printLine(10)
function jumpFloor(s) {
    if(s<=0)return 0;
    if(s == 1) return 1;
    if(s==2) return 2;
    return jumpFloor(s-1) + jumpFloor(s-2)
}
console.log(jumpFloor(10))