const dirigiuRepository = require("../repositories/dirigiu.repository");
const findAllDirigiu = async (req, res) => {
  try {
    const result = await dirigiuRepository.findAll();
    res.send(result);
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
};
const findDirigiuById = async (req, res) => {
  try {
    const id = req.params.id;
    let result = await dirigiuRepository.findById(id);
    res.send(result);
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
};
const findDirigiuByMotorista = async (req, res) => {
  try {
    const id = req.params.id;
    let result = await dirigiuRepository.findByMotorista(id);
    res.send(result);
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
};
const findDirigiuByVeiculo = async (req, res) => {
  try {
    const id = req.params.id;
    let result = await dirigiuRepository.findByVeiculo(id);
    res.send(result);
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
};
const createDirigiu = async (req, res) => {
  const requestBody = req.body;
  if (
    requestBody.motorista &&
    requestBody.veiculo &&
    requestBody.data &&
    requestBody.codDirigiu &&
    requestBody.hora
  ) {
    try {
      const dir = {
        motorista: req.body.motorista,
        veiculo: req.body.veiculo,
        data: req.body.data,
        codDirigiu: req.body.codDirigiu,
        hora: req.body.hora
      };

      const result = await dirigiuRepository.create(dir);
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

const updateDirigiu = async (req, res) => {
  const requestBody = req.body;
  if (
    requestBody.motorista ||
    requestBody.veiculo ||
    requestBody.data ||
    requestBody.codDirigiu ||
    requestBody.hora
  ) {
    try {
      const id = req.params.id;
      const dataToUpdate = requestBody;
      await dirigiuRepository.updateOne(id, dataToUpdate);

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

const deleteDirigiu = async (req, res) => {
  try {
    const id = req.params.id;
    await dirigiuRepository.deleteOne(id);

    res.send({ msg: `Dirigiu com id ${id} deletado.` });
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
};

module.exports = {
  findAllDirigiu,
  findDirigiuById,
  createDirigiu,
  updateDirigiu,
  deleteDirigiu,
  findDirigiuByMotorista,
  findDirigiuByVeiculo
};
