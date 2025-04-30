// contoh kasus yang tidak menggunakan function, tidak efektif
// var a = 8;
// var b = 3;
// var volumeA;
// var volumeB;
// var total;

// volumeA = a * a * a;
// volumeB = b * b * b
// total = volumeA + volumeB;
// console.log(total);

// membuat function
function hitungKubus (a, b) {
    var volumeA; 
    var volumeB;
    var total; 

    volumeA = a * a * a;
    volumeB = b * b * b;
    total = volumeA + volumeB;

    return total;
}

// menjalankan function
console.log(hitungKubus(8, 3));
