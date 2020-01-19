const enderecoRepository = require("../repositories/endereco.repository");

const findAllEndereco = async (req, res) => {
  try {
    const result = await enderecoRepository.findAll();
    res.send(result);
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
};

const findEnderecoById = async (req, res) => {
  try {
    const id = req.params.id;
    let result = await enderecoRepository.findById(id);
    res.send(result);
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
};

const createEndereco = async (req, res) => {
  const requestBody = req.body;
  if (
    requestBody.codEnd &&
    requestBody.logradouro &&
    requestBody.numero &&
    requestBody.cep &&
    requestBody.complemento &&
    requestBody.bairro
  ) {
    try {
      end = {
        codEnd: req.body.codEnd,
        logradouro: req.body.logradouro,
        numero: req.body.numero,
        cep: req.body.cep,
        complemento: req.body.cep,
        bairro: req.body.bairro
      };

      const result = await enderecoRepository.create(end);
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

const updateEndereco = async (req, res) => {
  const requestBody = req.body;
  if (
    requestBody.codEnd ||
    requestBody.logradouro ||
    requestBody.numero ||
    requestBody.cep ||
    requestBody.complemento ||
    requestBody.bairro
  ) {
    try {
      if (requestBody.senha) {
        requestBody.senha = hashPassword(requestBody.senha);
      }
      const id = req.params.id;
      const dataToUpdate = requestBody;
      await enderecoRepository.updateOne(id, dataToUpdate);

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

const deleteEndereco = async (req, res) => {
  try {
    const id = req.params.id;
    await enderecoRepository.deleteOne(id);

    res.send({ msg: `Endereco com id ${id} deletado.` });
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
};

module.exports = {
  findAllEndereco,
  findEnderecoById,
  createEndereco,
  updateEndereco,
  deleteEndereco
};
