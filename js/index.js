function login(event) {
  event.preventDefault();

  let email = document.getElementById("email").value.trim();
  let password = document.getElementById("password").value.trim();

  let user = dataPengguna.find(u =>
    u.email === email && u.password === password
  );

  if (user) {
    localStorage.setItem("userLogin", JSON.stringify(user));

    Swal.fire({
      icon: 'success',
      title: 'Login Berhasil',
      text: 'Selamat datang ' + user.nama,
      timer: 1500,
      showConfirmButton: false
    }).then(() => {
      window.location.href = "dashboard.html";
    });

  } else {
    Swal.fire({
      icon: 'error',
      title: 'Login Gagal',
      text: 'Email/password yang anda masukkan salah'
    });
  }

  return false;
}