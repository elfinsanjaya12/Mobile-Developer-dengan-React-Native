var siswa = [{
    nama : 'elfin',
    gander : 'laki-laki',
    kelas : 8
},{
    nama : 'itce',
    gander : 'wanita',
    kelas : 6
},{
    nama : 'sapta',
    gander : 'laki-laki',
    kelas : 2
}];

for(var i = 0; i < siswa.length; i++){
    console.log('Nama: ' + siswa[i].nama);
    console.log('Gander: ' + siswa[i].gander);
    console.log('Kelas: ' + siswa[i].kelas);
}