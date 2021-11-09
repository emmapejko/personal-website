const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;
const DIST_DIR = path.resolve(__dirname, '..', 'client/dist');

app.use(express.json());
app.use(express.static(DIST_DIR));

app.get('*', (req, res) => {
  res.sendFile(path.resolve(DIST_DIR, 'index.html'));
});

app.listen(PORT, () => {
  console.info(`server running on :${PORT}`);
});

module.exports = app;