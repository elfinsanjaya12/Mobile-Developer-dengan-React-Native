
// function changeMe(arr) {
//     // you can only write your code here!
//     for(var i = 0; i < arr.length; i++){
//       console.log(i+ 1 + '. ' + arr[i][0] + ' ' + arr[i][1] + ':');    
//       if(arr[i][3] ===  undefined){
//          var age = 'Invalid Birth Year';
//       } else {
//          var age = 2018 - arr[i][3];
//       }
//       var person = { firstName: arr[i][0], lastName: arr[i][1], gender: arr[i][2], age: age};
//       console.log(person);
//     }
//   }
  
//   // TEST CASES
//   changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']]); // 1. Christ Evans:
//   // { firstName: 'Christ',
//   //   lastName: 'Evans',
//   //   gender: 'Male',
//   //   age: 36 }
//   // 2. Robert Downey:
//   // { firstName: 'Robert',
//   //   lastName: 'Downey',
//   //   gender: 'Male',
//   //   age: 'Invalid Birth Year' }
//   changeMe([]); // ""


// Logic Challenge - Shopping Time!
// function shoppingTime(memberId, money){
//     if(memberId == ''){
//         return 'Mohon maaf, toko X hanya berlaku untuk member saja';
//     }else if (money <= 50000) {
//         return 'Mohon maaf, uang tidak cukup';
//     }

//     var shopping = { memberId: memberId, money: money }
//     var listPurchased = []

//     if (money >= 1500000) {
//         listPurchased.push('Sepatu brand Stacattu seharga 1500000');
//         money = money - 1500000;
//     }
//     if (money >= 500000) {
//         listPurchased.push('Baju Brand Zoro seharga 500000');
//         money = money - 500000;
//     }
//     if (money >= 250000) {
//         listPurchased.push('Baju brand H&N seharga 250000');
//         money = money - 250000;
//     }
//     if (money >= 175000) {
//         listPurchased.push('Sweater brand Uniklooh seharga 175000');
//         money = money - 175000;
//     }
//     if (money >= 50000) {
//         listPurchased.push('Casing Handphone seharga 50000');
//         money = money - 50000;

//     }

//     shopping.listPurchased = listPurchased;
//     shopping.changeMoney = money;
//     return shopping;
// }

// console.log(shoppingTime('1820RzKrnWn08', 2475000));

// console.log(shoppingTime('82Ku8Ma742', 170000));
// { memberId: '82Ku8Ma742',
// money: 170000,
// listPurchased:
//  [ 'Casing Handphone' ],
// changeMoney: 120000 }
// console.log(shoppingTime('', 2475000));
// console.log(shoppingTime('234JdhweRxa53', 15000));
// console.log(shoppingTime()); 
// ===========================================================

// Logic Challenge - Toko X
function countProfit(shoppers) {
    let listBarang = [ ['Sepatu Stacattu', 1500000, 10],
                       ['Baju Zoro', 500000, 2],
                       ['Sweater Uniklooh', 175000, 1]
    ];
    if(shoppers.length == 0){
        return []
    }

    var listObjectBarang = [];
    for(var i = 0; i < listBarang.length; i++){
      var barang = { product: listBarang[i][0],
                     shoppers: [],
                     totalProfit: 0,
                     leftOver: listBarang[i][2]
                   };
       listObjectBarang.push(barang);
    }

    for(var i = 0; i < shoppers.length; i++){
        for(var j = 0; j < listBarang.length; j++){
          if(listBarang[j][0] === shoppers[i].product && listBarang[j][2] >= shoppers[i].amount){
            for(var k = 0; k < listObjectBarang.length; k++){
                 if(shoppers[i].product === listObjectBarang[k].product){
                   listObjectBarang[k].leftOver -= shoppers[i].amount;
                   listObjectBarang[k].totalProfit += listBarang[j][1] * shoppers[i].amount;
                   listObjectBarang[k].shoppers.push(shoppers[i].name);
                   listBarang[j][2] -= shoppers[i].amount;
    
                 } 
            }
            //end for list object barang
          }     
        }    
        //end for listBarang
      }
      //end for shoppers
      return listObjectBarang;
}

console.log(countProfit([{name: 'Windi', product: 'Sepatu Stacattu', amount: 2}, {name: 'Vanessa', product: 'Sepatu Stacattu', amount: 3}, {name: 'Rani', product: 'Sweater Uniklooh', amount: 2}]));