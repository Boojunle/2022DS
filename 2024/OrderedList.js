// write an ordered list class using binary serarch in javascript
// 使用二分查找实现一个有序列表类
class OrderedList extends Array {
    constructor(...elements) {
        super(...elements);
        // 初始化时对数组进行排序，确保有序
        this.sort((a, b) => a - b);
    }

    // 私有方法：二分查找目标元素的位置
    _binarySearch(element) {
        let low = 0; // 左边界
        let high = this.length - 1; // 右边界

        while (low <= high) {
            const mid = Math.floor((low + high) / 2); // 计算中间位置
            if (this[mid] === element) {
                return mid; // 找到元素，返回其索引
            } else if (this[mid] < element) {
                low = mid + 1; // 在右半部分继续查找
            } else {
                high = mid - 1; // 在左半部分继续查找
            }
        }

        return -1; // 未找到元素，返回 -1
    }

    // 私有方法：找到插入新元素的正确位置
    _findInsertIndex(element) {
        let low = 0; // 左边界
        let high = this.length - 1; // 右边界

        while (low <= high) {
            const mid = Math.floor((low + high) / 2); // 计算中间位置
            if (this[mid] < element) {
                low = mid + 1; // 移动到右半部分
            } else {
                high = mid - 1; // 移动到左半部分
            }
        }

        return low; // 返回新元素的插入位置索引
    }

    // 方法：向有序列表中添加一个新元素
    add(element) {
        // 如果元素已经存在，则不添加
        if (this._binarySearch(element) !== -1) {
            return;
        }
        // 找到插入位置
        const index = this._findInsertIndex(element);
        // 将新元素插入到指定位置
        this.splice(index, 0, element);
    }

    // 方法：查找元素是否存在
    search(element) {
        // 使用二分查找，返回布尔值
        return this._binarySearch(element) !== -1;
    }
}

// 示例用法：
const orderedList = new OrderedList();
orderedList.add(10); // 添加 10
orderedList.add(5);  // 添加 5
orderedList.add(20); // 添加 20
orderedList.add(15); // 添加 15
orderedList.add(20); // 尝试添加重复元素 20，不会重复添加
orderedList.add(22); // 添加 22
orderedList.add(19); // 添加 19
console.log(orderedList); // 输出: [5, 10, 15, 19, 20, 22] （始终保持有序）

console.log(orderedList.search(15)); // 输出: true （找到元素 15）
console.log(orderedList.search(30)); // 输出: false （未找到元素 30）

orderedList.add(1); // 添加 1
console.log(orderedList); // 输出: [1, 5, 10, 15, 19, 20, 22]
