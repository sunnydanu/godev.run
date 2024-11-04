const path = require('node:path');
const express = require('express');

const app = express();
const PORT = 3000;

const expressStaticGzip = require('express-static-gzip');

app.use('/', expressStaticGzip(path.join(__dirname, '..', 'dist')));

// Fallback for SPA: Serve index.html for all non-static routes
app.get('*', (req, res) => {
  res.set('Content-Encoding', 'gzip');
  res.set('Content-Type', 'text/html');
  res.sendFile(path.join(__dirname, '..', 'dist', 'index.html.gz'));
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
