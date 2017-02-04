const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use((req, res, next) => {
  if (req.headers['x-forwarded-proto'] === 'https') {
    res.redirect(`http://${req.hostname}${req.url}`);
  } else {
    next();
  }
});

app.use(express.static('dist'));

app.listen(PORT, () => {
      console.log(`express server is on ${PORT}`);
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/dist/index.html'));
});
