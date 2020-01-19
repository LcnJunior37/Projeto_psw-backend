
CREATE TABLE `alocacao` (
  `codAlocacao` int(11) NOT NULL AUTO_INCREMENT,
  `cliente` int(11) DEFAULT NULL,
  `obra` int(11) DEFAULT NULL,
  `Valor` double DEFAULT NULL,
  `dataInicio` date DEFAULT NULL,
  `dataFim` date DEFAULT NULL,
  `motorista` int(11) DEFAULT NULL,
  PRIMARY KEY (`codAlocacao`),
  KEY `cliente` (`cliente`),
  KEY `obra` (`obra`),
  KEY `motorista` (`motorista`),
  CONSTRAINT `alocacao_ibfk_1` FOREIGN KEY (`cliente`) REFERENCES `cliente` (`codcliente`),
  CONSTRAINT `alocacao_ibfk_2` FOREIGN KEY (`obra`) REFERENCES `obra` (`codobra`),
  CONSTRAINT `alocacao_ibfk_3` FOREIGN KEY (`motorista`) REFERENCES `motorista` (`codmotorista`)
);

CREATE TABLE `cliente` (
  `codCliente` int(11) NOT NULL AUTO_INCREMENT,
  `CNPJ` varchar(14) DEFAULT NULL,
  `NomeEmpresa` varchar(255) DEFAULT NULL,
  `Email` varchar(50) DEFAULT NULL,
  `TelContato` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`codCliente`)
);
CREATE TABLE `dirigiu` (
  `veiculo` int(11) DEFAULT NULL,
  `motorista` int(11) DEFAULT NULL,
  `Data` date DEFAULT NULL,
  KEY `veiculo` (`veiculo`),
  KEY `motorista` (`motorista`),
  CONSTRAINT `dirigiu_ibfk_1` FOREIGN KEY (`veiculo`) REFERENCES `veiculo` (`codveiculo`),
  CONSTRAINT `dirigiu_ibfk_2` FOREIGN KEY (`motorista`) REFERENCES `motorista` (`codmotorista`)
);
CREATE TABLE `endereco` (
  `codEnd` int(11) NOT NULL AUTO_INCREMENT,
  `logradouro` varchar(100) DEFAULT NULL,
  `numero` varchar(15) DEFAULT NULL,
  `cep` varchar(10) DEFAULT NULL,
  `complemento` varchar(10) DEFAULT NULL,
  `bairro` varchar(30) DEFAULT NULL,
  PRIMARY KEY (`codEnd`)
);
CREATE TABLE `entrega` (
  `codEntrega` int(11) NOT NULL AUTO_INCREMENT,
  `obra` int(11) DEFAULT NULL,
  `motorista` int(11) DEFAULT NULL,
  PRIMARY KEY (`codEntrega`),
  KEY `obra` (`obra`),
  KEY `motorista` (`motorista`),
  CONSTRAINT `entrega_ibfk_1` FOREIGN KEY (`obra`) REFERENCES `obra` (`codobra`),
  CONSTRAINT `entrega_ibfk_2` FOREIGN KEY (`motorista`) REFERENCES `motorista` (`codmotorista`)
);

CREATE TABLE `motorista` (
  `codMotorista` int(11) NOT NULL AUTO_INCREMENT,
  `Nome` varchar(250) DEFAULT NULL,
  `RG` varchar(15) DEFAULT NULL,
  `Email` varchar(50) DEFAULT NULL,
  `endereco` int(11) DEFAULT NULL,
  `TelefoneContato` int(11) NOT NULL,
  PRIMARY KEY (`codMotorista`),
  KEY `endereco` (`endereco`),
  CONSTRAINT `motorista_ibfk_1` FOREIGN KEY (`endereco`) REFERENCES `endereco` (`codend`)
);

CREATE TABLE `obra` (
  `codObra` int(11) NOT NULL AUTO_INCREMENT,
  `endereco` int(11) DEFAULT NULL,
  `cliente` int(11) DEFAULT NULL,
  PRIMARY KEY (`codObra`),
  KEY `endereco` (`endereco`),
  KEY `cliente` (`cliente`),
  CONSTRAINT `obra_ibfk_1` FOREIGN KEY (`endereco`) REFERENCES `endereco` (`codend`),
  CONSTRAINT `obra_ibfk_2` FOREIGN KEY (`cliente`) REFERENCES `cliente` (`codcliente`)
);

CREATE TABLE `usuario` (
  `codUsuario` int(11) NOT NULL AUTO_INCREMENT,
  `tipo` varchar(30) NOT NULL,
  `nome` varchar(20) DEFAULT NULL,
  `senha` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`codUsuario`)
);

INSERT INTO `usuario` VALUES (1,'Administrador','master','123456'),(2,'Administrador','test1','123456');

CREATE TABLE `veiculo` (
  `codVeiculo` int(11) NOT NULL AUTO_INCREMENT,
  `Placa` varchar(100) DEFAULT NULL,
  `Modelo` varchar(50) DEFAULT NULL,
  `Ano` year(4) NOT NULL,
  `Tipo` varchar(20) NOT NULL,
  PRIMARY KEY (`codVeiculo`)
);