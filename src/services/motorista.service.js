const motoristaRepository = require("../repositories/motorista.repository");
const enderecoRepository = require("../repositories/endereco.repository");
const findAllMotorista = async (req, res) => {
  try {
    let result = await motoristaRepository.findAll();
    let i = 0;
    for (i = 0; i < result.length; i++) {
      let mot = await enderecoRepository.findById(result[i].endereco);
      result[i].endereco = mot;
    }
    res.send(result);
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
};
const findMotoristaById = async (req, res) => {
  try {
    const id = req.params.id;
    let result = await motoristaRepository.findById(id);
    let mot = await enderecoRepository.findById(result.endereco);
    result.endereco = mot;
    console.log(mot);
    console.log(result);
    res.send(result);
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
};
const findMotoristaByEndereco = async (req, res) => {
  try {
    const id = req.params.id;
    let result = await motoristaRepository.findByEndereco(id);
    res.send(result);
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
};
const createMotorista = async (req, res) => {
  const requestBody = req.body;
  if (
    requestBody.codMotorista &&
    requestBody.Nome &&
    requestBody.RG &&
    requestBody.Email &&
    requestBody.endereco &&
    requestBody.TelefoneContato &&
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
      const mot = {
        codMotorista: req.body.codMotorista,
        nome: req.body.Nome,
        RG: req.body.RG,
        email: req.body.Email,
        endereco: req.body.endereco.codEnd,
        TelefoneContato: req.body.TelefoneContato
      };

      const result = await motoristaRepository.create(mot);
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

const updateMotorista = async (req, res) => {
  const requestBody = req.body;
  if (
    requestBody.codMotorista ||
    requestBody.Nome ||
    requestBody.RG ||
    requestBody.Email ||
    requestBody.endereco ||
    requestBody.TelefoneContato
  ) {
    try {
      const id = req.params.id;
      const dataToUpdate = requestBody;
      await motoristaRepository.updateOne(id, dataToUpdate);

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

const deleteMotorista = async (req, res) => {
  try {
    const id = req.params.id;
    let mot = await motoristaRepository.findById(id);

    await motoristaRepository.deleteOne(id);
    await enderecoRepository.deleteOne(mot.endereco);

    res.send({ msg: `Motorista com id ${id} deletado.` });
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
};

module.exports = {
  findAllMotorista,
  findMotoristaById,
  createMotorista,
  updateMotorista,
  deleteMotorista,
  findMotoristaByEndereco
};
