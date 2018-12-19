function balikKata(kata){
    var balik = ''
    // kata.length harus di kurang 1 kenapa karena kata.length dimulai dari 1 bukan dari 0
    for(var i = kata.length - 1; i >= 0; i--){
        balik = balik + kata[i]
        // console.log(kata[i])
    }
    return balik;
}

console.log(balikKata('Hello World and Coders')); // sredoC dna dlroW olleH
