const express = require('express');
const app = express();

const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('🚀 DevOps Başladı Agam!');
});

app.listen(port, () => {
  console.log(`App çalışıyor: http://localhost:${port}`);
});
