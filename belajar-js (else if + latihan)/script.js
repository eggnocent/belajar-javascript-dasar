// var nilai = 5;

// if (nilai >= 90) {
//     console.log("Sangat Bagus");
// } else if (nilai >= 80) {
//     console.log("Bagus");
// } else if (nilai >=70) {
//     console.log("Usaha Bagus");
// } else if (nilai >= 50) {
//     console.log("Belajar lagi");
// } else if (nilai >= 0) {
//     console.log("niat sinau gak");
// }

var jmlAngkot = 10;
var angkotBeroprasi = 6;


// pengondisian di dalam perulangan
for(var noAngkot = 1; noAngkot <= jmlAngkot; noAngkot++) {

    if(noAngkot <= 6) {
        console.log('Angkot No.' + noAngkot + ' Beroprasi dengan baik');
    } else if (noAngkot === 8) {
        console.log('Angkot No. ' + noAngkot + 'sedang lembur')
    } else {
        console.log('Angkot No. ' + noAngkot + ' sedang tidak jalan');
    }
}