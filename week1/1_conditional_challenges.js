// Menggunakan If Else

// var nama = 'Mikael'
// var peran = ''

// if (nama === '' && peran === '') {
//     console.log('Nama dan Peran Harus diisi !!!')
// } else if (nama === 'Mikael' && peran === '') {
//     console.log('Hallo Mikael, Pilih peranmu untuk memulai game !')
// } else if (nama === 'Nina' && peran === 'Ksatria') {
//     console.log('Selamat datang di Dunia Proxytia, Nina')
//     console.log('Halo Ksatria Nina, kamu dapat menyerang dengan senjatamu!')
// } else if(nama === 'Danu' && peran === 'Tabib'){
//     console.log('Selamat datang di Dunia Proxytia, Danu')
//     console.log('Halo Tabib Danu, kamu akan membantu temanmu yang terluka.')
// } else if(nama === 'Zero' && peran === 'Penyihir'){
//     console.log('Selamat datang di Dunia Proxytia, Zero')
//     console.log('Halo Penyihir Zero, ciptakan keajaiban yang membantu kemenanganmu!')
// } else {
//     console.log('Nama dan Peran tidak ada')
// }

// ==================================================================================================
// var tanggal;  assign nilai variabel tanggal disini! (dengan angka antara 1 - 31)
// var bulan;  assign nilai variabel bulan disini! (dengan angka antara 1 - 12)
// var tahun;  assign nilai variabel tahun disini! (dengan angka antara 1900 - 2200)

var tanggal = 12;
var bulan = 7;
var tahun = 1995;


switch(bulan){
    case 1:
        console.log(''+ tanggal + ' ' + 'Januari ' + tahun)
    break;
    case 2:
        console.log(''+ tanggal + ' ' + 'Febuari ' + tahun)
    break;
    case 3:
        console.log(''+ tanggal + ' ' + 'Maret ' + tahun)
    break;
    case 4:
        console.log(''+ tanggal + ' ' + 'April ' + tahun)
    break;
    case 5:
        console.log(''+ tanggal + ' ' + 'Mei ' + tahun)
    break;
    case 6:
        console.log(''+ tanggal + ' ' + 'Juni ' + tahun)
    break;
    case 7:
        console.log(''+ tanggal + ' ' + 'Juli ' + tahun)
    break;
    case 8:
        console.log(''+ tanggal + ' ' + 'Agustus ' + tahun)
    break;
    case 9:
        console.log(''+ tanggal + ' ' + 'September ' + tahun)
    break;
    case 10:
        console.log(''+ tanggal + ' ' + 'Okteber ' + tahun)
    break;
    case 11:
        console.log(''+ tanggal + ' ' + 'November ' + tahun)
    break;
    case 12:
        console.log(''+ tanggal + ' ' + 'Desember ' + tahun)
    break;
    default: 
        console.log('format bulan hanya 1 - 12 !!!!')
}