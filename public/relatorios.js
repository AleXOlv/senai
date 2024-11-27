// relatorios.js
function gerarRelatorio(tipo) {
    fetch(`/api/relatorios/${tipo}`)
        .then(response => response.json())
        .then(data => {
            const relatorioDiv = document.getElementById('relatorio');
            relatorioDiv.innerHTML = ''; // Limpar relatório anterior

            if (tipo === 'estoque') {
                data.forEach(produto => {
                    const p = document.createElement('p');
                    p.textContent = `Produto: ${produto.nome}, Quantidade: ${produto.quantidade}`;
                    relatorioDiv.appendChild(p);
                });
            } else if (tipo === 'vendas') {
                // Lógica para relatório de vendas
            } else if (tipo === 'estoque_minimo') {
                // Lógica para relatório de estoque mínimo
            }
        })
        .catch(error => console.error('Erro:', error));
}