const vehicleRepository = require("../repositories/vehicle.repository");

const findAllVehicle = async (req, res) => {
  try {
    const result = await vehicleRepository.findAll();
    res.send(result);
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
};

const findVehicleById = async (req, res) => {
  try {
    const id = req.params.id;
    let result = await vehicleRepository.findById(id);
    res.send(result);
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
};

const createVehicle = async (req, res) => {
  const requestBody = req.body;
  if (
    requestBody.codVeiculo &&
    requestBody.placa &&
    requestBody.modelo &&
    requestBody.ano &&
    requestBody.tipo
  ) {
    try {
      // const senhaEncriptada = encryptPassword(req.body.senha);

      const veh = {
        codVeiculo: req.body.codVeiculo,
        placa: req.body.placa,
        modelo: req.body.modelo,
        ano: req.body.ano,
        tipo: req.body.tipo
      };

      const result = await vehicleRepository.create(veh);
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

const updateVehicle = async (req, res) => {
  const requestBody = req.body;
  if (
    requestBody.codVeiculo ||
    requestBody.placa ||
    requestBody.modelo ||
    requestBody.ano ||
    requestBody.tipo
  ) {
    try {
      const id = req.params.id;
      const dataToUpdate = requestBody;
      await vehicleRepository.updateOne(id, dataToUpdate);

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

const deleteVehicle = async (req, res) => {
  try {
    const id = req.params.id;
    await userRepository.deleteOne(id);

    res.send({ msg: `Veiculo com id ${id} deletado.` });
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
};

module.exports = {
  findAllVehicle,
  findVehicleById,
  createVehicle,
  updateVehicle,
  deleteVehicle
};
