// Fungsi untuk operasi penjumlahan
function tambah() {
    try {
        // Ambil nilai dari input dan konversi ke Number
        let num1 = Number(document.getElementById("angka1").value);
        let num2 = Number(document.getElementById("angka2").value);
        
        // Validasi input
        if (isNaN(num1) || isNaN(num2)) {
            throw new Error("Masukkan angka yang valid");
        }
        
        // Lakukan operasi
        let hasil = num1 + num2;
        
        // Tampilkan hasil
        tampilkanHasil(hasil);
    } catch (error) {
        tampilkanError(error.message);
    }
}

// Fungsi untuk operasi pengurangan
function kurang() {
    try {
        // Ambil nilai dari input dan konversi ke Number
        let num1 = Number(document.getElementById("angka1").value);
        let num2 = Number(document.getElementById("angka2").value);
        
        // Validasi input
        if (isNaN(num1) || isNaN(num2)) {
            throw new Error("Masukkan angka yang valid");
        }
        
        // Lakukan operasi
        let hasil = num1 - num2;
        
        // Tampilkan hasil
        tampilkanHasil(hasil);
    } catch (error) {
        tampilkanError(error.message);
    }
}

// Fungsi untuk operasi perkalian
function kali() {
    try {
        // Ambil nilai dari input dan konversi ke Number
        let num1 = Number(document.getElementById("angka1").value);
        let num2 = Number(document.getElementById("angka2").value);
        
        // Validasi input
        if (isNaN(num1) || isNaN(num2)) {
            throw new Error("Masukkan angka yang valid");
        }
        
        // Lakukan operasi
        let hasil = num1 * num2;
        
        // Tampilkan hasil
        tampilkanHasil(hasil);
    } catch (error) {
        tampilkanError(error.message);
    }
}

// Fungsi untuk operasi pembagian
function bagi() {
    try {
        // Ambil nilai dari input dan konversi ke Number
        let num1 = Number(document.getElementById("angka1").value);
        let num2 = Number(document.getElementById("angka2").value);
        
        // Validasi input
        if (isNaN(num1) || isNaN(num2)) {
            throw new Error("Masukkan angka yang valid");
        }
        
        // Cek pembagian dengan nol
        if (num2 === 0) {
            throw new Error("Tidak dapat membagi dengan nol");
        }
        
        // Lakukan operasi
        let hasil = num1 / num2;
        
        // Tampilkan hasil
        tampilkanHasil(hasil);
    } catch (error) {
        tampilkanError(error.message);
    }
}

// Fungsi untuk menampilkan hasil
function tampilkanHasil(hasil) {
    const hasilElement = document.getElementById("hasilKalkulasi");
    hasilElement.textContent = "Hasil: " + hasil;
    hasilElement.classList.remove("error");
}

// Fungsi untuk menampilkan error
function tampilkanError(pesan) {
    const hasilElement = document.getElementById("hasilKalkulasi");
    hasilElement.textContent = "Error: " + pesan;
    hasilElement.classList.add("error");
}