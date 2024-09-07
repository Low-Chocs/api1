const express = require('express');
const app = express();

const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.json({ 
        "Instancia": 'Instancia #1 - API #1',
        "Curso": "Seminario de Sistemas 1",
        "Estudiante": "Luis Mariano Moreira García 202010770",
    
    });
});

app.get('/check', (req, res) => {
    res.status(200).send('OK');
  });

app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
  });