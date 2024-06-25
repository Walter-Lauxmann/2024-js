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

function calcular3() {
    // Constantes del DOM
    const inputRadio = document.getElementById('radio');
    const inputAltura3 = document.getElementById('altura3');
    const spanArea = document.getElementById('area');
    const spanVolumen = document.getElementById('vol');

    const PI = Math.PI;

    // Variables de ingreso de datos
    let radio = parseFloat(inputRadio.value);
    let altura = parseFloat(inputAltura3.value);

    // Cálculo del área
    area = 2 * PI * radio * altura;
    // Cálculo del volumen
    vol = PI * radio**2 * altura;

    // Mostrar el área y el volumen
    spanArea.innerHTML = area;
    spanVolumen.innerHTML = vol;

}
function calcular4() {
    // Constantes del DOM
    const inputMonto = document.getElementById('monto');
    const inputPago = document.getElementById('pago');
    const spanVuelto = document.getElementById('vuelto');

    // Variables de ingreso de datos
    let monto = parseFloat(inputMonto.value);
    let pago = parseFloat(inputPago.value);

    // Cálculo del área
    vuelto = pago - monto;

    // Mostrar el vuelto
    spanVuelto.innerHTML = vuelto;
}
function calcular5() {
    // Constantes del DOM
    const inputDias = document.getElementById('dias');
    const spanDias = document.getElementById('spandias');
    const spanSeg = document.getElementById('seg');

    // Variables de ingreso de datos
    let dias = parseInt(inputDias.value);

    // Cálculo de los segundos
    seg = dias * 24 * 60 * 60;

    // Mostrar el vuelto
    spanDias.innerHTML = dias;
    spanSeg.innerHTML = seg;
}