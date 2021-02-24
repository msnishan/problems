// 13 = 1 1 0 1, 1 => 1 1 1 1 => 15
function setNthBit(num, pos) {
    num  = num | (1 << pos);
    return num; 
}

// 13 = 1 1 0 1, 2 => 1 0 0 1 => 9
function unsetNthBit(num, pos) {
    num  = num & (~(1 << pos));
    return num; 
}

// 13 = 1 1 0 1, 2 => 1 0 0 1 => 9
// 13 = 1 1 0 1, 1 => 1 1 1 1 => 15

function toggleNthBit(num, pos) {
    num  = num ^ (1 << pos);
    return num; 
}

// 13 = 1 1 0 1, 1 => false
// 13 = 1 1 0 1, 2 => true
function isNthBitSet(num, pos) {
    res = num & (1 << pos);
    return !!res;
}

// 20 = 10100 => 10000 => 16
// 15 = 1111  => 1110 => 14
// 16 = 10000 => 00000 => 0
function unsetLastSetBit(num) {
    return num & (num - 1);
}

//10 = 1010 => 2
//12 = 1100 => 4
function lowestSetBit(num) {
    return num & (-num);
}

// 31 = 11111, 2 => 11111 & 11000 => 11000 = 24
// 01000 => 01000 - 1 => ~(01000 - 1) => ~(00111) => 11000    
function clearAllBitsFromLeftToNth(num, pos) {
    return num & ~((1 << pos + 1) - 1);
}

// 31 = 11111, 2 => 11111 & 00011
// 00100 => 00100 - 1 => 00011
function clearAllBitsFromRightToNth(num, pos) {
    return num & ((1 << pos )- 1);
}

// 31 = 11111 => 5
//  11111 & 11110 => 11110 1
//  11110 & 11101 => 11100 2
//  11100 & 11011 => 11000 3
//  11000 & 10111 => 10000 4 
//  10000 & 01111 => 00000 5

// 13 = 1101 => 3
// 1101 & 1100 => 1100 1
// 1100 & 1011 => 1000 2
// 1000 & 0111 => 0000 3
function countSetBits(num) {
    let count = 0;
    while(!!num) {
        num = num & (num - 1);
        count++;
    }
    return count;
}

// 32 => 5
// 1 => 0
// 2 =>. 1
function logBase2(num) {
    let count = 0;
    while(!!num) {
        num = num >> 1;
        count++;
    }
    return count - 1;
}

// 32 = 100000 => true
// 100000 & 011111 = 0 => true
// 100000 - 1 => 011111
// 13 = 1101 => false
// 1101 - 1 = 1100 & 1101 != 0
function checkIfPowerOfTwo(num) {
    return num >= 1 && (num & (num - 1)) === 0;
}

// console.log(setNthBit(13, 1));
// console.log(setNthBit(12, 0));
// console.log(toggleNthBit(13, 2));
// console.log(toggleNthBit(13, 1));
// console.log(isNthBitSet(13, 2));
// console.log(~10);    // 1's complement 
// console.log(~10 + 1); // 2's complement
// unsetLastSetBit(16);
// lowestSetBit(12);
// clearAllBitsFromLeftToNth(31, 2);
// clearAllBitsFromLeftToNth(27, 2);
// clearAllBitsFromRightToNth(215, 4);
// console.log(-110>>1) //devide by 2
// countSetBits(32);
// logBase2(1);
// checkIfPowerOfTwo(1);