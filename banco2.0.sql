-- MySQL dump 10.13  Distrib 8.0.11, for Win64 (x86_64)
--
-- Host: localhost    Database: project_rose
-- ------------------------------------------------------
-- Server version	8.0.11

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
SET NAMES utf8 ;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `alocacao`
--

DROP TABLE IF EXISTS `alocacao`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
SET character_set_client
= utf8mb4 ;
CREATE TABLE `alocacao`
(
  `codAlocacao` int
(11) NOT NULL AUTO_INCREMENT,
  `cliente` int
(11) DEFAULT NULL,
  `obra` int
(11) DEFAULT NULL,
  `valor` double DEFAULT NULL,
  `dataInicio` date DEFAULT NULL,
  `dataFim` date DEFAULT NULL,
  PRIMARY KEY
(`codAlocacao`),
  KEY `cliente`
(`cliente`),
  KEY `obra`
(`obra`),
  CONSTRAINT `alocacao_ibfk_1` FOREIGN KEY
(`cliente`) REFERENCES `cliente`
(`codcliente`),
  CONSTRAINT `alocacao_ibfk_2` FOREIGN KEY
(`obra`) REFERENCES `obra`
(`codobra`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `alocacao`
--

LOCK TABLES `alocacao` WRITE;
/*!40000 ALTER TABLE `alocacao` DISABLE KEYS */;
INSERT INTO `
alocacao`
VALUES
  (1, 2, 3, 55, '2019-12-11', '2020-01-11'),
  (5, 3, 3, 55, '2019-12-11', '2020-01-11');
/*!40000 ALTER TABLE `alocacao` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cliente`
--

DROP TABLE IF EXISTS `cliente`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
SET character_set_client
= utf8mb4 ;
CREATE TABLE `cliente`
(
  `codCliente` int
(11) NOT NULL AUTO_INCREMENT,
  `CNPJ` varchar
(14) DEFAULT NULL,
  `NomeEmpresa` varchar
(255) DEFAULT NULL,
  `Email` varchar
(50) DEFAULT NULL,
  `TelContato` varchar
(20) DEFAULT NULL,
  PRIMARY KEY
(`codCliente`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cliente`
--

LOCK TABLES `cliente` WRITE;
/*!40000 ALTER TABLE `cliente` DISABLE KEYS */;
INSERT INTO `
cliente`
VALUES
  (2, '3242.231324', 'tijolinho', 'tijolinho@potato.com', '212345678'),
  (3, '211111', 'Gotinha2', 'Gotinha2@potato.com', '12331'),
  (4, '23123123', 'peninha', 'peninha@potato.com', '12313');
/*!40000 ALTER TABLE `cliente` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `dirigir`
--

DROP TABLE IF EXISTS `dirigir`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
SET character_set_client
= utf8mb4 ;
CREATE TABLE `dirigir`
(
  `codDirigiu` int
(11) NOT NULL,
  `motorista` int
(11) NOT NULL,
  `veiculo` int
(11) NOT NULL,
  `data` date NOT NULL,
  `hora` time NOT NULL,
  PRIMARY KEY
(`codDirigiu`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `dirigir`
--

LOCK TABLES `dirigir` WRITE;
/*!40000 ALTER TABLE `dirigir` DISABLE KEYS */;
INSERT INTO `
dirigir`
VALUES
  (1, 1, 1, '2020-12-11', '09:00:00'),
  (2, 1, 2, '2019-12-11', '09:00:00'),
  (3, 2, 1, '2019-12-12', '09:00:00'),
  (7, 4, 2, '2019-12-12', '09:00:00'),
  (8, 4, 2, '2019-12-13', '09:00:00'),
  (10, 1, 1, '2020-12-11', '09:00:00'),
  (11, 1, 1, '2020-12-11', '09:00:00'),
  (12, 1, 1, '2020-12-11', '09:00:00'),
  (13, 1, 1, '2020-12-11', '09:00:00'),
  (14, 1, 1, '2020-12-11', '09:00:00');
/*!40000 ALTER TABLE `dirigir` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `dirigiu_alocacao`
--

DROP TABLE IF EXISTS `dirigiu_alocacao`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
SET character_set_client
= utf8mb4 ;
CREATE TABLE `dirigiu_alocacao`
(
  `codDirigiu` int
(11) NOT NULL,
  `codAlocacao` int
(11) NOT NULL,
  PRIMARY KEY
(`codDirigiu`,`codAlocacao`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `dirigiu_alocacao`
--

LOCK TABLES `dirigiu_alocacao` WRITE;
/*!40000 ALTER TABLE `dirigiu_alocacao` DISABLE KEYS */;
INSERT INTO `
dirigiu_alocacao`
VALUES
  (2, 1),
  (3, 1),
  (7, 5),
  (8, 5);
/*!40000 ALTER TABLE `dirigiu_alocacao` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `endereco`
--

DROP TABLE IF EXISTS `endereco`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
SET character_set_client
= utf8mb4 ;
CREATE TABLE `endereco`
(
  `codEnd` int
(11) NOT NULL AUTO_INCREMENT,
  `logradouro` varchar
(100) DEFAULT NULL,
  `numero` varchar
(15) DEFAULT NULL,
  `cep` varchar
(10) DEFAULT NULL,
  `complemento` varchar
(10) DEFAULT NULL,
  `bairro` varchar
(30) DEFAULT NULL,
  PRIMARY KEY
(`codEnd`)
) ENGINE=InnoDB AUTO_INCREMENT=27 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `endereco`
--

LOCK TABLES `endereco` WRITE;
/*!40000 ALTER TABLE `endereco` DISABLE KEYS */;
INSERT INTO `
endereco`
VALUES
  (1, 'AAb', '57ss732', '52.234-345', '52.234-345', 'xsdxxx'),
  (2, 'yy', '564', '25.235-568', '25.235-568', 'vila da folha'),
  (3, 'AA', '577', '52.234-213', '52.234-213', 'xxxx'),
  (4, 'yy', '564', '25.235-568', '25.235-568', 'vila da folha'),
  (5, 'yy', '554', '25.235-568', '25.235-568', 'vila da folha'),
  (6, 'yy', '554', '25.235-568', '25.235-568', 'vila da folha'),
  (7, 'yy', '554', '25.235-568', '25.235-568', 'vila da folha'),
  (10, 'yy', '554', '25.235-568', '25.235-568', 'vila da folha'),
  (20, 'yy', '554', '25.235-568', '25.235-568', 'vila da folha'),
  (21, 'yy', '554', '25.235-568', '25.235-568', 'vila da folha'),
  (22, 'yy', '554', '25.235-568', '25.235-568', 'vila da folha'),
  (24, 'yy', '554', '25.235-568', '25.235-568', 'vila da folha'),
  (25, 'yy', '554', '25.235-568', '25.235-568', 'vila da folha'),
  (26, 'yy', '554', '25.235-568', '25.235-568', 'vila da folha');
/*!40000 ALTER TABLE `endereco` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `entrega`
--

DROP TABLE IF EXISTS `entrega`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
SET character_set_client
= utf8mb4 ;
CREATE TABLE `entrega`
(
  `codEntrega` int
(11) NOT NULL AUTO_INCREMENT,
  `obra` int
(11) NOT NULL,
  `dirigiu` int
(11) NOT NULL,
  `valor` double NOT NULL,
  PRIMARY KEY
(`codEntrega`),
  KEY `entrega_ibfk_1`
(`obra`),
  KEY `entrega_ibfk_2`
(`dirigiu`),
  CONSTRAINT `entrega_ibfk_1` FOREIGN KEY
(`obra`) REFERENCES `obra`
(`codobra`),
  CONSTRAINT `entrega_ibfk_2` FOREIGN KEY
(`dirigiu`) REFERENCES `dirigir`
(`coddirigiu`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `entrega`
--

LOCK TABLES `entrega` WRITE;
/*!40000 ALTER TABLE `entrega` DISABLE KEYS */;
INSERT INTO `
entrega`
VALUES
  (2, 1, 13, 55),
  (4, 1, 14, 60);
/*!40000 ALTER TABLE `entrega` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `motorista`
--

DROP TABLE IF EXISTS `motorista`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
SET character_set_client
= utf8mb4 ;
CREATE TABLE `motorista`
(
  `codMotorista` int
(11) NOT NULL AUTO_INCREMENT,
  `Nome` varchar
(250) DEFAULT NULL,
  `RG` varchar
(15) DEFAULT NULL,
  `Email` varchar
(50) DEFAULT NULL,
  `endereco` int
(11) DEFAULT NULL,
  `TelefoneContato` varchar
(50) NOT NULL,
  PRIMARY KEY
(`codMotorista`),
  KEY `endereco`
(`endereco`),
  CONSTRAINT `motorista_ibfk_1` FOREIGN KEY
(`endereco`) REFERENCES `endereco`
(`codend`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `motorista`
--

LOCK TABLES `motorista` WRITE;
/*!40000 ALTER TABLE `motorista` DISABLE KEYS */;
INSERT INTO `
motorista`
VALUES
  (1, 'naruto422', '1555122', 'narutinh152o@konoha.com', 7, '223555521223'),
  (2, 'naruto', '12313131', 'narutinho@konoha.com', 2, '2231232123'),
  (3, 'sasuke', '12313131', 'sasuke@konoh.com', 3, '2231232123'),
  (4, 'naruto2', '1231313122', 'narutinh12o@konoha.com', 4, '22312321223'),
  (5, 'naruto22', '1555122', 'narutinh152o@konoha.com', 5, '223555521223'),
  (6, 'naruto422', '1555122', 'narutinh152o@konoha.com', 6, '223555521223');
/*!40000 ALTER TABLE `motorista` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `obra`
--

DROP TABLE IF EXISTS `obra`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
SET character_set_client
= utf8mb4 ;
CREATE TABLE `obra`
(
  `codObra` int
(11) NOT NULL AUTO_INCREMENT,
  `endereco` int
(11) DEFAULT NULL,
  `cliente` int
(11) DEFAULT NULL,
  PRIMARY KEY
(`codObra`),
  KEY `endereco`
(`endereco`),
  KEY `cliente`
(`cliente`),
  CONSTRAINT `obra_ibfk_1` FOREIGN KEY
(`endereco`) REFERENCES `endereco`
(`codend`),
  CONSTRAINT `obra_ibfk_2` FOREIGN KEY
(`cliente`) REFERENCES `cliente`
(`codcliente`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `obra`
--

LOCK TABLES `obra` WRITE;
/*!40000 ALTER TABLE `obra` DISABLE KEYS */;
INSERT INTO `
obra`
VALUES
  (1, 25, 2),
  (2, 26, 3),
  (3, 22, 3),
  (4, 24, 2);
/*!40000 ALTER TABLE `obra` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuario`
--

DROP TABLE IF EXISTS `usuario`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
SET character_set_client
= utf8mb4 ;
CREATE TABLE `usuario`
(
  `codUsuario` int
(11) NOT NULL AUTO_INCREMENT,
  `tipo` varchar
(30) NOT NULL,
  `nome` varchar
(20) DEFAULT NULL,
  `senha` varchar
(15) DEFAULT NULL,
  PRIMARY KEY
(`codUsuario`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuario`
--

LOCK TABLES `usuario` WRITE;
/*!40000 ALTER TABLE `usuario` DISABLE KEYS */;
INSERT INTO `
usuario`
VALUES
  (1, 'Administrador', 'master', '123456'),
  (2, 'Administrador', 'test1', '123456'),
  (3, 'Administrador', 'teste002', 'abc123'),
  (4, 'Administrador', 'teste003', 'abc124'),
  (5, 'Administrador', 'teste006', 'abc124');
/*!40000 ALTER TABLE `usuario` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `veiculo`
--

DROP TABLE IF EXISTS `veiculo`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
SET character_set_client
= utf8mb4 ;
CREATE TABLE `veiculo`
(
  `codVeiculo` int
(11) NOT NULL AUTO_INCREMENT,
  `Placa` varchar
(100) NOT NULL,
  `Modelo` varchar
(50) NOT NULL,
  `Ano` year
(4) NOT NULL,
  `Tipo` varchar
(15) NOT NULL,
  `Capacidade` varchar
(45) DEFAULT NULL,
  PRIMARY KEY
(`codVeiculo`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `veiculo`
--

LOCK TABLES `veiculo` WRITE;
/*!40000 ALTER TABLE `veiculo` DISABLE KEYS */;
INSERT INTO `
veiculo`
VALUES
  (2, 'cba123', 'celta', 1997, 'C', '4m'),
  (3, 'cbe321', 'fusca', 1998, 'M', '0'),
  (4, 'cbdf456', 'chevete', 1998, 'M', '0');
/*!40000 ALTER TABLE `veiculo` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping events for database 'project_rose'
--

--
-- Dumping routines for database 'project_rose'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-02-11 20:57:07
