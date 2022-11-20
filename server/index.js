const express = require('express');
const cors = require('cors');
const sequelize = require('./db');
const models = require('./models');
const router = require('./routes');
const errorMiddleware = require('./middleware/ErrorMiddleware');
require('dotenv').config();

const PORT = process.env.PORT || 5000;

const app = express();

app.use(cors());
app.use(express.json());
app.use('/api', router);
app.use(errorMiddleware)

app.get('/', (req, res) => {
  res.status(200).json({
    message: 'important message',
  });
});

const start = async() => {
  try {
    await sequelize.authenticate().then(()=>(console.log('good')));
    await sequelize.sync();
    app.listen(PORT, () => console.log(`Server started, port: ${PORT}`))
  } catch(e) {
    console.log(e);
  }
};

start();