import axios from 'axios';
import jwt from 'jsonwebtoken';
import config from '../config';

export const verifyToken = async (req, res, next) => {
    const token = req.headers['prueba-token'];

    if (token) {
        try {
            const decoded = jwt.verify(token, config.SECRET);
            req.userId = decoded.id;
            const user = await axios.get(config.DB + `users/${req.userId}`);
            if (user) {
                next();
            } else {
                return res.status(404).json({ message: 'No existe el usuario' });
            }
        } catch (error) {
            return res.status(401).json({ message: 'No autorizado' });
        }
    } else {
        return res.status(403).json({ message: 'No existe token' });
    }

}