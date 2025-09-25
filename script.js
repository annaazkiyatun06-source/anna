// Data produk awal
let produk = [
  {
    nama: "Moisturizer Glow",
    harga: 120000,
    deskripsi: "Melembapkan kulit dan membuat wajah tampak glowing.",
    gambar: "mois.jpg"
  },
  {
    nama: "Serum Brightening",
    harga: 150000,
    deskripsi: "Mencerahkan kulit kusam dengan vitamin C.",
    gambar: "serum.brightening.jpg"
  }
{  nama: "cushion",
    harga: 150000,
    deskripsi: "Mencerahkan kulit kusam dengan vitamin C.",
    gambar: "cushion.jpg"
},

];

let pesanan = [];

// Render produk ke halaman
function tampilkanProduk() {
  const produkList = document.getElementById("produk-list");
  produkList.innerHTML = "";

  produk.forEach((p, index) => {
    const card = document.createElement("div");
    card.className = "produk";
    card.innerHTML = `
      <img src="${p.gambar}" alt="${p.nama}">
      <h3>${p.nama}</h3>
      <p>${p.deskripsi}</p>
      <strong>Rp ${p.harga.toLocaleString()}</strong><br>
      <button onclick="pesanProduk(${index})">Pesan</button>
    `;
    produkList.appendChild(card);
  });
}

// Tambah produk baru
document.getElementById("produk-form").addEventListener("submit", function(e) {
  e.preventDefault();

  const nama = document.getElementById("nama").value;
  const harga = parseInt(document.getElementById("harga").value);
  const deskripsi = document.getElementById("deskripsi").value;
  const gambar = document.getElementById("gambar").value;

  produk.push({ nama, harga, deskripsi, gambar });
  tampilkanProduk();

  // reset form
  this.reset();
});

// Pesan produk
function pesanProduk(index) {
  pesanan.push(produk[index].nama);
  updatePesanan();
}

// Update daftar pesanan
function updatePesanan() {
  const pesananList = document.getElementById("pesanan-list");
  pesananList.innerHTML = "";
  pesanan.forEach((p) => {
    const li = document.createElement("li");
    li.textContent = p;
    pesananList.appendChild(li);
  });
}

// Tampilkan pertama kali
tampilkanProduk();

