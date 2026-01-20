import { asyncHandler } from "../utils/asyncHandler.js";
const registerUSER = asyncHandler (async (req,res) => {
    res.status(200).json({
        message : "ok"
    })

});
export {registerUSER};