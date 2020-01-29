const constructRepository = require("../repositories/construction.repository");
const dirigiuRepository = require("../repositories/dirigiu.repository");
const shipmentRepository = require("../repositories/entrega.repository");

const findAllShipments = async (req, res) => {
  try {
    let result = await shipmentRepository.findAll();
    let i = 0;
    for (i = 0; i < result.length; i++) {
      let dir = await dirigiuRepository.findById(result[i].dirigiu);
      result[i].dirigiu = dir;
    }
    res.send(result);
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
};

const findShipmentById = async (req, res) => {
  try {
    const id = req.params.id;
    let result = await shipmentRepository.findById(id);
    let dir = await dirigiuRepository.findById(result.dirigiu);
    result.dirigiu = dir;
    console.log(dir);
    console.log(result);
    res.send(result);
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
};

const findShipmentByConstruction = async (req, res) => {
  try {
    const id = req.params.id;
    let result = await constructRepository.findByConstruction(id);
    res.send(result);
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
};

const findShipmentByDriver = async (req, res) => {
  try {
    const id = req.params.id;
    let result = await motoristaRepository.findByEndereco(id);
    res.send(result);
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
};

const findShipmentByDirigiu = async (req, res) => {
  try {
    const id = req.params.id;
    let result = await dirigiuRepository.findByDirigiu(id);
    res.send(result);
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
};

const createShipment = async (req, res) => {
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
        endereco: req.body.endereco.codEnd,
        cliente: req.body.cliente
      };
      const result = await constructRepository.create(obr);
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

const updateShipment = async (req, res) => {
  const requestBody = req.body;
  if (requestBody.codObra || requestBody.endereco || requestBody.cliente) {
    try {
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

const deleteShipment = async (req, res) => {
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
  findAllShipments,
  findShipmentById,
  findShipmentByConstruction,
  findShipmentByDriver,
  findShipmentByDirigiu,
  createShipment,
  updateShipment,
  deleteShipment
};
