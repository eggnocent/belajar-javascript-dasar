// jika tanpa parsing
var angka = prompt('masukan angka');


// jika menggunakan else if
if (angka == 1 ) {
    alert('anda memasukan angka 1')
} else if (angka == 2) {
    alert('anda memasukan angka 2')
} else if (angka == 3) {
    alert('anda memasukan angka 3')
}else {
    alert('salah')
}


// jika di parsing
var angka = parseInt(prompt('masukan angka'));


// jika menggunakan else if
if (angka === 1 ) {
    alert('anda memasukan angka 1')
} else if (angka === 2) {
    alert('anda memasukan angka 2')
} else if (angka === 3) {
    alert('anda memasukan angka 3')
}else {
    alert('salah')
}


// contoh penggunaan while
var angka = parseInt(prompt('masukan angka: '));

switch (angka) {
    case 1:
        alert('anda memasukan angka 1');
        break;
    case 2:
        alert('anda memasukan angka 2');
        break;
    case 3:
        alert('anda memasukan angka 3');
        break;
    default:
        alert('anda memasukan angka yang salah')
        break;
}

//  contoh kasus while dan mensederhanakan break
var item = prompt('masukan nama makanan / minuman : \n (contoh: nasi, susu, slenget, gorengan');

switch (item) {
    case 'nasi':
    case 'susu':
        alert('sehat')
        break;
    case 'slenget':
    case 'gorengan':
        alert('tak sehat')
        break;
    default:
        alert('coba lagi');
        break;
}