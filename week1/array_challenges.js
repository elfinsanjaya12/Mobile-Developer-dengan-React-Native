// Melakukan Looping Data Array versi 1
// function dataHandling(input) {
//     var input = [
//         ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
//         ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
//         ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
//         ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]
//     ]
//     return input    
// }

// var biodata = dataHandling([0])
// console.log('Nomor ID: ' + biodata[0][0]);
// console.log('Nama Lengkap: ' + biodata[0][1]);
// console.log('TTL: ' + biodata[0][2] + ' '+ biodata[0][3]);
// console.log('Hobi: ' + biodata[0][4] + '\n');

// var biodata = dataHandling([1])
// console.log('Nomor ID: ' + biodata[1][0]);
// console.log('Nama Lengkap: ' + biodata[1][1]);
// console.log('TTL: ' + biodata[1][2] + ' '+ biodata[1][3]);
// console.log('Hobi: ' + biodata[1][4] + '\n');

// var biodata = dataHandling([2])
// console.log('Nomor ID: ' + biodata[2][0]);
// console.log('Nama Lengkap: ' + biodata[2][1]);
// console.log('TTL: ' + biodata[2][2] + ' '+ biodata[2][3]);
// console.log('Hobi: ' + biodata[2][4] + '\n');

// var biodata = dataHandling([3]);
// console.log('Nomor ID: ' + biodata[3][0]);
// console.log('Nama Lengkap: ' + biodata[3][1]);
// console.log('TTL: ' + biodata[3][2] + ' '+ biodata[3][3]);
// console.log('Hobi: ' + biodata[3][4] + '\n');


// Melakukan Looping Data Array versi 2 

// function dataHandling() {
//     var input = [
//         ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
//         ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
//         ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
//         ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]
//     ]
    
//     for(var i = 0; i < input.length; i++) {
//         console.log('Nomor ID: ' + input[i][0])
//         console.log('Nama Lengkap : ' + input[i][1])
//         console.log('TTL : ' + input[i][2]+ ' ' + input[i][3])
//         console.log('Hobi : ' + input[i][4] + '\n')
//     }
//     return input
// }
// dataHandling()
// ==========================================================================
// Melakukan Looping Data Array versi 3
// function dataHandling(argumen){
  
//     var dumBacaBawah='';
    
//     for(var i=0; i<=argumen.length-1; i++){
//       dumBacaBawah
      
//       var dumBacaSamping='';
      
//       for(var j=0; j<=i; j++){
        
        
//       }
//       console.log('Nomor ID : '+argumen[i][0]);
//       console.log('Nama Lengkap : '+argumen[i][1]);
//       console.log('TTL : '+argumen[i][2]+' '+argumen[i][3]);
//       console.log('Hobi :'+argumen[i][4]);
//       console.log('');
//     }
    
//     return dumBacaBawah;
    
//   }
  
//   console.log(dataHandling([
//                   ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
//                   ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
//                   ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
//                   ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]
//               ]));
              
// =======================================================================================
// versi ke 4
// function dataHandling(array){
//     for(var i = 0; i < array.length; i++){
//       for(var index = 0; index < 5; index++){
        
//         switch(index){
//            case 0:
//              console.log("Nomor ID: "+array[i][index]);
//            break;
//            case 1:
//              console.log("Nama Lengkap: "+array[i][index]);
//            break;
//            case 2:
//              console.log("TTL: "+array[i][index] +" "+ array[i][index+1]);
//            break;
//            case 4:
//             console.log("Hobi: "+ array[i][index]);
//            break; 
//            default:
//             //do nothing
//         }
//       }
//     } 
  
//   }
//   //contoh input
//   var input = [
//                   ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
//                   ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
//                   ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
//                   ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]
//               ];
//   dataHandling(input);



// Menggunakan Built-in Function pada Array

function dataHandling2(array){
    array.splice(1,2,"Roman Alamsyah Elsharawy","Provinsi Bandar Lampung") ;
    array.splice(4,2,"Pria","SMA Internasional Metro");
    console.log(array);
    var tanggalSplit = array[3].split("/");
    switch(Number(tanggalSplit[1])){
      case 1:
        console.log("Januari");
      break;
      case 2:
        console.log("Februari");
      break;
      case 3:
        console.log("Maret");
      break;
      case 4:
        console.log("April");
      break;
      case 5:
        console.log("Mei");
      break;
      case 6:
        console.log("Juni");
      break;
      case 7:
        console.log("Juli");
      break;
      case 8:
        console.log("Agustus");
      break;
      case 9:
        console.log("September");
      break;
      case 10:
        console.log("Oktober");
      break;
      case 11:
        console.log("November");
      break;
      case 12:
        console.log("Desember");
      break;
      default:
        //do nothingg
  
      }
      var tanggalSort = tanggalSplit.sort(function(a, b){return b-a});
      console.log(tanggalSort);
      tanggalSplit = array[3].split("/");
      var tanggalJoin = tanggalSplit.join("-");
      console.log(tanggalJoin);
      var namaSlice = array[1];
      namaSlice = namaSlice.slice(0,14);
      console.log(namaSlice);
  }
  var input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];
  dataHandling2(input);
  
  /**
   * keluaran yang diharapkan (pada console)
   *
   * ["0001", "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro"]
   * Mei
   * [1989, 21, 05]
   * 21-05-1989
   * Roman Alamsyah
   */