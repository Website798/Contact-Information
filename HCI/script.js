function generateQR() {
  const name = document.getElementById("fullname").value.trim();
  const age = document.getElementById("age").value.trim();
  const address = document.getElementById("address").value.trim();
  const guardian = document.getElementById("guardian").value.trim();
  const contactAddress = document.getElementById("contactAddress").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const facebook = document.getElementById("facebook").value.trim();

  if (name && age && address && guardian && contactAddress && phone) {
    let info = `Name: ${name}\nAge: ${age}\nAddress: ${address}\nGuardian: ${guardian}\nGuardian Address: ${contactAddress}\nPhone: ${phone}`;
    if (facebook) info += `\nFacebook: ${facebook}`;

    document.getElementById("infoForm").style.display = "none";
    document.getElementById("qrSection").style.display = "block";

    document.getElementById("qrcode").innerHTML = "";

    new QRCode(document.getElementById("qrcode"), {
      text: info,
      width: 280,   // Larger for clarity
      height: 280,
      colorDark: "#000000",
      colorLight: "#ffffff"
    });
  } else {
    alert("Please fill out all required fields!");
  }
}

function downloadQR() {
  const qrCanvas = document.querySelector('#qrcode canvas');
  if (qrCanvas) {
    const link = document.createElement('a');
    link.download = 'emergency_qrcode.png';
    link.href = qrCanvas.toDataURL();
    link.click();
  }
}
