interface Num {
    num: number
}
let gather: Num = {
    num: 4
}
function Combination(m,n){
    console.log( m, '====', n)
    if(n == 0) return 1;  //每行第一个数为1
    else if(m == n) return 1; //最后一个数为1
    //其余都是相加而来 
    else return Combination(m-1,n-1)+Combination(m-1,n);
}

function Pascal (n) {
    for( var i = 0 ; i < n ; i++ ){   //一共N行
        for ( var j = 0 ; j <= i ; j++ ) {  //每行数字的个数即为行号、例如第1行1个数、第2行2个数
            document.write(Combination(i,j)+"  ");
            // console.log(Combination(i,j))
        }
        document.write("<br/>");
    }
}

Pascal(gather.num)