const constructRepository = require("../repositories/construction.repository");
const dirigiuRepository = require("../repositories/dirigiu.repository");
const shipmentRepository = require("../repositories/entrega.repository");

const findAllShipments = async (req, res) => {
  try {
    let result = await shipmentRepository.findAll();
    let i = 0;
    for (i = 0; i < result.length; i++) {
      let dir = await dirigiuRepository.findById(result[i].dirigiu);
      let obr = await constructRepository.findById(result[i].obra);
      result[i].dirigiu = dir;
      result[i].obra = obr;
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
<<<<<<< HEAD
  // TODO: Mudar metodo para buscar por Obra
=======
>>>>>>> c19e33571dd0926a8b86b1a03330c39e243000c4
  try {
    const id = req.params.id;
    let result = await constructRepository.findByConstruction(id);
    res.send(result);
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
};

<<<<<<< HEAD
/* const findShipmentByDriver = async (req, res) => {
  // TODO: Mudar metodo para buscar por motorista
=======

const findShipmentByDriver = async (req, res) => {
>>>>>>> c19e33571dd0926a8b86b1a03330c39e243000c4
  try {
    const id = req.params.id;
    let result = await motoristaRepository.findByEndereco(id);
    res.send(result);
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
};
<<<<<<< HEAD
 */
const findShipmentByDirigiu = async (req, res) => {
  // TODO: Mudar metodo para buscar por dirigiu
=======

const findShipmentByDirigiu = async (req, res) => { 
>>>>>>> c19e33571dd0926a8b86b1a03330c39e243000c4
  try {
    const id = req.params.id;
    let result = await dirigiuRepository.findByDirigiu(id);
    res.send(result);
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
};

<<<<<<< HEAD
const createShipment = async (req, res) => {
  // TODO
=======
const createShipment = async (req, res) => { 
>>>>>>> c19e33571dd0926a8b86b1a03330c39e243000c4
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

<<<<<<< HEAD
const updateShipment = async (req, res) => {
  // TODO
=======
const updateShipment = async (req, res) => { 
>>>>>>> c19e33571dd0926a8b86b1a03330c39e243000c4
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

<<<<<<< HEAD
const deleteShipment = async (req, res) => {
  // TODO
=======
const deleteShipment = async (req, res) => { 
>>>>>>> c19e33571dd0926a8b86b1a03330c39e243000c4
  try {
    const id = req.params.id;
    await constructRepository.deleteOne(id);

    res.send({ msg: `Obra com id ${id} deletado.` });
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
};

<<<<<<< HEAD
module.exports = {
  // TODO
=======
module.exports = { 
>>>>>>> c19e33571dd0926a8b86b1a03330c39e243000c4
  findAllShipments,
  findShipmentById,
  findShipmentByConstruction,
  findShipmentByDriver,
  findShipmentByDirigiu,
  createShipment,
  updateShipment,
  deleteShipment
};
