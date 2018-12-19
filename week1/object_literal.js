var mobil = {
    warna : 'merah',
    merek : 'ferari',
    berat : '1000kg'
}

console.log(mobil.warna)

mobil.warna = 'hitam'
console.log(mobil)

mobil.jenis = 'mobil balap'
console.log(mobil)

delete mobil.berat
console.log(mobil)
