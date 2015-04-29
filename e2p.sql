-- phpMyAdmin SQL Dump
-- version 4.2.11
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: 29-Abr-2015 às 16:13
-- Versão do servidor: 5.6.21
-- PHP Version: 5.6.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `e2p`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `nivel`
--

CREATE TABLE IF NOT EXISTS `nivel` (
`idNivel` int(10) NOT NULL,
  `nivel` int(5) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estrutura da tabela `opcoes`
--

CREATE TABLE IF NOT EXISTS `opcoes` (
`id` int(11) NOT NULL,
  `content` varchar(255) NOT NULL,
  `right_answer` tinyint(1) NOT NULL,
  `question_id` int(11) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;

--
-- Extraindo dados da tabela `opcoes`
--

INSERT INTO `opcoes` (`id`, `content`, `right_answer`, `question_id`) VALUES
(1, '5', 0, 1),
(2, '4', 1, 1),
(3, '3', 0, 1),
(4, '2', 0, 1);

-- --------------------------------------------------------

--
-- Estrutura da tabela `questoes`
--

CREATE TABLE IF NOT EXISTS `questoes` (
`id` int(11) NOT NULL,
  `titulo` varchar(255) NOT NULL,
  `idNivel` int(10) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

--
-- Extraindo dados da tabela `questoes`
--

INSERT INTO `questoes` (`id`, `titulo`, `idNivel`) VALUES
(1, 'Quanto é dois mais dois?', 0);

-- --------------------------------------------------------

--
-- Estrutura da tabela `usuarios`
--

CREATE TABLE IF NOT EXISTS `usuarios` (
  `senha` varchar(20) NOT NULL,
  `matricula` varchar(50) NOT NULL,
  `nome` varchar(50) NOT NULL,
  `sobrenome` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `nivel`
--
ALTER TABLE `nivel`
 ADD PRIMARY KEY (`idNivel`);

--
-- Indexes for table `opcoes`
--
ALTER TABLE `opcoes`
 ADD PRIMARY KEY (`id`), ADD KEY `question_id` (`question_id`);

--
-- Indexes for table `questoes`
--
ALTER TABLE `questoes`
 ADD PRIMARY KEY (`id`), ADD KEY `idNivel` (`idNivel`);

--
-- Indexes for table `usuarios`
--
ALTER TABLE `usuarios`
 ADD PRIMARY KEY (`senha`,`matricula`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `nivel`
--
ALTER TABLE `nivel`
MODIFY `idNivel` int(10) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `opcoes`
--
ALTER TABLE `opcoes`
MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=5;
--
-- AUTO_INCREMENT for table `questoes`
--
ALTER TABLE `questoes`
MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=2;
--
-- Constraints for dumped tables
--

--
-- Limitadores para a tabela `opcoes`
--
ALTER TABLE `opcoes`
ADD CONSTRAINT `opcoes_ibfk_1` FOREIGN KEY (`question_id`) REFERENCES `questoes` (`id`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
