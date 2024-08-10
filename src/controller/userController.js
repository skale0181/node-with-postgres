const { user, school } = require("../model");

const getUserHello = async (req, res) => {
    const userData = await user.create({username:"hello", birthday:"2000-01-01"});
    res.status(200).send({message:"Hello World!", data:userData});
};

const createSchool = async (req, res) => {
    const {name, address, userId} = req.body;
    const schoolData = await school.create({name, address, userId});
    res.status(200).send({message:"School created successfully!", data:schoolData});

}

const getUser = async (req, res) => {
    const userData = await user.findAll({
        include: [{
            model: school,
            attributes: ["name", "address"],
        }],
    });
    res.status(200).send({message:"User data fetched successfully!", data:userData});
};

module.exports = { getUserHello, createSchool, getUser };