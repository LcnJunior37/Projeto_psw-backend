const motoristaRepository = require("../repositories/motorista.repository");
const findAllMotorista = async (req, res) => {
  try {
    const result = await motoristaRepository.findAll();
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
    requestBody.nome &&
    requestBody.RG &&
    requestBody.email &&
    requestBody.endereco &&
    requestBody.TelefoneContato
  ) {
    try {
      const mot = {

        codMotorista: req.body.codMotorista,
        nome: req.body.nome,
        RG: req.body.RG,
        email: req.body.email,
        endereco: req.body.endereco,
        TelefoneContato: req.body.TelefoneContato

      };

      const result = await motoristaRepository.create(dir);
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
    requestBody.nome ||
    requestBody.RG ||
    requestBody.email ||
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
