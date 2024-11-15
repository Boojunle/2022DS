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
function bracketMatch(inputString) {
    var stack = [];
    var isMatched = true;
    for (var i = 0; i < inputString.length; i++) {
        var symbol = inputString.charAt(i);
        if (symbol == '{' || symbol == '(' || symbol == '[') {
            stack.push(symbol);
        }
        if (symbol == '}' || symbol == ')' || symbol == ']') {
            if (stack.length == 0) {
                isMatched = false;
                break;
            } else {
                var match = stack.pop();
                isMatched = (symbol == '}' && match == '{') || (symbol == ')' && match == '(') || (symbol == ']' && match == '[');
                if (!isMatched) {
                    break;
                }
            }
        }
    }
    if (stack.length > 0 || !isMatched) {
        return 'unmatched';
    } else {
        return 'matched';
    }
}