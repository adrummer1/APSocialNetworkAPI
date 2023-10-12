const router = require('express').Router();

const {
    getUsers,
    getSingleUsers,
    createUser,
    updateUser,
    deleteUser,
    addFriend,
    removeFriend,
} = require('../../')