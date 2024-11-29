var MAZE = [
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], // 迷宮地圖，1代表牆壁
    [1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1], // 0代表可通行的路徑
    [1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1],
    [1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1],
    [1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1],
    [1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1],
    [1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1],
    [1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1],
    [1, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
]; //1,1  終點:8,10

class Point {
    constructor(_row, _col) {
        this.row = _row; // 紀錄點的行數
        this.col = _col; // 紀錄點的列數
    }
    isEnd() {
        return this.row === end.row && this.col === end.col; // 判斷是否為終點
    }
}

var start = new Point(1, 1); // 起點座標
var end = new Point(8, 10); // 終點座標
var Stack = []; // 使用堆疊來儲存走過的點
var step = start; // 目前所在的點
var rollBack=false; // 是否需要回溯（插旗）

var ary=[1,5,6,2,9]; 
//var ary=[2,4,5,8,3];//
//ary.sort((a,b)=>{return b+a}) // 陣列排序，由大到小，根据元素的和排序//
ary.sort((a,b)=>{return b-a}) // 陣列排序，由大到小(必考return)
ary.sort((a,b)=>{return Math.random()-0.5}); // 陣列排序，隨機排序

var dir=[{x:-1,y:0}, {x:1,y:0},{x:0,y:-1},{x:0,y:1}];
dir.sort((a,b)=>{return b.x-a.x}); // 陣列排序，根據x座標由大到小
dir.sort((a,b)=>{return Math.random()-0.5}); // 陣列排序，隨機排序

function go() {
    Stack.push(step); // 將起點加入堆疊
    while (!step.isEnd()) { // 當目前所在的點不是終點時
        
        MAZE[step.row][step.col] = 2; // 將目前所在的點標記為已走過

        if (MAZE[step.row + dir[0].x][step.col+dir[0].y] == 0) { // 如果步數上方為0
            if(rollBack){
                Stack.push(step) // 將目前所在的點加入堆疊
                rollBack=false;
            }
            step = new Point(step.row + dir[0].x, step.col + dir[0].y); // 移動到上方的點
            Stack.push(step); // 將移動後的點加入堆疊
        } else if (MAZE[step.row + dir[1].x][step.col+dir[1].y] == 0) { // 如果步數下方為0
            if(rollBack){
                Stack.push(step) // 將目前所在的點加入堆疊
                rollBack=false;
            }
            step = new Point(step.row + dir[1].x, step.col + dir[1].y); // 移動到下方的點
            Stack.push(step); // 將移動後的點加入堆疊
            
        } else if (MAZE[step.row + dir[2].x][step.col+dir[2].y] == 0) { // 如果步數左方為0
            if(rollBack){
                Stack.push(step) // 將目前所在的點加入堆疊
                rollBack=false;
            }
            step = new Point(step.row + dir[2].x, step.col + dir[2].y); // 移動到左方的點
            Stack.push(step); // 將移動後的點加入堆疊
            
        } else if (MAZE[step.row + dir[3].x][step.col+dir[3].y] == 0) { // 如果步數右方為0
            if(rollBack){
                Stack.push(step) // 將目前所在的點加入堆疊
                rollBack=false;
            }
            step = new Point(step.row + dir[3].x, step.col + dir[3].y); // 移動到右方的點
            Stack.push(step); // 將移動後的點加入堆疊
        } else // 如果四個方向都無法前進
            if(Stack.length>0){
               step = Stack.pop(); // 從堆疊中取出上一個點
               rollBack=true;
            }
            else
               break;
    }
    if(Stack.length==0)
       console.log("No solution!"); // 無解
    else{
    console.log("Done!"); // 完成
    drawPath(Stack);
}
}
function drawPath(_stack) {
    _stack.forEach(item => {
        var canvas = document.getElementById("map").getContext("2d");
        var size = Math.min(canvas.canvas.height / MAZE.length, canvas.canvas.width / MAZE[0].length);
        canvas.fillStyle = "#ff0000";
        canvas.fillRect(item.col * size, item.row * size, size, size);
        //canvas.strokeRect(_col*size,_row*size,size,size);
    })

}

function drawBoard() {
    var canvas = document.getElementById("map").getContext("2d");
    var size = Math.min(canvas.canvas.height / MAZE.length, canvas.canvas.width / MAZE[0].length);
    for (var _row = 0; _row < MAZE.length; _row++) {
        for (var _col = 0; _col < MAZE[0].length; _col++) {
            //ar2d[_row][_col]=>0,1
            if (MAZE[_row][_col] == 1) {
                canvas.fillStyle = "#000000"
            } else if (MAZE[_row][_col] == 0) {
                canvas.fillStyle = "#ffffff"
            } else if (MAZE[_row][_col] == 2) {
                canvas.fillStyle = "#ffff00"
            }
            //600/5=>120  coordinate x,y , width, heigth
            canvas.fillRect(_col * size, _row * size, size, size);
            canvas.strokeRect(_col * size, _row * size, size, size);
        }
    }
}

// go();