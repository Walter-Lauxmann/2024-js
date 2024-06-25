function calcular() {
    // Constantes del DOM
    const inputBase = document.getElementById('base');
    const inputAltura = document.getElementById('altura');
    const spanSup = document.getElementById('sup');

    // Variables de ingreso de datos
    let base = inputBase.value;
    let altura = inputAltura.value;

    // Cálculo de la superficie
    sup = base * altura / 2;

    // Mostrar la superficie
    spanSup.innerHTML = sup;
}

function calcular2() {
    // Constantes del DOM
    const inputBase2 = document.getElementById('base2');
    const inputAltura2 = document.getElementById('altura2');
    const spanSup2 = document.getElementById('sup2');
    const spanPer2 = document.getElementById('per2');

    // Variables de ingreso de datos
    let base = parseFloat(inputBase2.value);
    let altura = parseFloat(inputAltura2.value);

    // Cálculo de la superficie
    sup = base * altura;
    // Cálculo del perímetro
    per = 2 * (base + altura);

    // Mostrar la superficie
    spanSup2.innerHTML = sup;
    spanPer2.innerHTML = per;

}