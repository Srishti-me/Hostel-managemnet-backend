const express = require("express");
const bodyParser = require('body-parser');
const routes = require('./routes');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());

// Allow CORS from any origin
app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use('/api', routes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
