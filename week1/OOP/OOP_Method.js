class Mobil{
    constructor(warna, tipe, roda){
        this.warna = warna,
        this.tipe = tipe,
        this.roda = roda,
        this.lampuNyala = false
    }
    nyalakanLampu(){
        return this.lampuNyala = true
    }
    matikanLampu(){
        return this.lampuNyala = false
    }
}

class Balap extends Mobil {
    constructor(warna, tipe, roda){
        super(warna, tipe, roda)
        this.cepat = false
    }

    jalankanKecepatanTinggi(){
        console.log('Mobil Berjalan dengan cepat')
        return this.cepat = true
    }
}

class Offroad extends Mobil{
    constructor(warna, tipe, roda){
        super(warna, tipe, roda)
        this.modeManjat = false
    }

    ubahKeModeManjatGunung(){
        console.log('Mobil Memasuki Mode Manjat')
        return this.modeManjat= true
    }
}

const mobilBalap = new Balap('Merah', 'Sedan', 4)
const mobilOffroad = new Offroad('Hijaw', 'suv', 4)

// console.log(mobilBalap)
mobilBalap.nyalakanLampu();
mobilBalap.jalankanKecepatanTinggi();

// console.log(mobilOffroad);
console.log(mobilOffroad.nyalakanLampu());
mobilOffroad.ubahKeModeManjatGunung();
