function toggleSidebar() {
  let sidebar = document.getElementById("sidebar");
  let overlay = document.getElementById("overlay");

  sidebar.classList.toggle("show");
  overlay.classList.toggle("show");
}

function closeSidebar() {
  document.getElementById("sidebar").classList.remove("show");
  document.getElementById("overlay").classList.remove("show");
}

document.querySelectorAll(".dropdown > span").forEach(el => {
  el.onclick = () => {
    el.parentElement.classList.toggle("open");
  };
});
function logout() {
  Swal.fire({
    title: "Yakin mau logout?",
    text: "Anda akan keluar dari sistem",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#d33",
    cancelButtonColor: "#6c757d",
    confirmButtonText: "Ya, Logout",
    cancelButtonText: "Batal"
  }).then((result) => {
    if (result.isConfirmed) {
      
      // hapus data login
      localStorage.removeItem("userLogin");

      Swal.fire({
        title: "Berhasil!",
        text: "Anda berhasil logout",
        icon: "success",
        timer: 1500,
        showConfirmButton: false
      });

      // redirect setelah delay
      setTimeout(() => {
        window.location.href = "index.html";
      }, 1500);
    }
  });
}
// ambil data user login
let user = JSON.parse(localStorage.getItem("userLogin"));

// cek kalau belum login
if (!user) {
  window.location.href = "index.html";
}

// ambil jam sekarang
let jam = new Date().getHours();

// tentukan greeting
let greeting = "";

if (jam >= 5 && jam < 12) {
  greeting = "Selamat pagi";
} else if (jam >= 12 && jam < 15) {
  greeting = "Selamat siang";
} else if (jam >= 15 && jam < 18) {
  greeting = "Selamat sore";
} else {
  greeting = "Selamat malam";
}

// tampilkan ke HTML
document.getElementById("greeting").innerText =
  greeting + ", " + user.nama;


// TOTAL BAHAN AJAR (stok)
let totalBahan = 0;

dataBahanAjar.forEach(item => {
  totalBahan += item.stok;
});

document.getElementById("totalBahan").innerText =
  totalBahan.toLocaleString();

// TOTAL TRACKING (jumlah DO)
let totalTracking = Object.keys(dataTracking).length;

document.getElementById("totalTracking").innerText =
  totalTracking;

// TOTAL USER
document.getElementById("totalUser").innerText =
  dataPengguna.length;