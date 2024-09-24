// login.js

document.getElementById("loginForm").onsubmit = function (e) {
    e.preventDefault(); // Prevenir el envío del formulario

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    const storedUsers = JSON.parse(localStorage.getItem('users')) || [];
    const user = storedUsers.find(u => u.username === username && u.password === password);

    if (user) {
        const expirationTime = convertToMilliseconds(user.duration, user.unit);
        const registrationDateTime = new Date(`${user.FechaDeRegistro}T${user.HoraDeRegistro}`);
        
        const expirationDate = registrationDateTime.getTime() + expirationTime;

        if (Date.now() < expirationDate) {
            //alert("Inicio de sesión exitoso");
            // Redirigir a contenido.html
            document.getElementById("loginForm").style.display = "none";
            document.getElementById("contenido").style.display = "block";
        } else {
            alert("La cuenta ha expirado");
        }
    } else {
        alert("Usuario o contraseña incorrectos");
    }
};



// Función para convertir el tiempo a milisegundos
function convertToMilliseconds(expiration, unit) {
    switch (unit) {
        case 'hours':
            return expiration * 60 * 60 * 1000;
        case 'days':
            return expiration * 24 * 60 * 60 * 1000;
        case 'weeks':
            return expiration * 7 * 24 * 60 * 60 * 1000;
        case 'months':
            return expiration * 30 * 24 * 60 * 60 * 1000; // Aproximado
        case 'years':
            return expiration * 365 * 24 * 60 * 60 * 1000; // Aproximado
        default:
            return 0;
    }
}
