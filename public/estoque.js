// estoque.js
document.addEventListener('DOMContentLoaded', function() {
    fetch('/api/produtos')
        .then(response => response.json())
        .then(data => {
            const tableBody = document.querySelector('#estoqueTable tbody');
            data.forEach(produto => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${produto.nome}</td>
                    <td>${produto.quantidade}</td>
                    <td>${produto.preco}</td>
                    <td>${produto.validade}</td>
                    <td>
                        <button onclick="editarProduto(${produto.id})">Editar</button>
                        <button onclick="excluirProduto(${produto.id})">Excluir</button>
                    </td>
                `;
                tableBody.appendChild(row);
            });
        })
        .catch(error => console.error('Erro:', error));
});

function adicionarProduto() {
    // Lógica para adicionar produto
}

function editarProduto(id) {
    // Lógica para editar produto
}

function excluirProduto(id) {
    fetch(`/api/produtos/${id}`, {
        method: 'DELETE'
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            location.reload();
        } else {
            alert('Erro ao excluir produto.');
        }
    })
    .catch(error => console.error('Erro:', error));
}