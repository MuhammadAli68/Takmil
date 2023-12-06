const express = require('express');
const connectDB = require("./config/db");

const School = require('./models/school');
const Address = require('./models/address');
const Organization = require('./models/organization');

const app = express();
connectDB();
const PORT = process.env.PORT || 5000;

app.use(express.json({extended:false}));

//POST request
app.post("/school",async (req,res)=>{
    const {name,status,startTime,endTime,shift,address,hasProjector,hasLaptop,organization} = req.body;
    try
    {
        let school = await School.findOne({name:name});
        
        //Check if School already exists. 
        if(school)
        {
            res.status(400).json({errors:[{msg: "School already exists"}]});
        }

        //Create a new School
        else
        {
            //Check if Address and Organization already exist. Address and Organization are not dependant on School
            let new_address = await Address.findOne({town:address["town"],
                tehsil:address["tehsil"],
                district:address["district"],
                state:address["state"],
                address:address["address"],
                latitude:address["latitude"],
                longitude:address["longitude"]});

            let new_organization = await Organization.findOne({name:organization["name"]});

            //Create new Address if Address not found
            if(!new_address)
            {
                await Address.create(address);
            }
            //Create new Organization if Organzation not found 
            if(!new_organization)
            {
                await Organization.create(organization);
            }
            school = await School.create({name,status,startTime,endTime,shift,address:new_address.id,hasProjector,hasLaptop,organization:new_organization.id});
            res.status(201).send("school created" + JSON.stringify(school));
        }
    }
    catch(err)
    {
        console.error(err.message);
        res.status(500).send("Server Error!");
    }
});

//PUT request
app.put("/school",async (req,res)=>{
    const {name,status,startTime,endTime,shift,address,hasProjector,hasLaptop,organization} = req.body;
    try{
        let school = await School.findOne({name:name});
        //Check if School exists. If it exists then update School
        if(school)
        {
            let new_address = await Address.findOne({town:address["town"],
                tehsil:address["tehsil"],
                district:address["district"],
                state:address["state"],
                address:address["address"],
                latitude:address["latitude"],
                longitude:address["longitude"]});

            if(new_address)
            {   
                let new_organization = await Organization.findOne({name:organization["name"]});
                await School.findOneAndUpdate({name},{name,status,startTime,endTime,shift,address:new_address._id,hasProjector,hasLaptop,organization:new_organization._id});
                res.status(201).send("school updated");
            }
        }
        //Create new School if School does not exists.
        else
        {
            let new_address = await Address.findOne({town:address["town"],
            tehsil:address["tehsil"],
            district:address["district"],
            state:address["state"],
            address:address["address"],
            latitude:address["latitude"],
            longitude:address["longitude"]});

            let new_organization = await Organization.findOne({name:organization["name"]});

            if(!new_address)
            {
                await Address.create(address);
            }

            if(!new_organization)
            {
                await Organization.create(organization);
            }
            school = await School.create({name,status,startTime,endTime,shift,address:new_address._id,hasProjector,hasLaptop,organization:new_organization._id});
            res.status(201).send("school created" + JSON.stringify(school));
        }

    }
    catch(err)
    {
        console.error(err.message);
        res.status(500).send("Server Error!");
    }
});

//GET request for requesting School by ID
app.get("/school/:id",async (req,res)=>{
    let school = await School.findById(req.params.id);
    if(school)
    {
        res.status(200).json(school);
    }
    else
    {
        res.status(404).send("School not found");
    }
});

//GET request for requesting all Schools
app.get("/school",async (req,res)=>{
    let schools = await School.find();
    res.status(200).json(schools); 
});

//DELETE request for deleting School by ID
app.delete("/school/:id",async (req,res)=>{
    let school = await School.findById(req.params.id);
    if(school)
    {
        await School.findByIdAndDelete(req.params.id);
        res.status(204);
    }
    else
    {
        res.status(404).send("School not found");
    }
});

app.listen(PORT,()=>{console.log(`server running on port ${PORT}`)});