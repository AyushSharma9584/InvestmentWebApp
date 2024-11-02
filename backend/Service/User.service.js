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
        if (!upi_no) {
            upi_no = null
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
        console.log(userData)

        const result = await UserRepo.RegisterRepo(userData)

        const updateStatus = await UserRepo.UpdateStatusRepo(em)
        console.log(updateStatus)
        // console.log(result)


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


module.exports = {
    RegisterService
}