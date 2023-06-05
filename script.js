const precioTicket = 200; 
const descuentos = {
  Estudiante: 0.8, 
  Trainee: 0.5, 
  Junior: 0.15 
};

function calcularTotal() {
  const cantidadTickets = parseInt(document.querySelector('input[type="number"]').value);
  const categoriaSeleccionada = document.querySelector('select[name="categoria"]').value;
  const descuento = descuentos[categoriaSeleccionada];
  const totalAPagar = (cantidadTickets * precioTicket * (1 - descuento)).toFixed();

  if (cantidadTickets <= 0 || isNaN(cantidadTickets)) {
    alert('La cantidad de tickets debe ser un número positivo.');
    return;
  }

  if (totalAPagar <= 0) {
    alert('El total a pagar debe ser mayor que cero.');
    return;
  }

  parseInt()

  document.querySelector('.total').textContent = `Total a pagar: $${totalAPagar}`;
  
}

document.querySelector('input[value="Resumen"]').addEventListener('click', calcularTotal);

function borrarDatos() {
    document.querySelector('input[type="text"][placeholder="NOMBRE"]').value = '';
    document.querySelector('input[type="text"][placeholder="APELLIDO"]').value = '';
    document.querySelector('input[type="email"]').value = '';
    document.querySelector('input[type="number"]').value = '';
    document.querySelector('select[name="categoria"]').selectedIndex = 0;
    document.querySelector('.total').textContent = 'Total a pagar: $';
  }
  
  document.querySelector('input[value="Borrar"]').addEventListener('click', borrarDatos);
  