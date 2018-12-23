class Hewan{
    constructor(nama, jenis){
        this.nama = nama,
        this.jenis = jenis
    }    
    makan(){
        console.log('Ketikan Lapar Makan')
    }
}

class Gajah extends Hewan {
    constructor(nama, jenis, kaki){
        super(nama, jenis)
        this.nama = nama,
        this.jenis = jenis,
        this.kaki = kaki
    }

    jalanDenganKaki(){
        return this.kaki = this.nama + ' Berjalan dengan kaki 4 hewan ini hewan ' + this.jenis
    }
}

class Hiu extends Hewan {
    constructor(nama, jenis, bernafas){
        super(nama, jenis)
        this.nama = nama,
        this.jenis = jenis,
        this.bernafas = bernafas
    }
    Nafas(){
        return this.bernafas = 'newan '+ this.nama + ' jenis ' + this.jenis + ' bernafas dengan insan'
    }
}

const gajah = new Gajah('Gajah', 'Darat')
console.log(gajah.jalanDenganKaki());

const hiu = new Hiu('Hiu', 'Air')
console.log(hiu.Nafas())