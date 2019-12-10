const userRepository = require('../repositories/user.repository');
const bcrypt = require('bcrypt');

const findAllUsers = async (req, res) => {
  try {
    const result = await userRepository.findAll();
    console.log(result);
    res.send(result);
  } catch (e) {
    console.error(e);
    res.sendStatus(500);
  }
}

const findUserById = async (req, res) => {
  try {
    const id = req.params.id;
    let result = await userRepository.findById(id);
    res.send(result);
  } catch (e) {
    console.error(e);
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
    } catch (e) {
      console.error(e);
      res.sendStatus(500);
    }
  } else {
    return res.status(400).send({
      error: 'Campos Faltando'
    });
  }
};

const encryptPassword = password => {
  return bcrypt.hashSync(password, 10);
}

module.exports ={
  findAllUsers,
  findUserById,
  createUser
}