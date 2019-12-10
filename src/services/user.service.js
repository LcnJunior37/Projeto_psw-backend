const userRepository = require('../repositories/user.repository');
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
    requestBody.codUsuario &&
    requestBody.tipo &&
    requestBody.nome &&
    requestBody.senha
  ) {
    try {
      const senhaEncriptada = encryptPassword(req.body.senha);

      const us = {
        codUsuario: req.body.codUsuario,
        tipo: req.body.tipo,
        nome: req.body.nome,
        senha: senhaEncriptada
      };

      const result = await userRepository.create(us);
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
      requestBody.codUsuario ||
      requestBody.tipo ||
      requestBody.nome ||
      requestBody.senha
    ) {
      try {
        if (requestBody.senha) {
          requestBody.senha = hashPassword(requestBody.senha);
        }
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

    res.send({ msg: `Usuario com id ${id} deletado.` });
  } catch (err) {
     console.error(err);
     res.sendStatus(500);
  }
};

const encryptPassword = password => {
  return bcrypt.hashSync(password, 10);
};

module.exports ={
  findAllUsers,
  findUserById,
  createUser,
  updateUser,
  deleteUser
}