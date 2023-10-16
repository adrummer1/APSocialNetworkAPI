const router = require('express').Router();

const {
    getUsers,
    getSingleUser,
    createUser,
    updateUser,
    deleteUser,
    addFriend,
    deleteFriend,
} = require('../../controllers/user-control');

// Route for getting all users and creating new user
router.route('/').get(getUsers).post(createUser);

// Route for getting a single user, update user, and delete user by user ID
router.route('/:userId').get(getSingleUser).put(updateUser).delete(deleteUser);

// Route for creating a and removing friends by user ID
router.route('/:userId/friends/:friendId').post(addFriend).delete(deleteFriend);

module.exports = router;

