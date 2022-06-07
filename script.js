var plusOne = function(digits) {
    var moveable = digits.length-1
    var lastnum = digits[moveable] + 1
    digits[moveable] = lastnum;

    while(lastnum == 10) {
        if(moveable == 0) {
            digits[moveable] = 0;
            digits.unshift(1)
            lastnum = digits[moveable];

        } else {
            digits[moveable] = 0;
            moveable--;
            lastnum = digits[moveable] + 1
            digits[moveable]= lastnum;
        }

    }
    console.log(digits)
};




var digits1 = [9,9,9,1,9,9,9];
plusOne(digits1)