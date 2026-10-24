const peso = document.getElementById("peso");
const altura = document.getElementById("altura");
const imc = document.getElementById("imc");
const resultado = document.getElementById("resultado");

document.getElementById("calcular").addEventListener("click", function (e) {
    e.preventDefault();

    const kg = parseFloat(peso.value);
    const metros = parseFloat(altura.value) / 100;

    if (!kg || !metros || kg <= 0 || metros <= 0) {
        imc.textContent = "-";
        resultado.textContent = "Ingresa datos válidos";
        return;
    }

    const valor = kg / (metros * metros);
    imc.textContent = valor.toFixed(2);

    if (valor < 18.5) {
        resultado.textContent = "Bajo peso";
    } else if (valor < 25) {
        resultado.textContent = "Peso normal";
    } else if (valor < 30) {
        resultado.textContent = "Sobrepeso";
    } else {
        resultado.textContent = "Obesidad";
    }
});

document.getElementById("limpiar").addEventListener("click", function (e) {
    e.preventDefault();
    peso.value = "";
    altura.value = "";
    imc.textContent = "-";
    resultado.textContent = "-";
});
