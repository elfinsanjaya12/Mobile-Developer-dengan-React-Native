function hitungJumlahKata(kalimat) {
    // split membaca perkata dan memisahkan dengan spasi
    var kalimatSplit= kalimat.split(' ')
    
    var simpanKata =0;
    for (var x =0; x < kalimatSplit.length; x++){
        simpanKata +=1;
    }
    return simpanKata;
  }
  
  // TEST CASES
  console.log(hitungJumlahKata('I have a dream')); // 4
  console.log(hitungJumlahKata('Never eat shredded wheat or cake')); // 6
  console.log(hitungJumlahKata('A song to sing')); // 4
  console.log(hitungJumlahKata('I')); // 1
  console.log(hitungJumlahKata('I believe I can code')); // 5