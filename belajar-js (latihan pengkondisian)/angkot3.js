var jmlAngkot = 10;
var angkotBeroprasi = 6;


// pengondisian di dalam perulangan
for(var noAngkot = 1; noAngkot <= jmlAngkot; noAngkot++) {

    if(noAngkot <= 6) {
        console.log('Angkot No.' + noAngkot + ' Beroprasi dengan baik');
    } else {
        console.log('Angkot No. ' + noAngkot + ' sedang tidak jalan');
    }
}