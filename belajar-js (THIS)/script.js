// this (properti/method dari object)
var a = 10;
console.log(this.a)


// contoh penggunaan this di function declaration
// this mengembalikan object global
function Halo() {
    console.log(this);
    console.log('halop');
}

this.Halo();

// menggunakan this di literal
// hasilnya berbeda, karena jika tidak diberi this maka hanya akan
// mengembalikan string, jika diberi this, maka akan mengembalikan semua object yang bersangkutan
var obj = {a: 10, nama: 'enamore'};
obj.halo = function() {
    console.log(this);
    console.log('halo');
}

obj.halo();



// menggunakan this di constructor
// disini mengembalikan object yang baru dibuat.
function Halo() {
    console.log(this) // this ini untuk obj 1 dan 2
    console.log('halop');
}

// new Halo(); // mengembalikan ini (new)

// this mengembalikan object yang baru dibuat
var obj1 = new Halo();
var obj2 = new Halo();




// =========================================================
// =========================================================

// membuat object

// function declaration
function halo() {
    console.log('halo')
}

halo();

// object literal
var obj = {};
obj.halo = function() {
    console.log('halo');
}

obj.halo();

//constructor function
function Halo() {
    console.log('halop');
}

new Halo();