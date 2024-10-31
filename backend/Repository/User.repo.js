const User = require('../Model/User.model')
const register = require('../Model/Register.model')


const getUserByEmailRepo = async (email) => {
    try {
        const em = email.toLowerCase()
        const user = await User.findOne({
            email: em
        })
        if (user) {
            return {
                message: "user existed...",
                code: 200,
                data: user
            }
        }
        else {
            return {
                message: "user not existed...",
                code: 201,
                data: null
            }
        }


    }
    catch (error) {
        console.log("internal server error user", error)
        throw error;
    }
}


const RegisterRepo = async (data) => {
    try {
        const Register = await new register(data)
        const add = Register.save()
        return add
    }
    catch (error) {
        console.log("internal server error user", error)
        throw error;
    }
}


const UpdateStatusRepo = async (data) => {
    try {
        const email = data.email.toLowerCase()
        const user = await User.findOne({
            email: email
        })
        if (user) {
            const updateStatus = {
                ...user,
                register_status: true
            }

            const updatedItem = await User.findOneAndUpdate(
                { email },
                { $set: updateStatus },
                { new: true, runValidators: true }
            );
            return updatedItem

        }

    }
    catch (error) {
        console.log("internal server error user", error)
        throw error;
    }
}

module.exports = {
    getUserByEmailRepo, RegisterRepo, UpdateStatusRepo
}