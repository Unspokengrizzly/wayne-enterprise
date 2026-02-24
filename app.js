/* DEMO INVESTOR DATA */
const investors = [
  { email: "investor1@test.com", password: "1234" },
  { email: "investor2@test.com", password: "1234" }
];

function login() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const found = investors.find(i => i.email === email && i.password === password);

  if (found) {
    localStorage.setItem("loggedIn", "yes");
    window.location = "dashboard.html";
  } else {
    document.getElementById("message").innerText = "Invalid credentials";
    logSecurity("Failed login attempt");
  }
}

/* AI-SIMULATED OTP */
function resetPassword() {
  const otp = Math.floor(100000 + Math.random() * 900000);
  alert("AI Security System:\nOTP Approved → " + otp);
  logSecurity("OTP generated and approved by AI");
}

function contact() {
  if (confirm("Contact Wayne Enterprise via Email?")) {
    window.location = "mailto:kariukiwayne21@gmail.com";
  } else {
    window.location = "https://wa.me/254700000000";
  }
}

/* INVISIBLE SECURITY LOG */
function logSecurity(event) {
  console.log("AI SECURITY LOG:", event);
}
