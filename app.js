const express = require("express");

const app = express();

const products = [];

app.post("/products", (request, response) => {
    // Nome e Preco => name e price

    const body = request.body;

    console.log(body);
});

app.listen(4002, () => console.log("Servidor esta rodando na porta 4002"));