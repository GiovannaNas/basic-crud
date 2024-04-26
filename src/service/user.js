class UserService {
  constructor(userRepository) {
    this.userRepository = userRepository;
  }

  getAllUsers() {
    return this.userRepository.getAllUsers();
  }

  getUserById(id) {
    return this.userRepository.getUserById(id);
  }

  addUser(user) {
    return this.userRepository.addUser(user);
  }

  updateUser(id, newUser) {
    return this.userRepository.updateUser(id, newUser);
  }

  deleteUser(id) {
    return this.userRepository.deleteUser(id);
  }
}

module.exports = UserService;
