const databaseService = require('../services/database.service');

const findAll = () => {
    return new Promise((resolve, reject) => {
        databaseService.query(
            'SELECT * FROM veiculo',
            (err, results) => {
                if (err) {
                    return reject(err);
                }
                return resolve(results);
            }
        );
    });
}
const findById = id => {
    return new Promise((resolve, reject) => {
        databaseService.query(
            'SELECT * FROM veiculo where codVeiculo = ?',
            [id],
            (err, results) => {
                if (err) {
                    return reject(err);
                }
                return resolve(results[0]);
            }
        );
    });
}
const create = vehicle => {
    const veh = [
        cod = vehicle.codVeiculo,
        placa = vehicle.placa,
        modelo = vehicle.modelo,
        ano = vehicle.ano,
        tipo = vehicle.tipo
    ];
    return new Promise((resolve, reject) => {
        databaseService.query(
            'INSERT INTO veiculo (codUsuario, Placa, Modelo, Ano,Tipo) VALUES (?)',
            [veh],
            (err, results) => {
                if (err) {
                    return reject(err);
                }
                return resolve(user);
            }
        );

        if (vehicle.tipo == 'C') {
            const tr = [
                cod = vehicle.codVeiculo,
                placa = vehicle.capMax,
               ];
            databaseService.query(

                'INSERT INTO caminhao (codVeiculo, capacidadeMax) VALUES (?)',
                [tr],
                (err, results) => {
                    if (err) {
                        return reject(err);
                    }
                    return resolve(user);
                }
            );
        }
    });
}
const updateOne = (id, dataToUpdate) => {
    const keys = Object.keys(dataToUpdate);
    const values = Object.values(dataToUpdate);
  
    const UPDATE = `UPDATE veiculo SET `;
  
    let SET = '';
    keys.forEach((r, index) => {
      SET+=`${r} = \'${values[index]}\', `;
    })
  
    SET = SET.replace(/, $/, ' ');
    
    const WHERE = `WHERE codVeiculo = ${id}`;
  
    const sqlQuery = UPDATE + SET + WHERE;;
  
    return new Promise((resolve, reject) => {
      databaseService.query(
        sqlQuery,
        (err, results) => {
          if (err) {
            return reject(err);
          }
          return resolve(dataToUpdate);
        }
      );
    });
  };

  const deleteOne = async id => {
    return new Promise((resolve, reject) => {
      databaseService.query(
        `DELETE FROM veiculo  WHERE codVeiculo = ${id}`,
        (err, results) => {
          if (err) {
            return reject(err);
          }
          return resolve(id);
        }
      );
    });
  };
  
module.exports = {
    findAll,
    findById,
    create,
    updateOne,
    deleteOne
}