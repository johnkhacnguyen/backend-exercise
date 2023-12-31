// const express = require('express');
// const app = express();

const app = require('./app');

const {PORT} = require('./util/config');
const {connectToDatabase} = require('./util/db');

// const todosRouter = require('./controllers/todos');
// const categorysRouter = require('./controllers/categories');
// const usersRouter = require('./controllers/users');
// const loginRouter = require('./controllers/login');

// app.use(express.json());

// app.use('/api/todos', todosRouter);
// app.use('/api/categories', categorysRouter);
// app.use('/api/users', usersRouter);
// app.use('/api/login', loginRouter);

const start = async () => {
  await connectToDatabase();
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
};

start();
