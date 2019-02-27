interface Factorial {
    (num: number) :{ number: number, newnum:number }
}

let factorial: Factorial = (function (num) {
    let number = num;
    let newnum = 1;
    for( let i=num; i>1; i--){
        number += (function (n) {
            return (n * (i - 1) - n)
        })(number)
    }
    for( let j=num; j>0; j--){
        newnum *= (function(j){
            return j 
        })(j)
    }
    return {
        number,
        newnum
    }
})
console.log(factorial(10))


/* 阶乘 */


interface ReArray  {
    (num: number) :Array<number>  
}
let mathArray:ReArray = (function(num) {
    let newarr = [];
    for(let i=0; i<num; i++){
        newarr.push(Math.floor(Math.random() * 101 + 1))
    }
    return newarr;
})

let arr = mathArray(10)
let arr1 = mathArray(9)

interface Rank {
    arr: Array<number>,
    even?: string
}

function sortRank(arr) {
    let even;
    arr.sort((a,b) => {
        return b - a;
    })
    if( arr.length%2 === 1 ) {
        let even = arr.splice(0,1).join()
        return rank({arr, even})
    }else{
        return rank({arr})
    }
}
let rank = (function (obj: Rank): Array<number> {
    let sortarr = [];
    let right = [];
    obj.arr.forEach( (v,i) => {
        if( i%2 === 0){
            sortarr.unshift(v)
        }else{
            right.push(v)
        }
    })
    if( !!obj.even ) {
        sortarr.push( +obj.even )
    }
    console.log(sortarr,right)
    // console.log(sortarr.concat(right))
    return sortarr.concat(right)
})

console.log(sortRank(arr), 'arr')
console.log(sortRank(arr1), 'arr1')

