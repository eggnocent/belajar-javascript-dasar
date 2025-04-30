// contoh penggunaan object
// var mahasiswa = {
//     nama: 'Ifet Dakovac',
//     lulus: true,
//     ipSemester: [2.90, 3.20, 3.25, 2.45, 3.05],
//     ipKumulatif: function() {
//         var total = 0;
//         var ips = this.ipSemester;
//         for (var i = 0; i < this.ipSemester; i++) {
//             total += ips[i];
//         }
//         return total/ips.length;
//     }
// }

// console.log(mahasiswa.ipKumulatif());


// contoh object di dalam object (maybe?)
var mhs = {
    nama: 'ifet dacovic',
    umur: 23,
    ips: [3.20, 3.31, 2.67],
    alamat: {
        jalan: "palagan",
        nomor: "79b",
        kota: "sleman",
        provinsi: "D.I.Yogyakarta"
    }
};

console.log(mhs.alamat);