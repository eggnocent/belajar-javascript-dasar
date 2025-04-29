// operasi string


// char at
let dataString = "abcdef";
let dataChar = dataString.charAt(0);
console.log(`character pada index ke 0 = ${dataChar}`);
dataChar = dataString.charAt(1);
console.log(`character pada index ke 1 = ${dataChar}`);
dataChar = dataString.charAt(2);
console.log(`character pada index ke 2 = ${dataChar}`);
dataChar = dataString.charAt(3);
console.log(`character pada index ke 3 = ${dataChar}`);
dataChar = dataString.charAt(4);
console.log(`character pada index ke 4 = ${dataChar}`);
dataChar = dataString.charAt(5);
console.log(`character pada index ke 5 = ${dataChar}`);

// menyambung string
let namaDepan = "ifet";
let namaBelakang = "Dacovic";

let namaLengkap = namaDepan.concat(` `, namaBelakang,` keren`);
console.log(namaLengkap);

//mengambil index
console.log(namaLengkap.indexOf('k'));
console.log(namaLengkap.indexOf('n'));

// mengambil substring
console.log(namaLengkap.substring(5, 10));

// slice (hampir sama dengan substring)
console.log(namaLengkap.slice(12, 14))

// replace
let namaBaru = namaLengkap.replace(`ifet Dacovic`, `rodrigo escoval`);
console.log(namaBaru);

// tolower
console.log(namaLengkap.toLowerCase());

//uppercase
console.log(namaLengkap.toUpperCase());

// extract data number dari string
let dataStr2 = `10`;
console.log(typeof dataStr2);
let dataInt = parseInt(dataStr2);
console.log(dataInt);
console.log(typeof dataInt);