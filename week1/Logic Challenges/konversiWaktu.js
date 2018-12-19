function konversiMenit(menit){
    var sisa = menit / 60
    var sisaBagi = menit % 60
    if(sisaBagi <= 9){
        return Math.floor(sisa) + ':0' + sisaBagi
    } else {
        return Math.floor(sisa) + ':' + sisaBagi
    }
}

// TEST CASES
console.log(konversiMenit(63)); // 1:03
console.log(konversiMenit(124)); // 2:04
console.log(konversiMenit(53)); // 0:53
console.log(konversiMenit(88)); // 1:28
console.log(konversiMenit(120)); // 2:00
