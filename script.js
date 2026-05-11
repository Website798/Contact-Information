function generateQR() {
  const data = {
    fullname: document.getElementById("fullname").value,
    address: document.getElementById("address").value,
    age: document.getElementById("age").value,
    gender: document.getElementById("gender").value,
    guardian: {
      name: document.getElementById("guardianName").value,
      address: document.getElementById("guardianAddress").value,
      phone: document.getElementById("guardianPhone").value,
      facebook: document.getElementById("guardianFacebook").value
    },
    healthConcerns: document.getElementById("healthConcerns").value,
    contacts: [
      {
        name: document.getElementById("contact1Name").value,
        phone: document.getElementById("contact1Phone").value,
        address: document.getElementById("contact1Address").value
      },
      {
        name: document.getElementById("contact2Name").value,
        phone: document.getElementById("contact2Phone").value,
        address: document.getElementById("contact2Address").value
      },
      {
        name: document.getElementById("contact3Name").value,
        phone: document.getElementById("contact3Phone").value,
        address: document.getElementById("contact3Address").value
      }
    ]
  };

  const qrText = JSON.stringify(data, null, 2);

  document.getElementById("infoForm").style.display = "none";
  document.getElementById("qrSection").style.display = "block";

  document.getElementById("qrcode").innerHTML = "";
  new QRCode(document.getElementById("qrcode"), {
    text: qrText,
    width: 220,
    height: 220,
    colorDark: "#000000",   // Black QR dots
    colorLight: "#ffffff",  // White background
    correctLevel: QRCode.CorrectLevel.H
  });
}

function downloadQR() {
  const canvas = document.querySelector("#qrcode canvas");
  if (canvas) {
    const link = document.createElement("a");
    link.download = "emergency-info.png";
    link.href = canvas.toDataURL();
    link.click();
  }
}

function goBack() {
  document.getElementById("infoForm").style.display = "block";
  document.getElementById("qrSection").style.display = "none";
}
