const express = require('express');
const app = express();
const PORT = 3002;

app.use(express.json());

let temario = [
    { id: 1, titulo: 'Introducción a Node.js', descripcion: 'Conceptos básicos de Node.js' },
    { id: 2, titulo: 'Módulos en Node.js', descripcion: 'Cómo usar y crear módulos' },
    { id: 3, titulo: 'Express.js', descripcion: 'Framework para aplicaciones web' }
];

app.get("/temario", (req, res) => {
    res.json(temario);
});

app.post("/agregar", (req, res) => {
    const{id, titulo, descripcion} = req.body;
    const nuevoTema = { id, titulo, descripcion };
    temario.push(nuevoTema);
    res.json({ mensaje: 'Tema agregado', tema: nuevoTema });
})
//me quede en el minuto 45:21

app.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
