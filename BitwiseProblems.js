//arr[] = {12, 1, 12, 3, 12, 1, 1, 2, 3, 3}  => 2
//arr[] = {10, 20, 10, 30, 10, 30, 30}  => 20 
function findElementAppearingOnce(arr) {   // Rest are appearing exactly 3 times. O(n) and O(1)

    let one = 0;
    let two = 0;
    let common;
    for (let i = 0; i < arr.length; i++) {
        two = two | one & arr[i];
        one = arr[i] ^ one;
        common = ~ (one & two);
        one = one & common;
        two = two & common;
    }
    return one;
}

//(110, 101, 110, 101, 111, 001, 111, 110, 101, 111)
// (110, 110, 110, 010)

// 2 = 000 => 000, 100 => 100, 110 => 010
// 1 = 110 => 110, 011 => 011, 101 => 001
// c = 111       , 111       , 011
// findElementAppearingOnce([13, 12, 13, 3, 13, 12, 12, -99, 3, 3]);


// 15 => 0000000000000000001111
// -5 => 1111111111111111111011
function oppositeSign(num1, num2) {
    return !((num1 ^ num2) >> 31);
}

// console.log(oppositeSign(-10, -10));

// 111 + 1
// 111 ^ 1 => 110 , 110 ^ 10 => 100, 100 ^ 100 => 000, 000 ^ 1000 => 1000 
function addOne(num) {
    let bit = 1;
    let temp = num ^ bit;
    while(temp < num)  {
        bit = bit << 1;
        temp = temp ^ bit;
    }
    return temp;
}

// addOne(23);

// x*3.5 = 2x + x + x/2
function multiplyByThreePoinrFive(num) {
    return (num << 1) + num + (num >> 1);
}
// multiplyByThreePoinrFive(5);

//x = 42 = 101010 => 101000
//41 =>    101001
//
function turnOffRightMostSetBit(num) {
    return num & (num - 1);
}

// turnOffRightMostSetBit(42);

// 16 = 000010000 => 4
// 64 = 001000000 => 6
//256 = 100000000 => 8
function isPowerOfFour(num) {
    let temp = num;
    while(temp > 1) {
        temp = temp >> 1;
        if (temp != 0) {
            temp = temp >> 1;
        } else {
            return false;
        }
    }
    return temp === 1 || num === 0;
}
// isPowerOfFour(512);

// 7, 2 => 3
// 7, 4 => 1
// 111, 100 => 1
// 45, 8 => 101101, 1000 => 5(101)
// 109, 16 => 1101101, 10000 => 6 (110)
function divByPowerOfTwo(num, d) {
    let base = 1;
    while(d != 2) {
        d = d >> 1;
        base++;
    }
    return num >> base;
}

// divByPowerOfTwo(45, 8);

// 45, 8 => 101101, 1000 => 5(101)
// 109, 16 => 1101101, 10000 => 13 (110)
function modDivByPowerOfTwo(num, d) {
    return num & (d - 1);
}


// bitsize - 8 : 00000010, 2 => 00001000
// 00001110, 7 => 11100000 => 1100001, 10000011, 00000111 
function rotateLeft(num, pos) {
    num << pos || num >> (32 - pos);
}

function rotateRight(num, pos) {
    num >> pos || num << (32 - pos);
}

function oddOccurance(arr) {
    return arr.reduce((a, b) => a ^ b);
}

// oddOccurance([1,1,1,1,9,2,2,2,2])

// num1 = 10 => 01010
// num2 = 16 => 10000
// num1 ^ num2 = 11010 
function bitFlipCount(num1, num2) {
    let num = num1 ^ num2;
    let count = 0;
    while(num) {
        num = num & (num - 1);
        count++;
    }
    return count;
}

// bitFlipCount(16, 16);

// 7x = 8x - x => 
function multiplyBySeven(num) {
    return (num << 3 ) - num;
}

// multiplyBySeven(8);

function convertToBinary(num) {

    let s = '';
    while(num) {
        s = (num % 2).toString() + s; 
        num = num >> 1;
    }
    return s;
}
// convertToBinary(255);

// 10000 => 4
// 10 => 1
function findTheOnlySetBit(num) {
    let count = 0;
    while(!!num) {
        num = num >> 1;
        count++;
    }
    return count - 1;
}
// findTheOnlySetBit(2);

// num1 => 10001  => num1 = 11010,  num1 ^ num2 = 01011 => num2 ^ num1 = 11010
// num1 => 11010  => num2 = 10001
function swap(num1, num2) {
    num1 = num1 ^ num2;
    num2 = num1 ^ num2;
    num1 = num1 ^ num2;
    console.log(num1);
    console.log(num2);
}

// swap(17, 26);

// 18   85
//---------------------------
// 9   170     170
// 4   340 
// 2   680     
// 1  1360    1360    => 1530
function russianPeasantMultiplication(num1, num2) {
    if (num1 === 1) {
        return num2;       
    } else if (num1 % 2 === 0) {
        return russianPeasantMultiplication(num1 >> 1, num2 << 1);
    } else
    {
        return num2 + russianPeasantMultiplication(num1 >> 1, num2 << 1);
    }
}

// russianPeasantMultiplication(100, 1);

// 11101, 10101 => 01000
//   29 ,    21 => 8
// 10 (1010), 5 (0101) => 15 (1111)  
function xorWithoutXorOperator(num1, num2) {
    return (num1 & ~num2) | (~num1 & num2);
}

// xorWithoutXorOperator(10, 5);

// x = 47 (00101111)
// p1 = 1 (Start from the second bit from the right side)
// p2 = 5 (Start from the 6th bit from the right side)
// n = 3 (No of bits to be swapped)
// Output:
// 227 (11100011)
function swapBitsFromPosition(num, pos1, pos2, count) {
    
}