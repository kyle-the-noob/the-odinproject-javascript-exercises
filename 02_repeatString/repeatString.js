const repeatString = function(string, num) {
    let msg = '';
    if ( num <= -1 ) return "ERROR";
    for (let i = num; i>0; i--) {
        msg += string;
    } return msg;
}
// Do not edit below this line
module.exports = repeatString;
