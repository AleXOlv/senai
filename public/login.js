// login.js
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (!email || !password) {
        document.getElementById('error-message').textContent = 'Todos os campos são obrigatórios.';
        return;
    }

    fetch('/api/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            window.location.href = '/dashboard';
        } else {
            document.getElementById('error-message').textContent = 'Email ou senha inválidos.';
        }
    })
    .catch(error => {
        console.error('Erro:', error);
        document.getElementById('error-message').textContent = 'Ocorreu um erro. Tente novamente.';
    });
});