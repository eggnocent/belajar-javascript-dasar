
// pengulangan cetak bintang naik
// *
// **
// ***
// ****
// *****
var s = '';

for(var i = 0; i < 5; i++) {
    for ( var j = 0; j <= i; j++) {
        s += '*';
    }
    s += '\n';
}
console.log(s);

// pengulangan cetak bintang menurun
// *****
// ****
// ***
// **
// *
var s = '';

for(var i = 5; i > 0; i--) {
    for ( var j = 0; j < i; j++) {
        s += '*';
    }
    s += '\n';
}
console.log(s);