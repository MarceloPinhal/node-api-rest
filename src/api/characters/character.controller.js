
const Character = require("./character.model")



const getAllCharacters = async (req, res, next) => {
  try {
       const characters = await Character.find();
       return res.status(200).json(characters);
  } catch (err) {
    return next(err);
  }
}

const getCharacterById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const characterById = await Character.findById(id);
    return res.status(200).json(characterById);
    } catch (err) {
    return next(err);
  }
};

const createCharacter = async (req, res, next) => {
  try {
    
      const characterToBeCreated = new Character(req.body);

      const characterCreated = await characterToBeCreated.save();

      return res.status(201).json(characterCreated);

  } catch (error) {
      return next(error);
  }
};

const editCharacter = async(req, res, next) => {
  try {
    const { id } = req.params
    const characterModify = new Character(req.body)
    characterModify._id = id 
    const characterUpdated = await Character.findByIdAndUpdate(id , characterModify)
      return res.status(200).json(characterUpdated);
  }
  catch(error) {
      return next(error);
  }
}

const deleteCharacter = async (req, res, next) => {
  try {
      const { id } = req.params;
      const deleted = await Character.deleteOne({ _id: id });
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
  getAllCharacters,
  getCharacterById,
  createCharacter,
  editCharacter,
  deleteCharacter
}