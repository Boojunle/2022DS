const Live = 1;  // 表示活细胞
const Dead = 0;  // 表示死细胞

class Life {
    constructor(_row, _col) {
        this.row = _row;    // 行数
        this.col = _col;    // 列数
        this.grid = Array.from({ length: _row }, () => Array(_col).fill(Dead)); // 使用 Array.from 初始化二维数组
    }

    // 初始化方法，接受参数来控制初始状态
    initialize = function(liveCells = [[1, 1], [1, 2], [1, 3], [1, 4]]) {
        // 将给定的坐标设置为 Live
        liveCells.forEach(([r, c]) => {
            if (r >= 0 && r < this.row && c >= 0 && c < this.col) {
                this.grid[r][c] = Live;
            }
        });
    }

    // 更新方法，计算下一代状态
    update = function() {
        const nextGrid = this.grid.map(row => [...row]);  // 使用 map 创建浅拷贝，替代 JSON 深拷贝
        let neighborCount;

        for (let _row = 0; _row < this.row; _row++) {
            for (let _col = 0; _col < this.col; _col++) {
                neighborCount = this.neighborCount(_row, _col);  // 计算邻居数量
                const cellStatus = this.getStatusAt(_row, _col); // 存储当前细胞状态

                // 按照生命游戏规则更新状态
                if (cellStatus === Live && (neighborCount <= 1 || neighborCount >= 4)) {
                    nextGrid[_row][_col] = Dead;
                } else if (cellStatus === Dead && neighborCount === 3) {
                    nextGrid[_row][_col] = Live;
                }
            }
        }

        this.grid = nextGrid;  // 更新当前网格状态
    }

    // 计算给定细胞的邻居活细胞数量
    neighborCount = function(row, col) {
        let count = 0;
        const directions = [
            [-1, -1], [-1, 0], [-1, 1],
            [0, -1],         [0, 1],
            [1, -1], [1, 0], [1, 1]
        ];

        directions.forEach(([dx, dy]) => {
            count += this.getStatusAt(row + dx, col + dy);
        });

        return count;   // 返回邻居数量
    }

    // 获取指定位置的细胞状态，超出边界返回 Dead
    getStatusAt = function(row, col) {
        return (row < 0 || col < 0 || row >= this.row || col >= this.col) ? Dead : this.grid[row][col];
    }

    // 可视化当前网格状态（控制台输出）
    draw = function() {
        console.clear();
        console.log(this.grid.map(row => row.map(cell => (cell === Live ? '■' : '□')).join(" ")).join("\n"));
    }
}

// 使用示例
const myGame = new Life(10, 10);
myGame.initialize();   // 默认初始化
myGame.draw();         // 绘制初始状态
myGame.update();       // 更新至下一代
myGame.draw();         // 绘制下一代状态
