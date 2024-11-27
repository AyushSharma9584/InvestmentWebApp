const User = require('../Model/User.model')
const register = require('../Model/Register.model')
const Admin = require("../Model/Admin.model")
const Support = require("../Model/support")



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
                message: "user not existedd...",
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


const getAdminByEmailRepo = async (email) => {
    try {
        const em = email.toLowerCase()
        const admin = await Admin.findOne({
            email: em
        })
        if (admin) {
            return {
                message: "Admin existed...",
                code: 200,
                data: admin
            }
        }
        else {
            return {
                message: "Admin not existed...",
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
        const Register = new register(data)
        const add = await Register.save()
        return add
    }
    catch (error) {
        console.log("internal server error user", error)
        throw error;
    }
}
const ApprovalRepo = async (data) => {
    try {
        const { status, email } = data;
        let updatedItem;

        if (status === "Approved") {
            updatedItem = await register.findOneAndUpdate(
                { email },
                { $set: { approval_status: "Approved", updated_date: Date.now() } },
                { new: true, runValidators: true }
            );
            return {
                code: 200
            }
        } else if (status === "Rejected") {
            updatedItem = await register.findOneAndUpdate(
                { email },
                { $set: { approval_status: "Rejected", updated_date: Date.now() } },
                { new: true, runValidators: true }
            );
            return {
                code: 201
            }
        }

    } catch (error) {
        console.log("Internal server error:", error);
        throw error;
    }
};


const GetAllRepo = async () => {
    try {
        const user = await User.find()
        return user
    }
    catch (error) {
        console.log("internal server error user", error)
        throw error;
    }
}

const joinBothlRepo = async () => {
    try {
        const user = await User.aggregate([
            {
                $lookup: {
                    from: "register", // Ensure the name matches your actual collection in MongoDB
                    localField: "email",  // The field from the `User` collection
                    foreignField: "email", // The field from the `Registration` collection
                    as: "registrationDetails", // The name of the array field to store matched documents
                }
            },
            {
                $project: {
                    _id: 0, // Exclude the `_id` field from the output (optional)
                    name: 1, // Include specific fields from the `User` collection (adjust as needed)
                    email: 1,
                    register_status: 1,
                    registrationDetails: 1, // Include the joined data
                }
            }
        ]);

        console.log(user);
        return user;
    } catch (error) {
        console.log("Internal server error in joinBothRepo:", error);
        throw error;
    }
}

const GetKycRepo = async (email) => {
    try {
        const user = await register.findOne({ email: email })
        return user
    }
    catch (error) {
        console.log("internal server error user", error)
        throw error;
    }
}

const DeleteUserRepo = async (email) => {
    try {
        let user = await User.findOne({ email: email })
        if (!user) {
            return false
        } else {
            await User.deleteOne({ email: email });
            const kyc = await register.findOne({ email: email })
            if (kyc) {
                await register.deleteOne({ email: email })
            }
            return true
        }

    }
    catch (error) {
        console.log("internal server error user", error)
        throw error;
    }
}


const UpdateStatusRepo = async (em) => {
    try {
        const email = em.toLowerCase()
        const user = await User.findOne({
            email: email
        })
        console.log(user)
        if (user) {
            const updatedItem = await User.findOneAndUpdate(
                { email },
                { $set: { register_status: true } },
                { new: true, runValidators: true }
            );
            console.log(updatedItem)
            return updatedItem

        }


    }
    catch (error) {
        console.log("internal server error user", error)
        throw error;
    }
}



const SupportRepo = async (data) => {
    try {
        const support = new Support(data)
        const add = await support.save()
        return add
    }
    catch (error) {
        console.log("internal server error user", error)
        throw error;
    }
}

module.exports = {
    getUserByEmailRepo, RegisterRepo, UpdateStatusRepo, getAdminByEmailRepo, SupportRepo, GetAllRepo, DeleteUserRepo,
    GetKycRepo, ApprovalRepo, joinBothlRepo
}