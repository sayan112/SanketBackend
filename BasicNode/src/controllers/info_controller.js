// const info=(req,res)=>{
//     return res.status(200).json({
//         success:true,
//         message:"api is live",
//         error:{},
//         data:{},
//     })
// }

 const {StatusCodes}= require("http-status-codes")
const info=(req,res)=>{
    return res.status(StatusCodes.OK).json({
      success: true,
      message: "api is live",
      error: {},
      data: {},
    });
}
module.exports={
info
}