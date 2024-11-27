// cadastro.js
document.getElementById('cadastroForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;
    const cpf = document.getElementById('cpf').value;
    const telefone = document.getElementById('telefone').value;

    if (!nome || !email || !senha || !cpf || !telefone) {
        document.getElementById('error-message').textContent = 'Todos os campos são obrigatórios.';
        return;
    }

    fetch('/api/cadastro', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ nome, email, senha, cpf, telefone })
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            window.location.href = '/login';
        } else {
            document.getElementById('error-message').textContent = 'Erro ao cadastrar usuário.';
        }
    })
    .catch(error => {
        console.error('Erro:', error);
        document.getElementById('error-message').textContent = 'Ocorreu um erro. Tente novamente.';
    });
});