// Ambil elemen tombol dan paragraf
const likeBtn = document.querySelector('.btn');
const profileCard = document.querySelector('.profile-card');

// Buat variabel hitungan like
let likeCount = 0;

// Event klik untuk tombol like
likeBtn.addEventListener('click', () => {
    likeCount++;
    likeBtn.textContent = `Like (${likeCount})`;
});

// Ambil semua ikon sosial media
const socialLinks = document.querySelectorAll('.social-links a');

// Tambahkan event klik ke setiap ikon sosial media
socialLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault(); // cegah reload
        alert(`Kamu klik link sosial media!`);
    });
});

// Optional: animasi hover tambahan untuk kartu
profileCard.addEventListener('mouseenter', () => {
    profileCard.style.boxShadow = '0 20px 40px rgba(0,0,0,0.3)';
});

profileCard.addEventListener('mouseleave', () => {
    profileCard.style.boxShadow = '0 10px 25px rgba(0,0,0,0.2)';
});
