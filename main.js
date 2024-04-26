const express = require('express');
const bodyParser = require('body-parser');
const UserRepository = require('./src/repositories/user.js');
const UserService = require('./src/service/user.js');
const UserController = require('./src/controllers/user.js');

const app = express();
const port = 3000;

const userRepository = new UserRepository();
const userService = new UserService(userRepository);
const userController = new UserController(userService);

app.use(bodyParser.json());

// REGISTRA AS ROTAS
app.get('/users', userController.getAllUsers.bind(userController));
app.get('/users/:id', userController.getUserById.bind(userController));
app.post('/users', userController.addUser.bind(userController));
app.put('/users/:id', userController.updateUser.bind(userController));
app.delete('/users/:id', userController.deleteUser.bind(userController));
//


// INICIA a APLICACÃO
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
