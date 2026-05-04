// TAMPILKAN DATA
function tampilkanData() {
  let container = document.getElementById("listBahanAjar");
  container.innerHTML = "";

  dataBahanAjar.forEach(item => {
    let html = `
      <div class="col-md-4 col-12">
        <div class="card bahan-card">

          <img src="${item.cover}" 
               onerror="this.src='assets/img/default.jpg'"
               class="img-fluid cover">

          <div class="form-group">
            <label>Kode Lokasi</label>
            <div class="form-box">${item.kodeLokasi}</div>
          </div>

          <div class="form-group">
            <label>Kode Barang</label>
            <div class="form-box">${item.kodeBarang}</div>
          </div>

          <div class="form-group">
            <label>Nama Barang</label>
            <div class="form-box">${item.namaBarang}</div>
          </div>

          <div class="form-group">
            <label>Jenis</label>
            <div class="form-box">${item.jenisBarang}</div>
          </div>

          <div class="form-group">
            <label>Edisi</label>
            <div class="form-box">${item.edisi}</div>
          </div>

          <div class="form-group">
            <label>Stok</label>
            <div class="form-box">${item.stok}</div>
          </div>

        </div>
      </div>
    `;
    container.innerHTML += html;
  });
}


// PREVIEW GAMBAR
document.getElementById("cover").addEventListener("change", function () {
  let file = this.files[0];
  if (file) {
    let url = URL.createObjectURL(file);
    let preview = document.getElementById("preview");

    preview.src = url;
    preview.style.display = "block";
  }
});

// TAMBAH DATA
function tambahData() {

  let file = document.getElementById("cover").files[0];

  let dataBaru = {
    kodeLokasi: document.getElementById("kodeLokasi").value,
    kodeBarang: document.getElementById("kodeBarang").value,
    namaBarang: document.getElementById("namaBarang").value,
    jenisBarang: document.getElementById("jenisBarang").value,
    edisi: document.getElementById("edisi").value,
    stok: document.getElementById("stok").value,
    cover: file ? URL.createObjectURL(file) : "assets/img/default.jpg"
  };

  dataBahanAjar.push(dataBaru);

  tampilkanData();

  // reset form
  document.querySelectorAll("#modalTambah input").forEach(i => i.value = "");
  document.getElementById("preview").style.display = "none";

  // tutup modal
  let modal = bootstrap.Modal.getInstance(document.getElementById("modalTambah"));
  modal.hide();
}

tampilkanData();