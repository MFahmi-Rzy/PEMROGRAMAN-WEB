 function cekNilai() {
    // Ambil nilai dari input dan konversi ke Number
    const nilaiInput = document.getElementById("nilaiSiswa");
    const nilai = Number(nilaiInput.value);
    
    // Ambil elemen untuk menampilkan hasil
    const hasilElement = document.getElementById("hasilGrade");
    
    // Periksa nilai dan tentukan grade
    if (nilai >= 90 && nilai <= 100) {
        hasilElement.innerHTML = "A (Sangat Baik)";
    } 
    else if (nilai >= 80 && nilai <= 89) {
        hasilElement.innerHTML = "B (Baik)";
    } 
    else if (nilai >= 70 && nilai <= 79) {
        hasilElement.innerHTML = "C (Cukup)";
    } 
    else if (nilai >= 60 && nilai <= 69) {
        hasilElement.innerHTML = "D (Kurang)";
    } 
    else if (nilai >= 0 && nilai <= 59) {
        hasilElement.innerHTML = "E (Gagal)";
    } 
    else {
        hasilElement.innerHTML = "Nilai tidak valid.";
    }
}