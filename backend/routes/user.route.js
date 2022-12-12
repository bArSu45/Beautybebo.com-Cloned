const express = require('express');
const { UserModel } = require('../models/User.model');

const userRouter = express.Router();

userRouter.get('/', async (req, res) => {
    try {
        const users = await UserModel.find();
        res.send(users);
    } catch (e) {
        res.status(500).send({ Error: 'server error' });
    }
});

module.exports = { userRouter };
