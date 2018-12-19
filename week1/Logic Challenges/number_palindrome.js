function angkaPalindrome(num) {
  // you can only write your code here!
  //console.log(String(num).length);
    var numBalik="";
    var i = true;
    var result;
    // result = num.toString().split('').reverse().join('')
    while(i){
        num++;
        // fungsi bawaan javascript membalik kata 
        numBalik = num.toString().split('').reverse().join('')
        if(String(num) === numBalik){
        i = false;
        result = num;
        }
    }
    return  result    
}
// TEST CASES
console.log(angkaPalindrome(8)); // 9
console.log(angkaPalindrome(10)); // 11
console.log(angkaPalindrome(117)); // 121
console.log(angkaPalindrome(175)); // 181
console.log(angkaPalindrome(1000)); // 1001