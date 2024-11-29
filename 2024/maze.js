var MAZE = [
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], // 迷宮地圖
    [1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1],
    [1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1],
    [1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1],
    [1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1],
    [1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1],
    [1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1],
    [1, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
]; // 1 表示牆壁，0 表示可通行的路徑

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
var Stack = []; // 堆疊，用於儲存走過的路徑
var step = start; // 目前所在的位置
var rollBack = false; // 是否需要回退

var ary = [1, 5, 6, 2, 9];
ary.sort((a, b) => { return b - a }) // 降序排序
ary.sort((a, b) => { return Math.random() - 0.5 }); // 隨機排序

var dir = [{ x: -1, y: 0 }, { x: 1, y: 0 }, { x: 0, y: -1 }, { x: 0, y: 1 }];
dir.sort((a, b) => { return b.x - a.x }); // 根據 x 座標降序排序
dir.sort((a, b) => { return Math.random() - 0.5 }); // 隨機排序

function go() {
    Stack.push(step);
    while (!step.isEnd()) {
        drawBoard()
        MAZE[step.row][step.col] = 2; // 將走過的路徑標記為 2
        if (MAZE[step.row + dir[0].x][step.col + dir[0].y] == 0) { // 如果步數上方為 0
            if (rollBack) {
                Stack.push(step)
                rollBack = false;
            }
            step = new Point(step.row + dir[0].x, step.col + dir[0].y);
            Stack.push(step);
        } else if (MAZE[step.row + dir[1].x][step.col + dir[1].y] == 0) { // 如果步數下方為 0
            if (rollBack) {
                Stack.push(step)
                rollBack = false;
            }
            step = new Point(step.row + dir[1].x, step.col + dir[1].y);
            Stack.push(step);

        } else if (MAZE[step.row + dir[2].x][step.col + dir[2].y] == 0) { // 如果步數左方為 0
            if (rollBack) {
                Stack.push(step)
                rollBack = false;
            }
            step = new Point(step.row + dir[2].x, step.col + dir[2].y);
            Stack.push(step);

        } else if (MAZE[step.row + dir[3].x][step.col + dir[3].y] == 0) { // 如果步數右方為 0
            if (rollBack) {
                Stack.push(step)
                rollBack = false;
            }
            step = new Point(step.row + dir[3].x, step.col + dir[3].y);
            Stack.push(step);
        } else // 如果四個方向都無法前進
            if (Stack.length > 0) {
                step = Stack.pop();
                rollBack = true;
            }
            else
                break;
    }
    if (Stack.length == 0)
        console.log("No solution!"); // 無解
    else {
        console.log("Done!"); // 完成
        drawPath(Stack); // 繪製路徑
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
                canvas.fillStyle = "#ffffff" // 可通行路徑顏色
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
