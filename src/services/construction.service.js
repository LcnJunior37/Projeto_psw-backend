const constructRepository = require("../repositories/construction.repository");
const enderecoRepository = require("../repositories/endereco.repository");
const clienteRepository = require("../repositories/cliente.repository");

const findAllConstructions = async (req, res) => {
  try {
    let result = await constructRepository.findAll();
    let i = 0;
    for (i = 0; i < result.length; i++) {
      let obr = await enderecoRepository.findById(result[i].endereco);
      let cli = await clienteRepository.findById(result[i].cliente);
      result[i].endereco = obr;
      result[i].cliente = cli;
    }
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
    let obr = await enderecoRepository.findById(result.endereco);
    let cli = await clienteRepository.findById(result.cliente);
    result.cliente = cli;
    result.endereco = obr;
    console.log(obr);
    console.log(result);
    res.send(result);
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
};

const findConstructionByEndereco = async (req, res) => {
  try {
    const id = req.params.id;
    let result = await constructionRepository.findByEndereco(id);
    res.send(result);
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
};

const findContstructionByClient = async (req, res) => {
  try 
  {
    const id = req.params.id;
    let result = await constructionRepository.findByClient(id);
    res.send(result);
  } 
  catch (err)
  {
    console.error(err);
    res.sendStatus(500);
  }
};

const createConstruction = async (req, res) => {
  const requestBody = req.body;
  if (
    requestBody.codObra &&
    requestBody.endereco &&
    requestBody.cliente &&
    req.body.endereco.codEnd &&
    req.body.endereco.logradouro &&
    req.body.endereco.numero &&
    req.body.endereco.cep &&
    req.body.endereco.complemento &&
    req.body.endereco.bairro
  ) {
    try {
      const end = {
        codEnd: req.body.endereco.codEnd,
        logradouro: req.body.endereco.logradouro,
        numero: req.body.endereco.numero,
        cep: req.body.endereco.cep,
        complemento: req.body.endereco.cep,
        bairro: req.body.endereco.bairro
      };
      const resultEnd = await enderecoRepository.create(end);
      const obr = {
        codObra: req.body.codObra,
        endereco: req.body.endereco,
        cliente: req.body.cliente
      };
      const result = await motoristaRepository.create(obr);
      result.endereco = end;
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

module.exports = {
    findAllConstructions,
    findConstructionById,
    findConstructionByEndereco,
    findContstructionByClient,
    createConstruction,
    updateConstruction,
    deleteConstruction
};
