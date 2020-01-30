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
      let obr = await constructRepository.findById(result[i].obra);
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
    console.log(id);
    let dir = await dirigiuRepository.findById(result.dirigiu);
    result.dirigiu = dir;
    let obr = await constructRepository.findById(result.obra);
    result.obra = obr;
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
    let result = await shipmentRepository.findByConstruction(id);
    let i = 0;
    for (i = 0; i < result.length; i++) {
      let dir = await dirigiuRepository.findById(result[i].dirigiu);
      result[i].dirigiu = dir;
      let obr = await constructRepository.findById(result[i].obra);
      result[i].obra = obr;
    }
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
    requestBody.codEntrega &&
    requestBody.obra &&
    requestBody.valor &&
    requestBody.dirigiu.motorista &&
    requestBody.dirigiu.veiculo &&
    requestBody.dirigiu.data &&
    requestBody.dirigiu.codDirigiu &&
    requestBody.dirigiu.hora
  ) {
    try {
      const entr = {
        codEntrega: req.body.codEntrega,
        obra: req.body.obra,
        valor: req.body.valor,
        dirigiu: req.body.dirigiu.codDirigiu
      };

      const dir = {
        motorista: req.body.dirigiu.motorista,
        veiculo: req.body.dirigiu.veiculo,
        data: req.body.dirigiu.data,
        codDirigiu: req.body.dirigiu.codDirigiu,
        hora: req.body.dirigiu.hora
      };
      const dirResult = await dirigiuRepository.create(dir);
      const result = await shipmentRepository.create(entr);

      res.send({ msg: `incluido com sucesso` });
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
  if (
    requestBody.codEntrega ||
    requestBody.obra ||
    requestBody.dirigiu.motorista ||
    requestBody.dirigiu.veiculo ||
    requestBody.dirigiu.data ||
    requestBody.dirigiu.veiculo ||
    requestBody.dirigiu.codDirigiu ||
    requestBody.dirigiu.hora
  ) {
    try {
      const id = req.params.id;
      const dataToUpdate = requestBody;
      await shipmentRepository.updateOne(id, dataToUpdate);

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
    let result = await shipmentRepository.findById(id);

    await shipmentRepository.deleteOne(id);
    await dirigiuRepository.deleteOne(result.dirigiu);

    res.send({ msg: `entrega com id ${id} deletado.` });
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
