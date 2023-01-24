const House = require("./house.model")

const getAllHouses = async (req, res, next) => {
    try {

        console.log("User Login", req.user)

        const allHouses = await House.find().populate("characters").populate("vassals")
        return res.status(200).json(allHouses);
    }
    catch (error) {
        return next(error);
    }
};

const getHouseById = async (req, res, next) => {
    try {
      const { id } = req.params;
      const houseById = await House.findById(id);
      return res.status(200).json(houseById);
      } catch (err) {
      return next(err);
    }
  };

const createHouse = async (req, res, next) => {
    try {
        const houseToBeCreated = new House(req.body);
        const houseCreated = await houseToBeCreated.save();

        return res.status(201).json(houseCreated);
    } catch(error) {
        return next(error);
    }
}

const editHouse = async(req, res, next) => {
    try {
      const { id } = req.params
      const houseModify = new House(req.body)
      houseModify._id = id 
      const houseUpdated = await House.findByIdAndUpdate(id , houseModify)
        return res.status(200).json(houseUpdated);
    }
    catch(error) {
        return next(error);
    }
  }

  const deleteHouse = async (req, res, next) => {
    try {
        const { id } = req.params;
        const deleted = await House.deleteOne({ _id: id });
        if (deleted.deletedCount) {
            return res.status(200).json("sucessfully eliminated");
        } else {
            return res.status(200).json("element not found");
        }
    } catch (error) {
        return next(error);
    }
  }
  

module.exports = {
    getAllHouses,
    createHouse,
    getHouseById,
    editHouse,
    deleteHouse
};