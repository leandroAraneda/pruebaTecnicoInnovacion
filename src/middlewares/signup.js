import axios from 'axios';
import config from '../config';

export const validateDuplicateUserByEmail = async (req, res, next) => {
    const user = await axios.get(config.DB + `users?email=${req.body.email}`);

    if (user.data[0]) {
        return res.status(400).json({ message: 'El usuario ya existe' });
    } else {
        next();
    }
}
