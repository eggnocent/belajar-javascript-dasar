let dataString = "data string";
console.log(dataString);

// escaping string
let data1 = 'ifet mendribling "bola"';
console.log(data1);
let data2 = "darko berkata \"helooo\"";
console.log(data2);
let data3 = "ifet berjalan di tepi danau, \npagi hari";
console.log(data3);

// literal string (template literal string)
let namaDepan = "ifet";
let namaBelakang = "Dacovac";
let  umur = 24;
let namaLengkap = namaDepan + " " + namaBelakang + " " + umur;
console.log(namaLengkap);

// template string literal
let bioData = `${namaDepan} ${namaBelakang} dengan umur ${umur}`;
console.log(bioData);