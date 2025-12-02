// Dapatkan referensi ke elemen-elemen yang diperlukan
const commentInput = document.getElementById('commentInput');
const submitComment = document.getElementById('submitComment');
const commentList = document.getElementById('commentList');
const errorComment = document.getElementById('errorComment');

// Tambahkan event listener click ke tombol submit
submitComment.addEventListener('click', function() {
    // Ambil nilai dari textarea dan bersihkan spasi di awal/akhir
    const commentValue = commentInput.value.trim();
    
    // Bersihkan pesan kesalahan sebelumnya
    errorComment.textContent = '';
    
    // Validasi: cek apakah komentar kosong atau kurang dari 5 karakter
    if (commentValue === '' || commentValue.length < 5) {
        errorComment.textContent = 'Komentar harus minimal 5 karakter!';
        return; // Hentikan proses
    }
    
    // Jika valid, buat elemen div baru untuk komentar
    const commentItem = document.createElement('div');
    commentItem.className = 'comment-item';
    
    // Buat elemen p untuk menampilkan teks komentar
    const commentText = document.createElement('p');
    commentText.textContent = commentValue;
    
    // Tambahkan tombol hapus
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Hapus';
    deleteButton.className = 'delete-button';
    
    // Tambahkan event listener ke tombol hapus
    deleteButton.addEventListener('click', function() {
        commentList.removeChild(commentItem);
    });
    
    // Tambahkan teks komentar dan tombol hapus ke dalam div comment-item
    commentItem.appendChild(commentText);
    commentItem.appendChild(deleteButton);
    
    // Tambahkan comment-item ke commentList
    commentList.appendChild(commentItem);
    
    // Kosongkan kembali textarea
    commentInput.value = '';
});