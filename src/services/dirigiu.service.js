const dirigiuRepository = require("../repositories/dirigiu.repository");
const veiculoRepository = require("../repositories/vehicle.repository");
const motoristaRepository = require("../repositories/motorista.repository");
const dARepository = require("../repositories/dirigiuAlocacao.repository");
const findAllDirigiu = async (req, res) => {
  try {
    let result = await dirigiuRepository.findAll();
    let i = 0;
    for (i = 0; i < result.length; i++) {
      let veh = await veiculoRepository.findById(result[i].veiculo);
      let mot = await motoristaRepository.findById(result[i].motorista);
      result[i].motorista = mot;
      result[i].veiculo = veh;
    }
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
    let veh = await veiculoRepository.findById(result.veiculo);
    let mot = await motoristaRepository.findById(result.motorista);
    result.motorista = mot;
    result.veiculo = veh;
    console.log(veh);
    console.log(result);
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
      if (requestBody.codAlocacao) {
        dA = {
          codDirigiu: req.body.codDirigiu,
          codAlocacao: req.body.codAlocacao
        };
        let r = await dARepository.create(dA);
      }
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
