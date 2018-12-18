var mobil = ["avanza", "xenia", "ferrai"]

console.log(mobil)

// push menambah data array
mobil.push("truk")
console.log(mobil)

// pop menghapus data array akhir
mobil.pop()
console.log(mobil)

// ========================================================================================================
// array multi dimensi

var hewanDarat = ['Ayam', 'Gajah']
var hewanLaut = ['Hiu', 'Puas']

var hewanDidunia = [hewanDarat, hewanLaut]

// menampilkan semua isi array
console.log(hewanDidunia)

// menampilkan isi array hewan darat ayam
console.log(hewanDidunia[0][0])

// menampilkan isi array hewan laut Hiu
console.log(hewanDidunia[1][0])