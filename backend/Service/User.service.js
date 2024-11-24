const UserRepo = require('../Repository/User.repo')



const RegisterService = async (req, res) => {
    try {

        const na = req.user.userName
        const em = req.user.userEmail

        const { aadhaar_no, ifsc, account_no, pan_no, bank_name, upi_no, city, state, pin_code } = req.body;

        if (!aadhaar_no || !ifsc || !account_no || !pan_no || !bank_name || !city || !state || !pin_code) {
            return res.status(400).json({
                status: "failed",
                message: "Please provide all inputs",
                code: 201
            })
        }
        const isExist = await UserRepo.getUserByEmailRepo(em)
        if (!isExist) {
            return res.status(200).json({
                message: "something went wrong while registering"
            })
        }

        var userData = {
            name: na,
            email: em,
            aadhaar_no,
            ifsc,
            account_no,
            pan_no,
            bank_name,
            upi_no,
            city,
            state,
            pin_code
        }

        const result = await UserRepo.RegisterRepo(userData)

        const updateStatus = await UserRepo.UpdateStatusRepo(em)

        if (!updateStatus || !result) {
            return res.status(404).send('status no updated');
        }

        return res.status(200).json({
            status: "success",
            message: "Registration  successful",
            code: 200
        })


    } catch (error) {
        return res.status(500).json({ error: "internal server error service" })

    }
}

const GetAllService = async (req, res) => {
    try {

        const result = await UserRepo.GetAllRepo()
        if (result.length == 0) {
            return res.status(404).send('no data found')
        }
        return res.status(200).json({
            code: 200,
            status: "success",
            message: "data fetched successfully",
            data: result
        })

    } catch (error) {
        return res.status(400).json({ error: "internal server error service" })
    }
}


const ApprovalService = async (req, res) => {
    try {
        const { status, email } = req.body
        const data = {
            status,
            email
        }
        const result = await UserRepo.ApprovalRepo(data)
        if (result.code == 200) {
            return res.status(200).json({
                code: 200,
                status: "success",
                message: "Kyc Approved successfully !"
            })

        }
        else if (result.code == 201) {
            return res.status(200).json({
                code: 200,
                status: "success",
                message: "Kyc Rejected successfully !"
            })

        } else {
            return res.status(400).json("Status not updated!!")
        }


    } catch (error) {
        return res.status(400).json({ error: "internal server error service" })
    }
}

const GetKycService = async (req, res) => {
    try {
        const { email } = req.body;

        const result = await UserRepo.GetKycRepo(email)

        if (result.length == 0) {
            return res.status(404).send('no data found')
        }
        return res.status(200).json({
            code: 200,
            status: "success",
            message: "data fetched successfully",
            data: result
        })

    } catch (error) {
        return res.status(400).json({ error: "internal server error service" })
    }
}


const DeleteUserService = async (req, res) => {
    try {
        const { email } = req.body;
        const result = await UserRepo.DeleteUserRepo(email)
        if (!result) {
            return res.status(404).send('Something went wrong ! try again later..')
        }
        return res.status(200).json({
            code: 200,
            status: "success",
            message: "data deleted successfully !"
        })

    } catch (error) {
        return res.status(400).json({ error: "internal server error service" })
    }
}

const SupportService = async (req, res) => {
    try {
        let { name, email, phone, message } = req.body;
        if (!name || !email || !phone || !message) {
            return res.status(400).json({ error: "Please fill all the fields" })
        }
        phone = Number(phone);
        if (!/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(email)) {
            return res.status(400).json({ error: 'Invalid email format' });
        }

        if (!/^\d{10}$/.test(phone)) {
            return res.status(400).json({ error: 'Phone number must be 10 digits' });
        }
        const data = {
            name,
            email,
            phone,
            message
        }
        const result = await UserRepo.SupportRepo(data)
        if (!result) {
            return res.status(404).json({ error: "support request not sent" })
        } else {
            return res.status(200).json({
                status: "success",
                message: "Message sent successfully !",
                code: 200
            })
        }

    } catch (error) {
        return res.status(400).json({ error: "internal server error service" })
    }
}


module.exports = {
    RegisterService,
    SupportService,
    GetAllService, DeleteUserService,
    GetKycService,
    ApprovalService
}