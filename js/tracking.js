function cariDO() {
  let noDO = document.getElementById("noDO").value.trim();
  let hasil = document.getElementById("hasilTracking");

  // VALIDASI
  if (!noDO) {
    hasil.innerHTML = `<div class="alert alert-warning">Masukkan nomor DO</div>`;
    return;
  }

  let data = dataTracking[noDO];

  if (!data) {
    hasil.innerHTML = `<div class="alert alert-danger">Data tidak ditemukan</div>`;
    return;
  }

  // HEADER
  let header = `
    <div class="tracking-header d-flex justify-content-between">
      <div>
        <h5>${data.nama}</h5>
        <p class="mb-1">${data.nomorDO}</p>
        <small>${data.paket}</small>
      </div>
      <div class="text-end">
        <small>${data.tanggalKirim}</small><br>
        <small>${data.ekspedisi}</small>
      </div>
    </div>
  `;


  let perjalanan = [...data.perjalanan].reverse();

  let timeline = `<div class="timeline">`;

  perjalanan.forEach((item, index) => {
    timeline += `
      <div class="timeline-item">
        <div class="dot ${index === 0 ? 'active' : ''}"></div>

        <div class="content">
          <div>
            <p>${item.keterangan}</p>
          </div>
          <div class="text-end">
            <span>${item.waktu}</span>
          </div>
        </div>
      </div>
    `;
  });

  timeline += `</div>`;

  hasil.innerHTML = header + `<h6 class="mt-3">Perjalanan Paket</h6>` + timeline;
}

// ENTER SUPPORT
document.getElementById("noDO").addEventListener("keypress", function(e){
  if(e.key === "Enter"){
    cariDO();
  }
});