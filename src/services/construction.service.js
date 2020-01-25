const constructRepository = require("../repositories/construction.repository");
//const bcrypt = require("bcrypt");
const teste = (req, res) => {
  res.send("ok");
};

const findAllConstructions = async (req, res) => {
  try {
    const result = await constructRepository.findAll();
    res.send(result);
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
};

const findConstructionById = async (req, res) => {
  try {
    const id = req.params.id;
    let result = await constructRepository.findById(id);
    res.send(result);
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
};

const createConstruction = async (req, res) => {
  const requestBody = req.body;
  if (
    requestBody.codObra &&
    requestBody.endereco &&
    requestBody.cliente
  ) {
    try {
      //const senhaEncriptada = encryptPassword(req.body.senha);

      const obr = {
        codObra: req.body.codObra,
        endereco: req.body.endereco,
        cliente: req.body.cliente
      };

      const result = await constructRepository.create(obr);
      res.send(result);
    } catch (err) {
      console.error(err);
      res.sendStatus(500);
    }
  } else {
    res.status(400).send({
      error: "Campos Faltando"
    });
  }
};

const updateConstruction = async (req, res) => {
  const requestBody = req.body;
  if (
    requestBody.codObra ||
    requestBody.endereco ||
    requestBody.cliente
  ) {
    try {
      if (requestBody.senha) {
        requestBody.senha = hashPassword(requestBody.senha);
      }
      const id = req.params.id;
      const dataToUpdate = requestBody;
      await constructRepository.updateOne(id, dataToUpdate);

      res.status(200).send(dataToUpdate);
    } catch (err) {
      console.error(err);
      res.sendStatus(500);
    }
  } else {
    res.status(400).send({
      error: "Campos Faltando"
    });
  }
};

const deleteConstruction = async (req, res) => {
  try {
    const id = req.params.id;
    await constructRepository.deleteOne(id);

    res.send({ msg: `Obra com id ${id} deletado.` });
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
};

const encryptPassword = password => {
  return bcrypt.hashSync(password, 10);
};

module.exports = {
    findAllConstructions,
    findConstructionById,
    createConstruction,
    updateConstruction,
    deleteConstruction
};
