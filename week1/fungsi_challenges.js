// soal 1
// function shoutOut(){
//     var string = "Hello Function";
//     return string;
// }
// console.log(shoutOut())

// soal 2
// function calculateMultiply(num1, num2){
//     var hasil = num1 * num2
//     return hasil
// }

// var hasilPerkalian = calculateMultiply(5,6)
// console.log(hasilPerkalian)

// soal 3
var name = "Agus"
var age = 30
var address = "Jln. Malioboro, Yogjakarta";
var hobby = "gaming";

function processSentence(name, age, address, hobby) {
    var fullSentence = "Nama saya " + name + "umur saya " + age + " tahun, alamat "+ address + "dan Hobi Saya " + hobby ;
    return fullSentence;
}
var dataDiri = processSentence(name, age, address, hobby)
console.log(dataDiri)