// cara membuat object pada js

// Object Literal
// let mhs = {
//     nama: 'escoval',
//     energy: 10,
//     makan: function(porsi) {
//         this.energy = this.energy + porsi;
//         console.log(`Halo  ${this.nama},  selamat makan`);
//     }
// }


// function declaration

// function Mahasiswa(nama, energy) {
//     let mahasiswa = {};
//     mahasiswa.nama = nama;
//     mahasiswa.energy = energy;

//     mahasiswa.makan = function(porsi) {
//         this.energy += porsi;
//         console.log(`halo ${this.nama} selamat makan`)
//     }
//     return mahasiswa;
// }

// let escoval = Mahasiswa('escoval', 10);

// Constructor function (new)
// function Mahasiswa (nama, energi) {
//     this.nama = nama;
//     this.energi = energi;

//     this.makan = function(porsi) {
//         this.energi += porsi;
//         console.log(`halo ${this.nama} selamat makan`);
//     }

//     this.main = function(jam) {
//         this.energi -= jam;
//         console.log(`halo ${this.nama} selamat main`)
//     }
// }

// let escoval = new Mahasiswa('escoval', 10);