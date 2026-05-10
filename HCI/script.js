function generateQR() {
  const fullname = document.getElementById("fullname").value.trim();
  const age = document.getElementById("age").value.trim();
  const address = document.getElementById("address").value.trim();

  // Guardian (required)
  const guardianName = document.getElementById("guardianName").value.trim();
  const guardianAddress = document.getElementById("guardianAddress").value.trim();
  const guardianPhone = document.getElementById("guardianPhone").value.trim();
  const guardianFacebook = document.getElementById("guardianFacebook").value.trim();

  // Mother
  const motherName = document.getElementById("motherName").value.trim();
  const motherAddress = document.getElementById("motherAddress").value.trim();
  const motherPhone = document.getElementById("motherPhone").value.trim();
  const motherFacebook = document.getElementById("motherFacebook").value.trim();

  // Father
  const fatherName = document.getElementById("fatherName").value.trim();
  const fatherAddress = document.getElementById("fatherAddress").value.trim();
  const fatherPhone = document.getElementById("fatherPhone").value.trim();
  const fatherFacebook = document.getElementById("fatherFacebook").value.trim();

  // Validate required fields
  if (!fullname || !age || !address || !guardianName || !guardianAddress || !guardianPhone) {
    alert("Please fill out all required fields!");
    return;
  }

  // Build emergency info string
  let info = `Name: ${fullname}\nAge: ${age}\nAddress: ${address}\n\nGuardian: ${guardianName}\nAddress: ${guardianAddress}\nPhone: ${guardianPhone}`;
  if (guardianFacebook) info += `\nFacebook: ${guardianFacebook}`;

  if (motherName || motherAddress || motherPhone || motherFacebook) {
    info += `\n\nMother: ${motherName || "N/A"}\nAddress: ${motherAddress || "N/A"}\nPhone: ${motherPhone || "N/A"}`;
    if (motherFacebook) info += `\nFacebook: ${motherFacebook}`;
  }

  if (fatherName || fatherAddress || fatherPhone || fatherFacebook) {
    info += `\n\nFather: ${fatherName || "N/A"}\nAddress: ${fatherAddress || "N/A"}\nPhone: ${fatherPhone || "N/A"}`;
    if (fatherFacebook) info += `\nFacebook: ${fatherFacebook}`;
  }

  // Show QR section
  document.getElementById("infoForm").style.display = "none";
  document.getElementById("qrSection").style.display = "block";
  document.getElementById("qrcode").innerHTML = "";

  // Generate QR
  new QRCode(document.getElementById("qrcode"), {
    text: info,
    width: 280,
    height: 280,
    colorDark: "#000000",
    colorLight: "#ffffff"
  });
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

function goBack() {
  document.getElementById("qrSection").style.display = "none";
  document.getElementById("infoForm").style.display = "block";
}
