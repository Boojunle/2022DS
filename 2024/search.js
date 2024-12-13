Array.prototype.sequentialSearch = function(target, key) {
    // 'this' 指向调用该方法的数组实例
    for (let i = 0; i < this.length; i++) {
        if (this[i][key] === target) {
            return i; // 返回目标元素的索引
        }
    }
    return -1; // 如果未找到目标值，返回 -1
};

// 示例用法
const data = [
    {name: "Amy", Age: 8}, 
    {name: "John", Age: 18}, 
    {name: "Bob", Age: 11}, 
    {name: "Coby", Age: 12}, 
    {name: "Dany", Age: 11}
];
const target = "Amy";
const key = "name";

const index = data.sequentialSearch(target, key);
if (index !== -1) {
    console.log(`元素在索引 ${index} 处被找到`);
} else {
    console.log('数组中未找到该元素');
}
