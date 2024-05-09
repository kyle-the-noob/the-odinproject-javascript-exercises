const fibonacci = function(num) {
    let a = 0;
    let b = 1;
    num = +(num);
    if (num === 0) {
        return 0
    } else if (num < 0){
        return "OOPS";
    } else {
        for(let i = 0; i < (num -1); i++){
            let c = a + b;
            a = b;
            b = c;
        }
        return b;
    }
};

// Do not edit below this line
module.exports = fibonacci;
