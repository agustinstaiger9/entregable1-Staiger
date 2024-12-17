// Variables y constantes
const nombre = prompt("¡Hola! ¿Como te llamas?");

if (nombre === null || nombre.trim() === "") {
    alert("Operación cancelada");
} else {
    const opciones = ["Sumar", "Restar", "Multiplicar", "Dividir"];


    function pedirOperacion() {
        let mensaje = "Selecciona una operación:\n";
        for (let i = 0; i < opciones.length; i++) {
            mensaje += `${i + 1}. ${opciones[i]}\n`;
        }
        return parseInt(prompt(mensaje)) - 1;
    }

    function realizarOperacion(opcion, num1, num2) {
        switch (opcion) {
            case 0:
                return num1 + num2;
            case 1:
                return num1 - num2;
            case 2:
                return num1 * num2;
            case 3:
                return num1 / num2;
            default:
                return "Opción no válida";
        }
    }

    // Función principal
    function simulador() {
        alert(`Bienvenido, ${nombre}! Vamos a realizar una operación matemática.`);
        const operacion = pedirOperacion();
        const num1 = parseFloat(prompt("Ingresa el primer número:"));
        const num2 = parseFloat(prompt("Ingresa el segundo número:"));

        const resultado = realizarOperacion(operacion, num1, num2);
        alert(`El resultado de tu operación es: ${resultado}`);
        console.log(`Operación realizada por ${nombre}: ${opciones[operacion]} de ${num1} y ${num2} = ${resultado}`);
    }


    simulador();
}
