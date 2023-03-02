//pengulangan
var sapa = prompt(`masukan nama kamu`);
alert(`haii ${sapa} mari bermain dengan ku`);
var ulang = true;
while (ulang) {
  var com = Math.round(Math.random() * 10);
  for (var i = 3; i > 0; i--) {
    var p = prompt(`${sapa} tolong masukan angka ya dari 1 sampai 10`);
    var kesempatan = i - 1;
    if (p == "") {
      alert(`${sapa} kamu tidak memasukan apapun `);
    } else if (p == null) {
      alert(
        `${sapa} sapa kamu jangan nakal ya! kan aku udah suruh masukin angka dari 1-10`
      );
    } else if (p == " ") {
      alert(
        `ihh ${sapa} kamu ketahuan nggak masukin angka kamu cuma masukin sepasi yaa`
      );
    } else {
      if (p == com) {
        alert(
          `selamat ya ${sapa} kamu sudah menang angka yang kamu tebak  ${com} kan`
        );
      } else if (p > com) {
        if (kesempatan == 0) {
          alert(
            `yahh maaf ya ${sapa} udah kalah, seharusnya ${sapa} masukin angka ${com}`
          );
        } else {
          alert(
            `angka yang ${sapa} masukan terlalu besar silahkan coba lagi, ${sapa} kamu masih memiliki ${kesempatan} kesempatan lagi`
          );
        }
      } else if (p < com) {
        if (kesempatan == 0) {
          alert(
            `yahh maaf ya ${sapa} udah kalah, seharusnya ${sapa} masukin angka ${com}`
          );
        } else {
          alert(
            `angka yang ${sapa} masukan terlalu kecil silahkan coba lagi, ${sapa} masih memiliki ${kesempatan} kesempatan lagi`
          );
        }
      } else `yang ${sapa} masukan bukan angka , tolong masukin angka ya `;
    }
  }
  ulang = confirm(`${sapa} masih mau main lagi nggak??`);
}
alert(`terima kasih ${sapa}`);
