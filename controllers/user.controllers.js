import User from './../models/user.models';
import extend from 'lodash/extend';

const create = async (req, res) => {
    const user = new User(req.body);
    try {
        await user.save();
        return res.status(201).json({
            message: 'User Successfully created'
        });
    } catch (err) {
        res.status(400).json({
            error: 'An error occured. The user could not be created.'
        });
    };
};

const userById = async (req, res, next, id) => {
    try {
        let user = await User.findById(id)
        if(!user) {
            return res.status(400).json({
                error: 'User not found'
            });
        }
        req.profile = user
        next()   
    } catch (err) {
        console.log(err)
    };
};

const read = async (req, res) => {
    req.profile.password = undefined
    return res.json(req.profile)
};

const update = async (req, res) => {
    try {
        let user = req.profile
        user = extend(user, req.body)
        user.updated = Date.now()
        await user.save()
        user.password = undefined
        res.json(user)
    } catch (err) {
        return res.status(400).json({
            error: 'An error occurred. The specified user could not be updated.'
        })
    }
};

const remove = async (req, res) => {
    try {
        let user = req.profile
        let deleteUser = await user.remove()
        deleteUser.password = undefined
        res.json(deleteUser)
    } catch (err) {
        return res.status(400).json({
            error: 'An error occured. The specified user could not be deleted.'
        })
    }
};

export default { create, read, update, remove, userById}

