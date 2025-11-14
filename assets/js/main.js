// Simpan dan tampilkan foto profil (lokal)
const upload = document.getElementById('profileUpload');
const img = document.getElementById('profileImage');
const saved = localStorage.getItem('profileImage');
if (saved) img.src = saved;

upload?.addEventListener('change', e => {
  const file = e.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = ev => {
    img.src = ev.target.result;
    localStorage.setItem('profileImage', ev.target.result);
  };
  reader.readAsDataURL(file);
});
