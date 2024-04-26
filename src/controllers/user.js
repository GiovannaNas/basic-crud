class UserController {
  constructor(userService) {
    this.userService = userService;
  }

  getAllUsers(req, res) {
    const users = this.userService.getAllUsers();
    res.json(users);
  }

  getUserById(req, res) {
    const id = parseInt(req.params.id);
    const user = this.userService.getUserById(id);
    if (!user) {
      res.status(404).send('User not found');
    } else {
      res.json(user);
    }
  }

  addUser(req, res) {
    const newUser = req.body;
    const user = this.userService.addUser(newUser);
    res.status(201).json(user);
  }

  updateUser(req, res) {
    const id = parseInt(req.params.id);
    const newUser = req.body;
    const updatedUser = this.userService.updateUser(id, newUser);
    if (!updatedUser) {
      res.status(404).send('User not found');
    } else {
      res.json(updatedUser);
    }
  }

  deleteUser(req, res) {
    const id = parseInt(req.params.id);
    const deleted = this.userService.deleteUser(id);
    if (deleted) {
      res.status(204).send();
    } else {
      res.status(404).send('User not found');
    }
  }
}

module.exports = UserController;
