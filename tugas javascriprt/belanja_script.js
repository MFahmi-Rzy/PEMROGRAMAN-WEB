// Deklarasi array untuk daftar belanja
let shoppingList = [];

// Fungsi untuk merender daftar belanja
function renderList() {
    // Kosongkan innerHTML dari ul#itemsBelanja
    const itemsBelanjaElement = document.getElementById("itemsBelanja");
    itemsBelanjaElement.innerHTML = "";
    
    // Tampilkan pesan jika daftar kosong
    if (shoppingList.length === 0) {
        const emptyMessage = document.createElement("li");
        emptyMessage.className = "empty-list";
        emptyMessage.textContent = "Daftar belanja Anda kosong";
        itemsBelanjaElement.appendChild(emptyMessage);
    } else {
        // Gunakan for loop untuk mengiterasi shoppingList
        for (let i = 0; i < shoppingList.length; i++) {
            // Buat elemen <li> untuk setiap item
            const liElement = document.createElement("li");
            liElement.textContent = shoppingList[i];
            
            // Tambahkan elemen <li> ke ul
            itemsBelanjaElement.appendChild(liElement);
        }
    }
    
    // Perbarui teks di p#jumlahItem
    document.getElementById("jumlahItem").textContent = 
        `Jumlah item saat ini: ${shoppingList.length}`;
}

// Fungsi untuk menambah item baru
function tambahItem() {
    // Ambil nilai dari input#newItem
    const newItemInput = document.getElementById("newItem");
    const newItemValue = newItemInput.value.trim();
    
    // Jika nilai tidak kosong, tambahkan ke shoppingList
    if (newItemValue !== "") {
        shoppingList.push(newItemValue);
        
        // Kosongkan kembali nilai input
        newItemInput.value = "";
        
        // Panggil renderList untuk memperbarui tampilan
        renderList();
    }
}

// Fungsi untuk menghapus item terakhir
function hapusItemTerakhir() {
    // Jika shoppingList tidak kosong, hapus item terakhir
    if (shoppingList.length > 0) {
        shoppingList.pop();
        
        // Panggil renderList untuk memperbarui tampilan
        renderList();
    }
}

// Tambahkan event listener untuk menambah item dengan tombol Enter
document.addEventListener('DOMContentLoaded', function() {
    const newItemInput = document.getElementById("newItem");
    newItemInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            tambahItem();
        }
    });
    
    // Panggil renderList() di awal untuk inisialisasi
    renderList();
});