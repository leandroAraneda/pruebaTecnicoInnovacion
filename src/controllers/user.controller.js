import User from '../models/User';
import axios from 'axios';
import jwt from 'jsonwebtoken'
import config from '../config';

export const detailUser = async (req, res) => {
    const token = req.headers['prueba-token'];
    const user = await axios.get(config.DB + `users?token=${token}`);
    if (user.data[0]) {
        res.json(user.data[0]);
    } else {
        return res.status(404).json({ message: 'El usuario no existe' });
    }
};

export const editUser = async (req, res) => {
    const token = req.headers['prueba-token'];
    const user = await axios.get(config.DB + `users?token=${token}`);
    if (user.data[0]) {
        const { name, email, password } = req.body;
        const dataUser = {
            name,
            email,
            password: await User.encryptPassword(password),
        };
        const updateUser = await axios.patch(config.DB + `users/${user.data[0]._id}`, dataUser);
        res.json(updateUser.data);
    } else {
        return res.status(404).json({ message: 'El usuario no existe' });
    }
};

export const deleteUser = async (req, res) => {
    const token = req.headers['prueba-token'];
    const user = await axios.get(config.DB + `users?token=${token}`);
    if (user.data[0]) {
        const deleteUser = await axios.delete(config.DB + `users/${user.data[0]._id}`);
        res.json(deleteUser.data);
    } else {
        return res.status(404).json({ message: 'El usuario no existe' });
    }
};