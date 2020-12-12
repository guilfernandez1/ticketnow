const express = require("express");
const server = express();
const PORT = process.env.PORT || 4000;
const db = require("./db");

server.use(express.json());

/*
function logRequests(request, response, next){
    const {method, url} = request;

    const logLabel = `[${method.toUpperCase()}] ${url}`;

    console.log(logLabel);

    return next();
}
*/
//server.use(logRequests);

server.get("/tickets", function (request, response) {

    /* 
    const { username } = request.query;
 
     const results = username
         ? tickets.filter(ticket => ticket.username.includes(username))
         : tickets;
     */

    const query = `SELECT * FROM tickets`;

    db.all(query, function (err, rows) {
        if (err) {
            console.log(err);
            return response.status(400).send("Erro no banco de dados!");
        }
        return response.status(200).json(rows);
    });
});

server.post("/tickets", function (request, response) {

    const username = request.body.username;
    const description = request.body.description;
    const status = request.body.status;

    const query = `INSERT INTO tickets(username, description, status)
        VALUES (?, ?, ?);`;

    const values = [username, description, status];

    db.run(query, values, function (err) {
        if (err) {
            console.log(err);
            return response.status(400).send("Erro no banco de dados!");
        }
        return response.status(200).send();
    });
});

server.put("/tickets/:id", function (request, response) {
    const { id } = request.params;
    const { username, description, status } = request.body;

    const ticketIndex = tickets.findIndex(ticket => ticket.username == username);

    if (ticketIndex < 0) {
        return response.status(400).json({ error: "Ticket not found." });
    }

    const ticket = {
        username,
        description,
        status
    };

    tickets[ticketIndex] = ticket;

    return response.json(ticket);
});

server.delete("/tickets/:id", function (request, response) {
    const { id } = request.params;

    const ticketIndex = tickets.findIndex(ticket => ticket.username == username);

    if (ticketIndex < 0) {
        return response.status(400).json({ error: "Ticket not found." });
    }

    tickets.splice(ticketIndex, 1);

    return response.status(200).send();
});

server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`)
});

/**
 * Tipos de requisições:
 * 
 * GET: Buscar informações do back-end
 * POST: Criar uma informação no back-end
 * PUT/PATCH: Alterar uma informação no back-end
 * DELETE: Deletar uma informação no back-end
 */

/**
 * Tipos de parâmetros:
 *
 * Query Params: Filtros e paginação
 * Route Params: Identificar recursos (Atualizar/Deletar)
 * Request Body: Conteúdo na hora criar ou editar um recurso (JSON)
*/

/**
 * Middleware:
 *
 * Interceptador de requisições que pode interromper totalmente a requisição ou alterar dados da requisição.
 */

//path.resolve = permite caminhos relativos. Ex: ".." 
//path.join = não permite caminhos relativos.
//__dirname = backend/src