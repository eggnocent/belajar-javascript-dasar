console.log("test")


// variable dengan let
let nama = "Belajar variable let";

// tampilkan data

console.log(nama);

// ubah nilai variable nama
nama = "Sedang belajar variable let"
console.log(nama);

// variable dengan var
var namaDepan = "Belajar";
console.log(namaDepan);
namaDepan = "Sedang";
console.log(namaDepan);

//kelakuan dari let
let namaBelakang = "Escoval";
{
    let namaBelakang = "Rodrigo";
    console.log(namaBelakang);
}
console.log(namaBelakang);

// kelakuan dari var
var namaTengah = "Ze"
{
    var namaTengah = "Gomes";
    console.log(namaTengah);
}
console.log(namaTengah);

// kasus khusus tanpa keyword akan jadi var
daerah = "GunungKidul";
{
    daerah = "Bantul";
}
console.log(daerah);

// const

const  TTL = "30 April 2006"
console.log(TTL)
