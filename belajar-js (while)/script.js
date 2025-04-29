// untuk perulangan akan merepotkan, maka butuh perulangan di js
console.log('hello world');
console.log('hello world');
console.log('hello world');
console.log('hello world');
console.log('hello world');
console.log('hello world');
console.log('hello world');
console.log('hello world');
console.log('hello world');
console.log('hello world');

// perulangan tak terbatas (jangan di jalankan, bikin laptop serasa axio tangan ketiga cuy)
// while (true) {
//     console.log('hello world')
// }

// perulangan yang dihentikan oleh user
var ulang = true;
while(ulang) {
    console.log('hello world');
    ulang = confirm('lagi?');
}

// perulangan dihentikan oleh program
var nilaiAwal = 1;
while(nilaiAwal <= 5) {
    console.log('hello world');
    nilaiAwal++;
}

// latihan while
var nilaiAwal = 1;
while(nilaiAwal <= 10) {
    console.log('Hello World ' + nilaiAwal + 'x');
    nilaiAwal++;
}
