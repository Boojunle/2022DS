// stack = []
// //#push//
// stack.append('A')
// stack.append('B')
// stack.append('C')
// print("stack:", stack)
// //#pop//
// element = stack.pop()
// print("Pop:", element)
// //#peek//
// top_element = stack[-1]
// print("Peek:", top_element)

// Function to check if brackets in a string are matched or unmatched
function bracketMatch(inputString) {
    var stack = []; // 初始化一个空栈
    var isMatched = true; // 变量用于跟踪括号是否匹配

    // 遍历输入字符串中的每个字符
    for (var i = 0; i < inputString.length; i++) {
        var symbol = inputString.charAt(i); // 获取当前字符

        // 如果字符是一个开括号，将其压入栈中
        if (symbol == '{' || symbol == '(' || symbol == '[') {
            stack.push(symbol);
        }

        // 如果字符是一个闭括号
        if (symbol === '}' || symbol === ')' || symbol === ']') {
            // 如果栈为空，表示没有匹配的开括号，所以将isMatched设置为false并跳出循环
            if (stack.length == 0) {
                isMatched = false;
                break;
            } else {
                var match = stack.pop(); // 从栈中弹出顶部元素

                // 检查闭括号是否与对应的开括号匹配
                isMatched = (symbol === '}' && match === '{') || (symbol === ')' && match === '(') || (symbol === ']' && match === '[');

                // 如果括号不匹配，将isMatched设置为false并跳出循环
                if (!isMatched) {
                    break;
                }
            }
        }
    }

    // 如果栈中还有未匹配的开括号或isMatched为false，则返回'unmatched'
    if (stack.length > 0 || !isMatched) {
        return 'unmatched';
    } else {
        return 'matched'; // 所有括号都匹配
    }
    console.log(bracketMatch("{{[()]}")); // matched
    console.log(bracketMatch("{{[()]}")); // unmatched
    console.log(bracketMatch("{{[()]}")); // unmatched
}