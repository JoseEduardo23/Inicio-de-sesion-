document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("selectGenero").addEventListener("change", function() {
        let selectedGenero = this.options[this.selectedIndex].text;
        document.getElementById("genero").value = selectedGenero;
    });

    document.getElementById("selectPais").addEventListener("change", function() {
        let selectedPais = this.options[this.selectedIndex].text;
        document.getElementById("pais").value = selectedPais;
    });
});
function CalcularCosto() {
    let Val1 = document.getElementById("V1").checked ? document.getElementById("V1").value : null;
    let Val2 = document.getElementById("V2").checked ? document.getElementById("V2").value : null;
    let Val3 = document.getElementById("V3").checked ? document.getElementById("V3").value : null;
    let Tot = document.getElementById("CostoT");

    if (Val1) {
        Tot.value = Val1 * 10 ;
    } else if (Val2) {
        Tot.value = Val2 * 10 ;
    } else if (Val3) {
        Tot.value = Val3 * 10 ;
    } else {
        Tot.value = "0$";
    }
}
document.getElementById("miFormulario").addEventListener("submit", function(event) {
    event.preventDefault();

    let nombre = document.getElementById("nombre").value.trim();
    let genero = document.getElementById("selectGenero").value;
    let edad = document.getElementById("edad").value.trim();
    let correo = document.getElementById("correo").value.trim();
    let pais = document.getElementById("selectPais").value;
    let gustos = document.getElementById("gustos").value.trim();

    let nombreError = document.getElementById("nombre-error");
    let generoError = document.getElementById("genero-error");
    let edadError = document.getElementById("edad-error");
    let correoError = document.getElementById("correo-error");
    let paisError = document.getElementById("pais-error");
    let gustosError = document.getElementById("gustos-error");

    let camposValidos = true;

    if (nombre === "") {
        nombreError.textContent = "*Por favor complete este campo.";
        nombreError.classList.remove("hidden");
        nombreError.classList.add("error2");
        camposValidos = false;
    } else {
        nombreError.classList.add("hidden");
    }

    if (genero === "") {
        generoError.textContent = "*Por favor seleccione una opción.";
        generoError.classList.remove("hidden");
        generoError.classList.add("error2");
        camposValidos = false;
    } else {
        generoError.classList.add("hidden");
    }

    if (edad === "") {
        edadError.textContent = "*Por favor complete este campo.";
        edadError.classList.remove("hidden");
        edadError.classList.add("error2");
        camposValidos = false;
    } else {
        edadError.classList.add("hidden");
    }

    if (correo === "") {
        correoError.textContent = "*Por favor complete este campo.";
        correoError.classList.remove("hidden");
        correoError.classList.add("error2");
        camposValidos = false;
    } else {
        correoError.classList.add("hidden");
    }

    if (pais === "") {
        paisError.textContent = "*Por favor seleccione un país.";
        paisError.classList.remove("hidden");
        paisError.classList.add("error2");
        camposValidos = false;
    } else {
        paisError.classList.add("hidden"); 
    }

    if (gustos === "") {
        gustosError.textContent = "*Por favor complete este campo.";
        gustosError.classList.remove("hidden");
        gustosError.classList.add("error2");
        camposValidos = false;
    } else {
        gustosError.classList.add("hidden");
    }

    if (camposValidos) {
        if (parseInt(edad) >= 18) {
            this.submit();
            window.location.href = "Encuesta.html";
        } else {
            alert("Se le agradece por su participación pero no cumple con la mayoría de edad requerida.");
        }
    }
});   


