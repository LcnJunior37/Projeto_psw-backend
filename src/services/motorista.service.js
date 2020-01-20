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
    requestBody.TelefoneContato
  ) {
    try {
      const mot = {
        codMotorista: req.body.codMotorista,
        nome: req.body.Nome,
        RG: req.body.RG,
        email: req.body.Email,
        endereco: req.body.endereco,
        TelefoneContato: req.body.TelefoneContato
      };

      const result = await motoristaRepository.create(mot);
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
    await motoristaRepository.deleteOne(id);

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
