let usersDB = require('../db/user')

class UserRepository {
  getAllUsers() {
    return usersDB;
  }

  getUserById(id) {
    return usersDB.find(user => user.id === id);
  }

  addUser(user) {
    usersDB.push(user);
    return user;
  }

  updateUser(id, newUser) {
    let found = false;
    usersDB = usersDB.map(user => {
      if (user.id === id) {
        found = true;
        return { ...user, ...newUser };
      }
      return user;
    });
    return found ? newUser : null;
  }

  deleteUser(id) {
    const lengthBefore = usersDB.length;
    usersDB = usersDB.filter(user => user.id !== id);
    return usersDB.length < lengthBefore;
  }
}

module.exports = UserRepository;
