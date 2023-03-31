import User from '../models/User';
import axios from 'axios';
import jwt from 'jsonwebtoken'
import config from '../config';

export const signUp = async (req, res) => {
    const { name, email, password } = req.body;
    const newUser = new User({
        name,
        email,
        password: await User.encryptPassword(password)
    });
    const saveUser = await axios.post(config.DB + 'users', newUser);
    res.status(200).json(saveUser.data);
};

export const signIn = async (req, res) => {
    const user = await axios.get(config.DB + `users?email=${req.body.email}`);
    if (user.data[0]) {
        const passwordValidationResult = await User.comparePassword(req.body.password, user.data[0].password);
        if (passwordValidationResult) {
            const token = jwt.sign({ id: user.data[0]._id }, config.SECRET, {
                expiresIn: 86400
            });

            await axios.patch(config.DB + `users/${user.data[0]._id}`, { token: token });

            res.json(token);
        } else {
            return res.status(401).json({ message: 'Contraseña incorrecta' });
        }

    } else {
        return res.status(404).json({ message: 'El usuario no existe' });
    }
};