let nombres = [];

function agregar() {
    const input = document.getElementById('nombre');
    if (input.value.trim()) {
        nombres.push(input.value.trim());
        nombres.sort();
        document.getElementById('resultado').value = nombres.join('\n');
        input.value = '';
    }
}
