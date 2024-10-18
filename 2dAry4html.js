var ary2d=[
    [1,1,1,0,1,1], //index 0
    [1,0,1,1,0,1], //index 1
    [1,1,0,1,0,1], //index 2
    [1,0,1,1,0,1], //index 3
    [1,1,1,0,1,1]   //index 4
];

var row=ary2d.length;
var col=ary2d[0].length;

//draw map
var canvas = document.getElementById("map").getContext("2d");
//var size=canvas.width/row
for(var _row=0;_row<row;_row++){
    for(var _col=0;_col<col;_col++){
        //ar2d[_row][_col]=>0,1
        if(ary2d[_row][_col]==1){
            canvas.fillStyle="#83FDF5"
        }else{
            canvas.fillStyle="#80F762"
        }
        //600/5=>120  coordinate, width, heigth
        canvas.fillRect(_col*100,_row*100,100,100);//col=x,row=y,width,height
        canvas.strokeRect(_col*100,_row*100,100,100);
    }
}