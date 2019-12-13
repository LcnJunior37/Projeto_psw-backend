const userRepository = require('../repositories/vehicle.repository');
const bcrypt = require('bcrypt');

const findAllUsers = async (req, res) => {
  try {
    const result = await userRepository.findAll();
    res.send(result);
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
}

const findUserById = async (req, res) => {
  try {
    const id = req.params.id;
    let result = await userRepository.findById(id);
    res.send(result);
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
};

const createUser = async (req, res) => {
  const requestBody = req.body;
  if (
    requestBody.codVeiculo &&
    requestBody.placa &&
    requestBody.modelo &&
    requestBody.ano &&
    requestBody.tipo
  ) {
    try {
      const senhaEncriptada = encryptPassword(req.body.senha);

      const veh = {
        codVeiculo = vehicle.codVeiculo,
        placa = vehicle.placa,
        modelo = vehicle.modelo,
        ano = vehicle.ano,
        tipo = vehicle.tipo
      };

      const result = await userRepository.create(veh);
      res.send(result);
    } catch (err) {
      console.error(err);
      res.sendStatus(500);
    }
  } else {
    res.status(400).send({
      error: 'Campos Faltando'
    });
  }
};

const updateUser = async (req, res) => {
  const requestBody = req.body;
    if (
        requestBody.codVeiculo ||
        requestBody.placa ||
        requestBody.modelo ||
        requestBody.ano ||
        requestBody.tipo
    ) {
      try {
        
        const id = req.params.id;
        const dataToUpdate = requestBody;
        await userRepository.updateOne(id, dataToUpdate);

        res.status(200).send(dataToUpdate);
      } catch (err) {
        console.error(err);
        res.sendStatus(500);
      }
    } else {
      res.status(400).send({
        error: 'Campos Faltando'
      });
    }
};

const deleteUser = async (req, res) => {
  try {
    const id = req.params.id;
    await userRepository.deleteOne(id);

    res.send({ msg: `Veiculo com id ${id} deletado.` });
  } catch (err) {
     console.error(err);
     res.sendStatus(500);
  }
};



module.exports ={
  findAllUsers,
  findUserById,
  createUser,
  updateUser,
  deleteUser
}