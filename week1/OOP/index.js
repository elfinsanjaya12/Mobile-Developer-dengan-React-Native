// class Mobil {
//     constructor(){ //fungsi yang dijalan kan pertama kali saat kelas dijalankan
//         this.warna = 'merah',
//         this.tipe = 'tipe',
//         this.roda = 4
//     }
// }

// const mobil = new Mobil();
// console.log(mobil);


class Mobil {
    constructor(warna, tipe, roda){
        this.warna = warna,
        this.tipe = tipe,
        this.roda = roda
    }
}

const mobil = new Mobil('Merah', 'Sedan',4);
console.log(mobil);