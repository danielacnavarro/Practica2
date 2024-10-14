let operandoA = 0;
let operandoB = 0;
let operacion = null;

const agregarNumero = (numero) => {
    const input = document.getElementById('inputNumero');
    if (input.value === '0') {
        input.value = numero;
    } else {
        input.value += numero;
    }
};

const agregarPunto = () => {
    const input = document.getElementById('inputNumero');
    if (!input.value.includes('.')) {
        input.value += '.';
    }
};

const setOperacion = (op) => {
    operandoA = parseFloat(document.getElementById('inputNumero').value);
    operacion = op;
    document.getElementById('inputNumero').value = '0';
};

const calcular = () => {
    operandoB = parseFloat(document.getElementById('inputNumero').value);
    let resultado = 0;

    switch (operacion) {
        case '+':
            resultado = operandoA + operandoB;
            break;
        case '-':
            resultado = operandoA - operandoB;
            break;
        case '*':
            resultado = operandoA * operandoB;
            break;
        case '/':
            if (operandoB === 0) {
                alert('Error: División por cero');
                return;
            }
            resultado = operandoA / operandoB;
            break;
        default:
            return;
    }

    document.getElementById('inputNumero').value = resultado;
    actualizarInfo(`Resultado: ${resultado}`);
    operandoA = resultado;
    operacion = null;
};

const resetear = () => {
    document.getElementById('inputNumero').value = '0';
    operandoA = 0;
    operandoB = 0;
    operacion = null;
    actualizarInfo('Calculadora');
};

const cambiarSigno = () => {
    const input = document.getElementById('inputNumero');
    input.value = parseFloat(input.value) * -1;
};

const percent = () => {
    const input = document.getElementById('inputNumero');
    input.value = parseFloat(input.value) / 100;
};

const raizCuadrada = () => {
    const numero = parseFloat(document.getElementById('inputNumero').value);
    if (isNaN(numero)) {
        alert('Error: Entrada no válida');
        return;
    }
    const resultado = Math.sqrt(numero);
    document.getElementById('inputNumero').value = resultado;
    actualizarInfo(`Raíz cuadrada. Resultado: ${resultado}`);
};

const potencia = () => {
    const base = parseFloat(document.getElementById('inputNumero').value);
    const exponente = parseFloat(prompt('Ingrese el exponente:'));
    if (isNaN(base) || isNaN(exponente)) {
        alert('Error: Entrada no válida');
        return;
    }
    const resultado = Math.pow(base, exponente);
    document.getElementById('inputNumero').value = resultado;
    actualizarInfo(`Potencia. Resultado: ${resultado}`);
};

const fact = () => {
    let numero = parseInt(document.getElementById('inputNumero').value);
    if (isNaN(numero) || numero < 0) {
        alert('Error: Entrada no válida');
        return;
    }
    let resultado = 1;
    for (let i = 1; i <= numero; i++) {
        resultado *= i;
    }
    document.getElementById('inputNumero').value = resultado;
    actualizarInfo(`Factorial. Resultado: ${resultado}`);
};

const sumatorio = () => {
    let valores = document.getElementById('inputNumero').value.split(',').map(Number);
    if (valores.some(isNaN)) {
        alert('Error: Entrada no válida');
        return;
    }
    let resultado = valores.reduce((acc, val) => acc + val, 0);
    document.getElementById('inputNumero').value = resultado;
    actualizarInfo(`Sumatorio. Resultado: ${resultado}`);
};

const ordenar = () => {
    let valores = document.getElementById('inputNumero').value.split(',').map(Number);
    if (valores.some(isNaN)) {
        alert('Error: Entrada no válida');
        return;
    }
    valores.sort((a, b) => a - b);
    document.getElementById('inputNumero').value = valores.join(',');
    actualizarInfo('Valores ordenados');
};

const revertir = () => {
    let valores = document.getElementById('inputNumero').value.split(',').map(Number);
    if (valores.some(isNaN)) {
        alert('Error: Entrada no válida');
        return;
    }
    valores.reverse();
    document.getElementById('inputNumero').value = valores.join(',');
    actualizarInfo('Valores revertidos');
};

const quitarElemento = () => {
    let valores = document.getElementById('inputNumero').value.split(',');
    if (valores.length === 0) {
        alert('Error: No hay elementos para quitar');
        return;
    }
    const indice = parseInt(prompt('Ingrese el índice del elemento que desea eliminar (comenzando desde 0):'), 10);
    if (isNaN(indice) || indice < 0 || indice >= valores.length) {
        alert('Error: Índice no válido');
        return;
    }
    valores.splice(indice, 1);
    document.getElementById('inputNumero').value = valores.join(',');
    actualizarInfo('Elemento eliminado de la lista.');
};

const actualizarInfo = (mensaje) => {
    document.getElementById('info').innerText = mensaje;
};
