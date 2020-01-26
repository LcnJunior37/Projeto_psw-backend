
 SET NAMES utf8 ;

DROP TABLE IF EXISTS `animal`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `animal` (
  `idAnimal` int(11) NOT NULL,
  `nome` varchar(45) DEFAULT NULL,
  `Dono_idDono` int(11) NOT NULL,
  `especie` varchar(45) DEFAULT NULL,
  `raça` varchar(45) DEFAULT NULL,
  `porte` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`idAnimal`),
  KEY `fk_Animal_Dono1_idx` (`Dono_idDono`),
  CONSTRAINT `fk_Animal_Dono1` FOREIGN KEY (`Dono_idDono`) REFERENCES `dono` (`iddono`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `animal`
--

LOCK TABLES `animal` WRITE;
/*!40000 ALTER TABLE `animal` DISABLE KEYS */;
/*!40000 ALTER TABLE `animal` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `consultas`
--

DROP TABLE IF EXISTS `consultas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `consultas` (
  `idConsultas` int(11) NOT NULL,
  `data` date DEFAULT NULL,
  `Servicos_idServicos` int(11) NOT NULL,
  PRIMARY KEY (`idConsultas`),
  KEY `fk_Consultas_Servicos1_idx` (`Servicos_idServicos`),
  CONSTRAINT `fk_Consultas_Servicos1` FOREIGN KEY (`Servicos_idServicos`) REFERENCES `servicos` (`idservicos`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `consultas`
--

LOCK TABLES `consultas` WRITE;
/*!40000 ALTER TABLE `consultas` DISABLE KEYS */;
/*!40000 ALTER TABLE `consultas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `dono`
--

DROP TABLE IF EXISTS `dono`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `dono` (
  `idDono` int(11) NOT NULL,
  `nome` varchar(45) DEFAULT NULL,
  `CPF` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`idDono`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `dono`
--

LOCK TABLES `dono` WRITE;
/*!40000 ALTER TABLE `dono` DISABLE KEYS */;
/*!40000 ALTER TABLE `dono` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `fornecedor`
--

DROP TABLE IF EXISTS `fornecedor`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `fornecedor` (
  `idFornecedor` int(11) NOT NULL,
  `nome` varchar(45) NOT NULL,
  `cnpj` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`idFornecedor`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `fornecedor`
--

LOCK TABLES `fornecedor` WRITE;
/*!40000 ALTER TABLE `fornecedor` DISABLE KEYS */;
INSERT INTO `fornecedor` VALUES (1,'batatinha LTDA','64.599.112/0001-93'),(2,'Raposinha LTDA','66.549.112/0002-93');
/*!40000 ALTER TABLE `fornecedor` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `funcionarios`
--

DROP TABLE IF EXISTS `funcionarios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `funcionarios` (
  `idFuncionarios` int(11) NOT NULL,
  `nome` varchar(45) DEFAULT NULL,
  `salario` float DEFAULT NULL,
  `cpf` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`idFuncionarios`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `funcionarios`
--

LOCK TABLES `funcionarios` WRITE;
/*!40000 ALTER TABLE `funcionarios` DISABLE KEYS */;
/*!40000 ALTER TABLE `funcionarios` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `item`
--

DROP TABLE IF EXISTS `item`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `item` (
  `idItem` int(11) NOT NULL,
  `qtd` varchar(45) DEFAULT NULL,
  `valorUni` float DEFAULT NULL,
  `Produtos_idProdutos` int(11) NOT NULL,
  `Venda_idvenda` int(11) NOT NULL,
  PRIMARY KEY (`idItem`),
  KEY `fk_Item_Produtos1_idx` (`Produtos_idProdutos`),
  KEY `fk_Item_Venda1_idx` (`Venda_idvenda`),
  CONSTRAINT `fk_Item_Produtos1` FOREIGN KEY (`Produtos_idProdutos`) REFERENCES `produtos` (`idprodutos`),
  CONSTRAINT `fk_Item_Venda1` FOREIGN KEY (`Venda_idvenda`) REFERENCES `venda` (`idvenda`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `item`
--

LOCK TABLES `item` WRITE;
/*!40000 ALTER TABLE `item` DISABLE KEYS */;
/*!40000 ALTER TABLE `item` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `produtos`
--

DROP TABLE IF EXISTS `produtos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `produtos` (
  `idProdutos` int(11) NOT NULL,
  `nome` varchar(45) DEFAULT NULL,
  `valor` float DEFAULT NULL,
  `Fornecedor_idFornecedor` int(11) NOT NULL,
  PRIMARY KEY (`idProdutos`),
  KEY `fk_Produtos_Fornecedor_idx` (`Fornecedor_idFornecedor`),
  CONSTRAINT `fk_Produtos_Fornecedor` FOREIGN KEY (`Fornecedor_idFornecedor`) REFERENCES `fornecedor` (`idfornecedor`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `produtos`
--

LOCK TABLES `produtos` WRITE;
/*!40000 ALTER TABLE `produtos` DISABLE KEYS */;
/*!40000 ALTER TABLE `produtos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `recebeservico`
--

DROP TABLE IF EXISTS `recebeservico`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `recebeservico` (
  `idRecebeServico` int(11) NOT NULL,
  `valor` float DEFAULT NULL,
  `Animal_idAnimal` int(11) NOT NULL,
  `Venda_idvenda` int(11) NOT NULL,
  `Servicos_idServicos` int(11) NOT NULL,
  PRIMARY KEY (`idRecebeServico`),
  KEY `fk_RecebeServico_Animal1_idx` (`Animal_idAnimal`),
  KEY `fk_RecebeServico_Venda1_idx` (`Venda_idvenda`),
  KEY `fk_RecebeServico_Servicos1_idx` (`Servicos_idServicos`),
  CONSTRAINT `fk_RecebeServico_Animal1` FOREIGN KEY (`Animal_idAnimal`) REFERENCES `animal` (`idanimal`),
  CONSTRAINT `fk_RecebeServico_Servicos1` FOREIGN KEY (`Servicos_idServicos`) REFERENCES `servicos` (`idservicos`),
  CONSTRAINT `fk_RecebeServico_Venda1` FOREIGN KEY (`Venda_idvenda`) REFERENCES `venda` (`idvenda`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `recebeservico`
--

LOCK TABLES `recebeservico` WRITE;
/*!40000 ALTER TABLE `recebeservico` DISABLE KEYS */;
/*!40000 ALTER TABLE `recebeservico` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `servicos`
--

DROP TABLE IF EXISTS `servicos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `servicos` (
  `idServicos` int(11) NOT NULL,
  `tipo` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`idServicos`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `servicos`
--

LOCK TABLES `servicos` WRITE;
/*!40000 ALTER TABLE `servicos` DISABLE KEYS */;
/*!40000 ALTER TABLE `servicos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `venda`
--

DROP TABLE IF EXISTS `venda`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `venda` (
  `idvenda` int(11) NOT NULL,
  `data` varchar(45) DEFAULT NULL,
  `Funcionarios_idFuncionarios` int(11) NOT NULL,
  PRIMARY KEY (`idvenda`),
  KEY `fk_Venda_Funcionarios1_idx` (`Funcionarios_idFuncionarios`),
  CONSTRAINT `fk_Venda_Funcionarios1` FOREIGN KEY (`Funcionarios_idFuncionarios`) REFERENCES `funcionarios` (`idfuncionarios`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `venda`
--

LOCK TABLES `venda` WRITE;
/*!40000 ALTER TABLE `venda` DISABLE KEYS */;
/*!40000 ALTER TABLE `venda` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping events for database 'vet'
--

--
-- Dumping routines for database 'vet'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2018-06-27 19:42:04
