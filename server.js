// server.js

const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(express.static('public'));

require('dotenv').config();

const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});

db.connect((err) => {
    if (err) throw err;
    console.log('Conectado ao banco de dados MySQL');
});

app.post('/api/login', (req, res) => {
    const { email, password } = req.body;
    const query = 'SELECT * FROM usuarios WHERE email = ? AND senha = ?';
    db.query(query, [email, password], (err, results) => {
        if (err) throw err;
        if (results.length > 0) {
            res.json({ success: true });
        } else {
            res.json({ success: false });
        }
    });
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});

// server.js (continuação)
app.post('/api/cadastro', (req, res) => {
    const { nome, email, senha, cpf, telefone } = req.body;
    const query = 'INSERT INTO usuarios (nome, email, senha, cpf, telefone) VALUES (?, ?, ?, ?, ?)';
    db.query(query, [nome, email, senha, cpf, telefone], (err, results) => {
        if (err) throw err;
        res.json({ success: true });
    });
});

app.get('/api/produtos', (req, res) => {
    const query = 'SELECT * FROM produtos';
    db.query(query, (err, results) => {
        if (err) throw err;
        res.json(results);
    });
});

app.delete('/api/produtos/:id', (req, res) => {
    const { id } = req.params;
    const query = 'DELETE FROM produtos WHERE id = ?';
    db.query(query, [id], (err, results) => {
        if (err) throw err;
        res.json({ success: true });
    });
});

app.get('/api/relatorios/:tipo', (req, res) => {
    const { tipo } = req.params;
    let query;
    if (tipo === 'estoque') {
        query = 'SELECT nome, quantidade FROM produtos';
    } else if (tipo === 'vendas') {
        // Definir query para relatório de vendas
    } else if (tipo === 'estoque_minimo') {
        // Definir query para relatório de estoque mínimo
    }
    db.query(query, (err, results) => {
        if (err) throw err;
        res.json(results);
    });
});