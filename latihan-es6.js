// ====== 1. let & const ======
let nama = "Budi";
const pi = 3.14;
nama = "Andi"; // let bisa diubah

// ====== 2. Arrow function ======
const kaliDua = (angka) => angka * 2;

// ====== 3. Template literals ======
const umur = 25;
console.log(`Halo, nama saya ${nama} dan saya berumur ${umur} tahun.`);

// ====== 4. Destructuring ======
const angka = [10, 20, 30];
const [a, b, c] = angka;
console.log(`Destructuring array: ${a}, ${b}, ${c}`);

const orang = { nama: "Siti", umur: 21 };
const { nama: namaOrang, umur: umurOrang } = orang;
console.log(`Destructuring object: ${namaOrang}, ${umurOrang}`);

// ====== 5. Spread operator ======
const arr1 = [1, 2];
const arr2 = [3, 4];
const gabungArr = [...arr1, ...arr2];
console.log(`Gabungan array: ${gabungArr}`);

const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
const gabungObj = { ...obj1, ...obj2 };
console.log("Gabungan object:", gabungObj);

// ====== 6. Modul export & import ======
// Simulasi export/import langsung di satu file
const tambah = (x, y) => x + y;
const kurang = (x, y) => x - y;

console.log(`Tambah: ${tambah(5, 3)}`);
console.log(`Kurang: ${kurang(5, 3)}`);

// ====== 7. Promises & async/await ======
const ambilData = () => {
    return new Promise((resolve) => {
        setTimeout(() => resolve("Data berhasil diambil!"), 1000);
    });
};

ambilData().then(console.log);

const ambilDataAsync = async () => {
    const hasil = await ambilData();
    console.log(`Async/Await: ${hasil}`);
};
ambilDataAsync();

// ====== 8. Class & Inheritance ======
class Hewan {
    constructor(nama) {
        this.nama = nama;
    }
    bersuara() {
        console.log(`${this.nama} bersuara...`);
    }
}

class Kucing extends Hewan {
    bersuara() {
        console.log(`${this.nama} mengeong: Meow~`);
    }
}

const hewan1 = new Hewan("Hewan");
hewan1.bersuara();

const kucing1 = new Kucing("Mimi");
kucing1.bersuara();
