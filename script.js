document.getElementById("Iniciar").addEventListener("submit", function(event) {
    event.preventDefault(); 
    let User = document.getElementById("NM").value;
    let Pass = document.getElementById("Pss").value;
    let userError = document.getElementById("error-message1");
    let passError = document.getElementById("error-message2");
    
    let userValid = (User === "JoseLincango23");
    let passValid = (Pass === "J.eduardo23");

    if (userValid) {
        userError.classList.add("hidden");
    } else {
        userError.textContent = "Usuario incorrecto";
        userError.classList.remove("hidden");
        userError.classList.add("error");
    }

    if (passValid) {
        passError.classList.add("hidden");
    } else {
        passError.textContent = "Contraseña incorrecta";
        passError.classList.remove("hidden");
        passError.classList.add("error");
    }

    if (userValid && passValid) {
        window.location.href = "formulario.html"
    }
});
