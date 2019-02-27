interface Card {
    suit: Array<Array<any>>
}

interface Some {
    matrix: number;
    dimension: Array<Array<any>>;
    mapArr(this: Some): () => Card;
}

let some: Some = {
    matrix: 6,
    dimension: [],
    mapArr: function(this:Some) {
        let newArr = [...this.dimension]
        let newStr = [];
        return () => {
            [...newArr].forEach((item,index) => {
                newStr.push([])
                item.forEach((itm,ind) => {
                    newStr[index][ind] = newArr[ind][item.length -1 - index]
                })
            })
            return { suit: newStr}
        }
    }
}
function SomeArray(some) {
    for(let i=0; i<some.matrix; i++){
        let Arr = [];
        for(let j=1; j<=some.matrix; j++){
            Arr.push(j)
        }
        some.dimension.push([...Arr])
    }
    return some.dimension;
}
SomeArray(some)
let maparr = some.mapArr();
let jg = maparr();
console.log(jg.suit)
// document.body.innerHTML = maparr()