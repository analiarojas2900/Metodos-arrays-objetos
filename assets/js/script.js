// Arreglos de consultas médicas
const traumatologia = [
    {hora: '08:00', especialista: 'Zuliana Araya', paciente: 'Pedro Piedra', rut: '12345678-9', prevision: 'FONASA'},
    {hora: '09:00', especialista: 'René Poblete', paciente: 'Ana Gellona', rut: '13123329-7', prevision: 'ISAPRE'},
    {hora: '09:30', especialista: 'María Solar', paciente: 'Ramiro Andrade', rut: '12221451-K', prevision: 'FONASA'},
    {hora: '10:00', especialista: 'Raúl Loyola', paciente: 'Carmen Isla', rut: '10112348-3', prevision: 'ISAPRE'},
    {hora: '10:30', especialista: 'Antonio Larenas', paciente: 'Pablo Loayza', rut: '13453234-1', prevision: 'ISAPRE'},
    {hora: '12:00', especialista: 'Matías Aravena', paciente: 'Susana Poblete', rut: '14345656-6', prevision: 'FONASA'}
];

const radiologia = [
    {hora: '09:00', especialista: 'Cecilia Pérez', paciente: 'Ana Torres', rut: '98765432-1', prevision: 'ISAPRE'},
    {hora: '09:30', especialista: 'Carlos Castro', paciente: 'Pedro González', rut: '87654321-0', prevision: 'FONASA'},
    // otros registros...
];

const dental = [
    {hora: '08:30', especialista: 'Andrea Zúñiga', paciente: 'Marcela Retamal', rut: '11123425-6', prevision: 'ISAPRE'},
    {hora: '09:00', especialista: 'Marco Sepúlveda', paciente: 'Juan Pérez', rut: '11222333-4', prevision: 'FONASA'},
    {hora: '09:30', especialista: 'Paula Roa', paciente: 'Ana Contreras', rut: '22334455-6', prevision: 'ISAPRE'},
    {hora: '10:00', especialista: 'Carlos Troncoso', paciente: 'Carlos González', rut: '66778899-0', prevision: 'FONASA'},
    // otros registros...
];

// 1. Agregar horas al arreglo de Traumatología (ya incluidas en el array)

// 2. Eliminar primer y último elemento del arreglo de Radiología
radiologia.shift(); // Elimina el primer elemento
radiologia.pop(); // Elimina el último elemento

// 3. Imprimir lista de consultas médicas de Dental
const consultasDentalDiv = document.getElementById('consultas-dental');
dental.forEach(consulta => {
    consultasDentalDiv.innerHTML += `<p>${consulta.hora} - ${consulta.especialista} - ${consulta.paciente} - ${consulta.rut} - ${consulta.prevision}</p>`;
});

// 4. Imprimir listado total de pacientes
const pacientes = [...traumatologia, ...radiologia, ...dental].map(consulta => consulta.paciente);
const listaPacientesDiv = document.getElementById('lista-pacientes');
pacientes.forEach(paciente => {
    listaPacientesDiv.innerHTML += `<p>${paciente}</p>`;
});

// 5. Filtrar pacientes de ISAPRE en Dental
const isapreDentalDiv = document.getElementById('isapre-dental');
dental.filter(consulta => consulta.prevision === 'ISAPRE').forEach(consulta => {
    isapreDentalDiv.innerHTML += `<p>${consulta.paciente} - ${consulta.prevision}</p>`;
});

// 6. Filtrar pacientes de FONASA en Traumatología
const fonasaTraumaDiv = document.getElementById('fonasa-trauma');
traumatologia.filter(consulta => consulta.prevision === 'FONASA').forEach(consulta => {
    fonasaTraumaDiv.innerHTML += `<p>${consulta.paciente} - ${consulta.prevision}</p>`;
});
