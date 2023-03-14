const { getAll, create, getOne, remove, update, verifyEmail, login, getLoggedUser, updatePassword, changePassword } = require('../controllers/user.controllers');
const express = require('express');
const verifyJWT = require('../utils/verifyJWT.JS');

const routerUser = express.Router();

routerUser.route('/')
    .get(verifyJWT, getAll)
    .post(create);

routerUser.route('/:id')
    .get(verifyJWT, getOne)
    .delete(verifyJWT, remove)
    .put(verifyJWT, update);

routerUser.route('/verify/:code')
    .get(verifyEmail);

routerUser.route('/login')
    .post(login);

routerUser.route('/me')
    .get(verifyJWT, getLoggedUser);

routerUser.route('/reset_password')
    .post(updatePassword);

routerUser.route('/reset_password/:code')
    .post(changePassword);

module.exports = routerUser;