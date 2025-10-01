import {getAll} from '../models/index'


export const getUsers = (req, res) => {
    const users = getAll();
    res.json(users);
}