const express = require('express');
const fs = require('fs');
const app = express();
const PORT = 3000;

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  next();
});

app.get('/menu', (req, res) => {
  fs.readFile('./menus.json', 'utf8', (err, data) => {
    if (err) {
      console.error('Erreur lors de la lecture du fichier :', err);
      return res.status(500).json({ erreur: 'Impossible de lire le fichier menu' });
    }

    try {
      const menus = JSON.parse(data);
      res.json(menus);
    } catch (parseErr) {
      console.error('Erreur de parsing JSON :', parseErr);
      res.status(500).json({ erreur: 'Fichier JSON invalide' });
    }
  });
});

app.listen(PORT, () => {
  console.log(`✅ Serveur en écoute sur http://localhost:${PORT}`);
});