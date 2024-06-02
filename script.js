/*waktu navbar */
function updateTime() {
    var now = new Date();
            
     var days = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'];
    var day = days[now.getDay()];
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();
            
    var timeString = day + ', ' +
        hours.toString().padStart(2, '0') + ':' +
        minutes.toString().padStart(2, '0') + ':' +
        seconds.toString().padStart(2, '0');
            
        document.getElementById('realtime').innerText = timeString;
}

setInterval(updateTime, 1000);
    
document.addEventListener('DOMContentLoaded', function() {
    updateTime();
});


/*pemesanan*/
function kirimdata() {
    var name = document.getElementById("nama").value;
    var nim = document.getElementById("nomor").value;
    var hewan = document.getElementById("hewan").value;
    var alamat = document.getElementById("alamat").value;
    var tanggal = document.getElementById("tanggal").value;
    var jenis = document.getElementById("jenis").value;
  
    alert(
      "Nama                  : " + name +
      "\nNomor Telepon  : " + nim +
      "\nAlamat                : " + alamat + 
      "\nTanggal               : " + tanggal +
      "\nJenis Hewan       : " + jenis +
      "\nNama Hewan     : " + hewan 
    );
  }

document.addEventListener('DOMContentLoaded', function() {
    flatpickr("#tanggal", {
      enableTime: false,
      dateFormat: "d-m-Y",
      defaultDate: new Date()
    });
  });

/*sidebar actives */
var currentUrl = window.location.href;

document.querySelectorAll('.sidebar a').forEach(function(element) {
    if (element.href === currentUrl) {
        element.classList.add('active');
    }
});
