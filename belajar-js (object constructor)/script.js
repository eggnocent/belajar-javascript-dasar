// membuat object

// object literal
var mhs = {
    nama: "kenneth kenedy",
    nrp: "2320823802",
    email: 'kennet@gmail.com',
    jurusan: 'Teknik Biologi'
};

var mhs2 = {
    nama: "jonathan kenedy",
    nrp: "2320823823",
    email: 'jo@gmail.com',
    jurusan: 'Teknik Biologi'
};

// function declaration
function buatObjectMhs(nama, nrp, email, jurusan) {
    var mhs = {};
    mhs.nama = nama;
    mhs.nrp = nrp;
    mhs.email = email;
    mhs.jurusan = jurusan;

    return mhs
}

var mhs3 = buatObjectMhs('Nova', '31331331', 'nova@gmail.com', 'Ternak uang')

// construction (function khusus untuk membuat object)
// untuk disini variabel penampung data dan return otomatis dibuatkan dengan new 
function Mahasiswa(nama, nrp, email, jurusan) {
    this.nama = nama;
    this.nrp = nrp;
    this.email = email;
    this.jurusan = jurusan; 
}


var mhs4 = new Mahasiswa('pep', '128102102', 'pep@sysb.com', 'Teknik aklimatisasi');