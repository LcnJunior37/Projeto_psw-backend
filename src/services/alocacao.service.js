const dirigiuRepository = require("../repositories/dirigiu.repository");
const alocacaoRepository = require("../repositories/alocacao.repository");
const clienteRepository = require("../repositories/cliente.repository");
const constructionRepository = require("../repositories/construction.repository");
const dARepository = require("../repositories/dirigiuAlocacao.repository");

const getAllDirigiuByAlocacao = async id => {
  console.log("---------------------------------------------");
  let arrayDirigiu = {
    Dirigius: []
  };
  let r = await dARepository.findById(id);

  for (let i = 0; i < r.length; i++) {
    console.log("***************************************");
    //console.log(r[i]);
    let dir = await dirigiuRepository.findById(r[i].codDirigiu);

    console.log(dir);
    /*  let aux = {
      codDirigiu: dir.codDirigiu,
      motorista: dir.motorista,
      veiculo: dir.veiculo,
      data: dir.data,
      hora: dir.hora
    }; */
    let aux = JSON.stringify(dir);
    arrayDirigiu.Dirigius += aux.split().join();
    // console.log(arrayDirigiu);
  }

  return arrayDirigiu;
};
const findAllAlocacao = async (req, res) => {
  try {
    let result = await alocacaoRepository.findAll();
    let i = 0;
    for (i = 0; i < result.length; i++) {
      let dir = await getAllDirigiuByAlocacao(result[i].codAlocacao);
      let cli = await clienteRepository.findById(result[i].cliente);
      let obr = await constructionRepository.findById(result[i].obra);
      console.log(dir);
      result[i].dirigiu = dir;
      result[i].cliente = cli;
      result[i].obra = obr;
    }
    res.send(result);
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
};
const findAlocacaoById = async (req, res) => {
  try {
    const id = req.params.id;
    let result = await alocacaoRepository.findById(id);
    let dir = await getAllDirigiuByAlocacao(result.dirigiu);
    let cli = await clienteRepository.findById(result.cliente);
    let obr = await constructionRepository.findById(result.obra);
    result.dirigiu = dir;
    result.cliente = cli;
    result.obra = obr;
    //console.log(veh);
    //console.log(result);
    res.send(result);
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
};

const createAlocacao = async (req, res) => {
  const alocacao = req.body;
  if (
    alocacao.codAlocacao &&
    alocacao.cliente &&
    alocacao.obra &&
    alocacao.valor &&
    alocacao.dataInicio &&
    alocacao.dataFim
    //alocacao.dirigiu
  ) {
    try {
      const alo = {
        codAlocacao: alocacao.codAlocacao,
        cliente: alocacao.cliente,
        obra: alocacao.obra,
        valor: alocacao.valor,
        dataInicio: alocacao.dataInicio,
        dataFim: alocacao.dataFim,
        dirigiu: alocacao.dirigiu
      };

      const result = await alocacaoRepository.create(alo);
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

const updateAlocacao = async (req, res) => {
  const requestBody = req.body;
  if (
    requestBody.codAlocacao ||
    requestBody.cliente ||
    requestBody.obra ||
    requestBody.valor ||
    requestBody.dataInicio ||
    requestBody.dataFim
  ) {
    try {
      const id = req.params.id;
      const dataToUpdate = requestBody;
      await alocacaoRepository.updateOne(id, dataToUpdate);

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

const deleteAlocacao = async (req, res) => {
  try {
    const id = req.params.id;
    await dirigiuRepository.deleteOne(id);

    res.send({ msg: `Alocação com id ${id} deletado.` });
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
};

module.exports = {
  findAllAlocacao,
  findAlocacaoById,
  createAlocacao,
  updateAlocacao,
  deleteAlocacao
};
