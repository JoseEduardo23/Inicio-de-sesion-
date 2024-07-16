function calcularResultado() {
    let puntaje = 0;

    if (document.querySelector('input[name="p1"]:checked').value === "A") {
        puntaje += 2;
    }
    if (document.querySelector('input[name="p2"]:checked').value === "A") {
        puntaje += 2;
    }
    if (document.querySelector('input[name="p3"]:checked').value === "A") {
        puntaje += 2;
    }
    if (document.querySelector('input[name="p4"]:checked').value === "B") {
        puntaje += 2;
    }
    if (document.querySelector('input[name="p5"]:checked').value === "B") {
        puntaje += 2;
    }

    let PT = document.getElementById("resultado");
    PT.textContent = `Tu puntaje es de: ${puntaje}`;

    let Ev = document.getElementById("evaluacion");
    if (puntaje >= 9 && puntaje <= 10) {
        Ev.textContent = "Sobresaliente";
        Ev.classList.add("bien");
    } else if (puntaje >= 7 && puntaje < 9) {
        Ev.textContent = "Buena";
        Ev.classList.add("bien");
    } else if (puntaje >= 5 && puntaje < 7) {
        Ev.textContent = "Regular";
        Ev.classList.add("mal");
    } else {
        Ev.textContent = "Insuficiente";
        Ev.classList.add("mal");
    }
}
