const enderecoRepository = require('../repositories/endereco.repository');
const bcrypt = require('bcrypt');

const findAllEndereco = async (req, res) => {
  try {
    const result = await userRepository.findAll();
    res.send(result);
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
}

const findEnderecoById = async (req, res) => {
  try {
    const id = req.params.id;
    let result = await enderecoRepository.findById(id);
    res.send(result);
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
};

const createEndereco = async (req, res) => {
  const requestBody = req.body;
  if (
    requestBody.codEndereco &&
    requestBody.log &&
    requestBody.nome &&
    requestBody.num

  ) {
    try {
      const senhaEncriptada = encryptPassword(req.body.senha);

      const us = {
        codEndereco: req.body.codEndereco,
        log: req.body.log,
        nome: req.body.nome,
        num: req.body.num
      };

      const result = await enderecoRepository.create(us);
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

const updateEndereco = async (req, res) => {
  const requestBody = req.body;
    if (
      requestBody.codEndereco ||
      requestBody.log ||
      requestBody.nome ||
      requestBody.num
    ) {
      try {
        if (requestBody.senha) {
          requestBody.senha = hashPassword(requestBody.senha);
        }
        const id = req.params.id;
        const dataToUpdate = requestBody;
        await enderecoRepository.updateOne(id, dataToUpdate);

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

const deleteEndereco = async (req, res) => {
  try {
    const id = req.params.id;
    await enderecoRepository.deleteOne(id);

    res.send({ msg: `Endereco com id ${id} deletado.` });
  } catch (err) {
     console.error(err);
     res.sendStatus(500);
  }
};

const encryptPassword = password => {
  return bcrypt.hashSync(password, 10);
};

module.exports ={
  findAllEndereco,
  findEnderecoById,
  createEndereco,
  updateEndereco,
  deleteEndereco
}