document.getElementById("login-form").addEventListener("submit", function(event) {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    window.location.href = "dashboard.html";
});
document.getElementById("reserve-btn").addEventListener("click", function() {
    const selectedLab = document.getElementById("lab-select").value;
    alert("Has reservado: " + selectedLab);
});
