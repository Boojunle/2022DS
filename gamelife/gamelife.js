const Live = 1;  // 定义表示“活细胞”的常量
const Dead = 0;  // 定义表示“死细胞”的常量
Life.prototype.createMap = createMap;
// // 创建地图方法，用于显示细胞状态
// createMap = function() {
//     var map = '';
//     for (let _row = 0; _row < this.row; _row++) {
//         for (let _col = 0; _col < this.col; _col++) {
//             if (this.grid[_row][_col] == Live) {
//                 map += 'O ';  // 活细胞用 'O' 表示
//             } else {
//                 map += '. ';  // 死细胞用 '.' 表示
//             }
//         }
//         map += '\n';  // 换行
//     }
//     console.log(map);  // 打印地图
// }

// // 在 Life 类中添加 createMap 方法

class Life {
    constructor(_row, _col) {
        this.row = _row;    // 存储行数
        this.col = _col;    // 存储列数
        this.grid = [];     // 创建一个用于保存细胞状态的二维数组
        
        // 初始化二维数组，每个元素初始化为 Dead（0）
        for (var _row = 0; _row < this.row; _row++) {
            this.grid.push([]);   // 在grid中添加一行
            for (var _col = 0; _col < this.col; _col++) {
                this.grid[_row].push(Dead);  // 每行的每个单元格初始状态为 Dead
            }
        }
    }

    // 初始化方法，用于设置特定位置的细胞为 Live
    initialize = function() {
        this.grid[1][1] = Live;        // 设置坐标 (1,1) 为活细胞
        this.grid[1][2] = this.grid[1][3] = this.grid[1][4] = Live; // 设置坐标 (1,2), (1,3), (1,4) 为活细胞
    }

    // 更新方法，计算下一代细胞状态
    update = function() {
        var nextGrid = JSON.parse(JSON.stringify(this.grid));  // 复制当前状态网格，以存储下一代的状态
        var neighbor;   // 用于存储邻居活细胞数量
        
        // 遍历所有细胞，计算每个细胞的邻居数量
        for (let _row = 0; _row < this.row; _row++) {
            for (let _col = 0; _col < this.col; _col++) {
                neighbor = this.neighborCount(_row, _col);  // 计算邻居活细胞的数量
                
                // 根据细胞生存规则更新细胞状态
                if (this.getStatusAt(_row, _col) == Live && (neighbor <= 1 || neighbor >= 4)) {
                    nextGrid[_row][_col] = Dead;  // 如果活细胞邻居小于等于1或大于等于4，则死亡
                }
                if (this.getStatusAt(_row, _col) == Dead && neighbor == 3) {
                    nextGrid[_row][_col] = Live;  // 如果死细胞有3个邻居活细胞，则复活
                }
            }
        }

        // 更新当前网格为下一代状态
        this.grid = nextGrid;
    }

    // 计算给定细胞的邻居活细胞数量
    neighborCount = function(row, col) {
        var count = 0;
        count += this.getStatusAt(row - 1, col - 1);  // 左上
        count += this.getStatusAt(row - 1, col);      // 上
        count += this.getStatusAt(row - 1, col + 1);  // 右上
        count += this.getStatusAt(row, col - 1);      // 左
        count += this.getStatusAt(row, col + 1);      // 右
        count += this.getStatusAt(row + 1, col - 1);  // 左下
        count += this.getStatusAt(row + 1, col);      // 下
        count += this.getStatusAt(row + 1, col + 1);  // 右下
        return count;   // 返回活细胞数量
    }

    // 获取指定位置的细胞状态，超出边界返回 Dead
    getStatusAt = function(row, col) {
        if (row < 0 || col < 0 || row >= this.row || col >= this.col) {
           return Dead;  // 超出边界返回 Dead
        } else {
            return this.grid[row][col];  // 返回当前状态
        }
    }
}

// 创建两个不同大小的Life实例
var myGame = new Life(10, 10);  // 10x10 网格
var myGame2 = new Life(100, 100);  // 100x100 网格

myGame.initialize();  // 初始化 myGame 网格
myGame.update();  // 更新 myGame 网格状态至下一代
