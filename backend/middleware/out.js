const jwt=require("jsonwebtoken")
module.exports=function(req,res,next){
	const token=req.header("token")
	
	if(!token) 
		{return res.status(401).json({message:"Auth Token Error"})
}
		try{
			const decodedToken=jwt.verify(token,"secretstring");
			req.id=decodedToken.id
			req.email=decodedToken.email
			next()
		}catch(e){
			console.error(e)
			res.status(500).send({message:"Logged Out"})
		}
}