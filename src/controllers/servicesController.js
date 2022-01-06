import servicesInfos from "../models/services";



class ServicesController{

static async createService(req,res){
    
    const services=await servicesInfos.create(req.body);

if(!services){
    return res.status(404).json({error:"service not registered"})
}

return res
.status(200)
.json({message:"service created successfully",data: services});

}

//getallservices
static async getAllServices(req,res){
    const services=await servicesInfos.find();

if(!services){
    return res.status(404).json({error:"service not registered"})
}

return res
.status(200)
.json({message:" successfullly retrieved services",data: services});

}

static async deleteOneService(req,res){
const services =await servicesInfos.findByIdAndDelete(req.params.id)
if(!services){
    return res.status(404).json({error:"service not deleted"});
}
return res.status(200).json({message:"service deleted successfully"});
}
static async getOneService(req,res){
const services =await servicesInfos.findById(req.params.id);
if(!services){
    return res.status(404).json({error:"service not found"});

}
return res.status(200).json({message:"service retrives successfully",data: services})

}
}
export default ServicesController;