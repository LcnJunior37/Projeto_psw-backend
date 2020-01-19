const clienteRepository = require("../repositories/cliente.repository");
//const bcrypt = require("bcrypt");

const findAllClientes = async (req, res) => {
  try {
    const result = await clienteRepository.findAll();
    res.send(result);
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
};

const findClienteById = async (req, res) => {
  try {
    const id = req.params.id;
    let result = await clienteRepository.findById(id);
    res.send(result);
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
};

const createCliente = async (req, res) => {
  const requestBody = req.body;
  if (
    requestBody.codCliente &&
    requestBody.CNPJ &&
    requestBody.NomeEmpresa &&
    requestBody.Email &&
    requestBody.TelefoneContato
  ) {
    try {
      //const senhaEncriptada = encryptPassword(req.body.senha);

      const cli = {
        codCliente: req.body.codCliente,
        CNPJ: req.body.CNPJ,
        NomeEmpresa: req.body.NomeEmpresa,
        Email: req.body.Email,
        TelContato: req.body.TelContato
      };

      const result = await clienteRepository.create(cli);
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

const updateCliente = async (req, res) => {
  const requestBody = req.body;
  if (
    requestBody.codCliente ||
    requestBody.CNPJ ||
    requestBody.NomeEmpresa ||
    requestBody.Email ||
    requestBody.TelefoneContato
  ) {
    try {
      if (requestBody.senha) {
        requestBody.senha = hashPassword(requestBody.senha);
      }
      const id = req.params.id;
      const dataToUpdate = requestBody;
      await clienteRepository.updateOne(id, dataToUpdate);

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

  const deleteCliente = async (req, res) => {
    try {
      const id = req.params.id;
      await clienteRepository.deleteOne(id);

      res.send({ msg: `Cliente com id ${id} deletado.` });
    } catch (err) {
      console.error(err);
      res.sendStatus(500);
    }
  };

  const encryptPassword = password => {
    return bcrypt.hashSync(password, 10);
  };

  module.exports = {
    findAllClientes,
    findClienteById,
    createCliente,
    updateCliente,
    deleteCliente
  };
};
