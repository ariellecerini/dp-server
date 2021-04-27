const userDispatch = require('../models/user-model')

createUserDispatch = (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'Unable to dispatch user keystroke data',
        })
    }

    const userData = new userDispatch(body)

    if (!userData) {
        return res.status(400).json({ success: false, error: err })
    }

    userData
        .save()
        .then(() => {
            return res.status(201).json({
                success: true,
                id: userData._id,
                message: 'userDispatch sent created!',
            })
        })
        .catch(error => {
            return res.status(400).json({
                error,
            })
        })
}
    module.exports = {
    createUserDispatch
}
