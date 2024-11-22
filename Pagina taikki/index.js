document.getElementById('submi').addEventListener('click', function() {
    const username = document.getElementById('inputUser').value;
    const password = document.getElementById('password').value;

    // Ejemplo simple de validación
    if (username === 'usuario' && password === 'contraseña') {
        document.getElementById('message').textContent = '¡Inicio de sesión exitoso!';
        document.getElementById('message').style.color = 'green';
    } else {
        document.getElementById('message').textContent = 'Usuario o contraseña incorrectos.';
    }
});
