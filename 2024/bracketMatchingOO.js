String.prototype.bm=function(){
    var left="{[(";
    var right="}])";
    var open=[] //stack
    var symbol = this.charAt(i=0);
    var isMatched = true;
    while(isMatched && symbol != ''){
        //if(symbol =='{' || symbol=='(' || symbol == '['){
        if(left.includes(symbol)){
            open.push(symbol);
        }
        //if(symbol=='}' || symbol==')' || symbol==']'){
        if(right.includes(symbol)){
            if(open.length==0)
                isMatched=false;
            else{
                match = open.pop();
                //isMatched = (symbol=='}' && match=='{') ||   (symbol==')' && match=='(') || (symbol==']' && match=='[');
                isMatched = left.indexOf(match) == right.indexOf(symbol);
            } 
        }
       // i++;//++i
        symbol = this.charAt(++i);
    }  
    if(open.length>0 || !isMatched)
        return 'unMatched';
    else
        return 'matched';
}

var test="{a = (1 + v(b[3 + c[4]]))";

console.log( test.bm());