const express = require("express");
const bodyParser = require('body-parser');
const routes = require('./routes');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());

app.use(cors({
  origin: 'http://127.0.0.1:5500'
}));

// Routes
app.use('/api', routes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
