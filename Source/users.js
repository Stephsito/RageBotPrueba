// users.js
// Estructura para almacenar usuarios
// Crear usuario: hours=horas, days, weeks-semanas, months=meses, years=años

const users = [
    { 
        username: '1', 
        password: '1', 
        duration: 1, 
        unit: 'years', 
        FechaDeRegistro: '2024-09-22', // Cambiado a formato YYYY-MM-DD
        HoraDeRegistro: '02:15' 
    },
    { 
        username: 'usuario2', 
        password: '1', 
        duration: 1, 
        unit: 'days', 
        FechaDeRegistro: '2024-09-20', // Cambiado a formato YYYY-MM-DD
        HoraDeRegistro: '10:30' 
    },
    // Puedes agregar más usuarios aquí
];

// Almacenar los usuarios en localStorage
function storeUsers() {
    localStorage.setItem('users', JSON.stringify(users));
}

// Llamar a esta función al cargar la página
storeUsers();
