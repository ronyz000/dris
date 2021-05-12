var State=require('../models/states')
var District=require('../models/district')
var Child=require('../models/child')
exports.addState=[
async function(req,res,next){
		let state=await State.findOne({
			state:req.body.state
		})
		if (state){
			return res.status(400).json({
				msg:"State Already Exists"
			})
		}
		var StateOb=new State({
			state:req.body.state
			});
		StateOb.save(function(err){
			if(err){
				res.json({status:0,debug_data:err})
			}else{
				res.json({status:1,data:"State saved Successfully"})
			}
		})

}
]
exports.getState=function(req,res,next){
	State.find(function(err,state_list){
		res.json(state_list)
	})
}
exports.addDistrict=function(req,res,next){
		var DisOb=new District({
			state:req.body.state,
			district:req.body.district
			});
		DisOb.save(function(err){
			if(err){
				res.json({status:0,debug_data:err})
			}else{
				res.json({status:1,data:"State and District saved Successfully"})
			}
		})

}
exports.getDistrict=function(req,res,next){
	District.find(function(err,d_list){
		res.json(d_list)
	})
}
exports.addChild=function(req,res,next){
		var ChildOb=new Child({
			name:req.body.name,
			sex:req.body.sex,
			dob:req.body.dob,
			father_name:req.body.father_name,
			mother_name:req.body.mother_name,
			state:req.body.state,
			district:req.body.district
			});
		ChildOb.save(function(err){
			if(err){
				res.json({status:0,debug_data:err})
			}else{
				res.json({status:1,data:"Child added Successfully"})
			}
		})
}
exports.showchildren=function(req,res,next){
	Child.find(function(err,children){
		res.json(children)
	})
}