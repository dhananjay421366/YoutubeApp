const asyncHandler = (requestHandler) => {
 return (req, res, next) => {
    Promise.resolve(requestHandler(req, res, next)).catch((err) => {
      next(err);
    });
  };
  
};
export { asyncHandler };

// try catch syntax
// const asyncHandler =(fun)=>async(req,res,next)=>{
//   try {
//     await fun(req,res,next)
//   } catch (error) {
//   res.status(err.code ||500).json({
//     success: false,
//     message: err.message || "Internal server error"
//   })
// }
// }
