var ary2d=[
    [1,2,3], //index 0
    [4,5,6], //index 1
    [7,8,9]  //index 2
];
var Ans=[0,1,2,3,4,5,6,7,8,9];
 //get index 0 at Ans:   Ans[0]
 //get 6 in ary2d?
//  ary2d[1].push("N");
//  [
//     [1,2,3], //index 0
//     [4,5,6,"N"], //index 1
//     [7,8,9]  //index 2

// ];
//  ary2d.push("N")
//  [
//     [1,2,3], //index 0
//     [4,5,6], //index 1
//     [7,8,9],  //index 2
//     "N"
// ];

//push ["A","B","C"] to ary2d?
var row=9, col=7;
var dynaAry2d=[];
var count = 0; // 初始化 count 为 0
for(var _row=0;_row<row;_row++){
    dynaAry2d.push([]);
    for(var _col=0;_col<col;_col++){
        dynaAry2d[_row].push(count++);//确保二維裏的每个元素都+1
    }
}
