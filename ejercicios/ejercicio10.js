function elegirPizza(tipo) {
    let ingredientesDisponibles = [];

    if (tipo === 'vegetariana') {
        ingredientesDisponibles = ['Pimiento', 'Tofu'];
    } else if (tipo === 'no vegetariana') {
        ingredientesDisponibles = ['Pepperoni', 'Jamón', 'Salmón'];
    } else {
        console.log('Opción de pizza no válida.');
        return;
    }

    let mensaje = `Elige un ingrediente adicional para tu pizza ${tipo}:\n`;

    for (let i = 0; i < ingredientesDisponibles.length; i++) {
        mensaje += `${i + 1}. ${ingredientesDisponibles[i]}\n`;
    }

    let opcion = parseInt(prompt(mensaje)) - 1;

    if (isNaN(opcion) || opcion < 0 || opcion >= ingredientesDisponibles.length) {
        console.log('Opción no válida.');
        return;
    }

    let ingredienteElegido = ingredientesDisponibles[opcion];
    let esVegetariana = tipo === 'vegetariana';

    console.log(`Has elegido una pizza ${tipo}:`);
    console.log(`- Mozzarella`);
    console.log(`- Tomate`);
    console.log(`- ${ingredienteElegido}`);

    if (esVegetariana) {
        console.log('- Pimiento');
        console.log('- Tofu');
    } else {
        console.log('- Pepperoni');
        console.log('- Jamón');
        console.log('- Salmón');
    }
}
