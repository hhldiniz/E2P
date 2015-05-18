-- phpMyAdmin SQL Dump
-- version 3.4.10.1deb1
-- http://www.phpmyadmin.net
--
-- Servidor: localhost
-- Tempo de Geração: 18/05/2015 às 14h19min
-- Versão do Servidor: 5.5.43
-- Versão do PHP: 5.3.10-1ubuntu3.18

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Banco de Dados: `e2p`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `materias`
--

CREATE TABLE IF NOT EXISTS `materias` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nome` varchar(205) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=6 ;

--
-- Extraindo dados da tabela `materias`
--

INSERT INTO `materias` (`id`, `nome`) VALUES
(1, 'Matemática'),
(2, 'Geografia'),
(3, 'História'),
(4, 'Português'),
(5, 'Química');

-- --------------------------------------------------------

--
-- Estrutura da tabela `nivel`
--

CREATE TABLE IF NOT EXISTS `nivel` (
  `idNivel` int(10) NOT NULL AUTO_INCREMENT,
  `nivel` varchar(205) NOT NULL,
  PRIMARY KEY (`idNivel`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=4 ;

--
-- Extraindo dados da tabela `nivel`
--

INSERT INTO `nivel` (`idNivel`, `nivel`) VALUES
(1, 'Fácil'),
(2, 'Médio'),
(3, 'Difícil');

-- --------------------------------------------------------

--
-- Estrutura da tabela `opcoes`
--

CREATE TABLE IF NOT EXISTS `opcoes` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `content` varchar(255) NOT NULL,
  `right_answer` tinyint(1) NOT NULL,
  `question_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `question_id` (`question_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=17 ;

--
-- Extraindo dados da tabela `opcoes`
--

INSERT INTO `opcoes` (`id`, `content`, `right_answer`, `question_id`) VALUES
(1, '5', 0, 1),
(2, '4', 1, 1),
(3, '3', 0, 1),
(4, '2', 0, 1),
(5, '1', 0, 2),
(6, '2', 1, 2),
(7, '3', 0, 2),
(8, '4', 0, 2),
(9, '8', 0, 3),
(10, '9', 0, 3),
(11, '10', 1, 3),
(12, '11', 0, 3),
(13, 'Enforcado', 1, 4),
(14, 'Com um tiro no cu', 0, 4),
(15, 'Negaram água pra ele', 0, 4),
(16, 'Ele se cansou de viver', 0, 4);

-- --------------------------------------------------------

--
-- Estrutura da tabela `questoes`
--

CREATE TABLE IF NOT EXISTS `questoes` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `titulo` varchar(255) NOT NULL,
  `idNivel` int(10) NOT NULL,
  `id_mate` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `idNivel` (`idNivel`),
  KEY `id_mate` (`id_mate`),
  KEY `id_mate_2` (`id_mate`),
  KEY `idNivel_2` (`idNivel`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=5 ;

--
-- Extraindo dados da tabela `questoes`
--

INSERT INTO `questoes` (`id`, `titulo`, `idNivel`, `id_mate`) VALUES
(1, 'Quanto é dois mais dois?', 1, 1),
(2, 'X + 2 = 4. Qual o valor de X? ', 3, 1),
(3, '5+5 = ?', 2, 1),
(4, 'Como Tiradentes foi morto?', 1, 3);

-- --------------------------------------------------------

--
-- Estrutura da tabela `usuarios`
--

CREATE TABLE IF NOT EXISTS `usuarios` (
  `nome` varchar(50) NOT NULL,
  `sobrenome` varchar(50) NOT NULL,
  `usuario` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `matricula` varchar(50) NOT NULL,
  `senha` varchar(50) NOT NULL,
  PRIMARY KEY (`usuario`,`senha`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `usuarios`
--

INSERT INTO `usuarios` (`nome`, `sobrenome`, `usuario`, `email`, `matricula`, `senha`) VALUES
('abc', 'abc', 'abc', 'abc@abc.com', '123', '123'),
('123', '123', 'hugo', 'diniz', 'aaa', 'aaa@aaa.com');

--
-- Restrições para as tabelas dumpadas
--

--
-- Restrições para a tabela `opcoes`
--
ALTER TABLE `opcoes`
  ADD CONSTRAINT `opcoes_ibfk_1` FOREIGN KEY (`question_id`) REFERENCES `questoes` (`id`);

--
-- Restrições para a tabela `questoes`
--
ALTER TABLE `questoes`
  ADD CONSTRAINT `questoes_ibfk_2` FOREIGN KEY (`id_mate`) REFERENCES `materias` (`id`),
  ADD CONSTRAINT `questoes_ibfk_1` FOREIGN KEY (`idNivel`) REFERENCES `nivel` (`idNivel`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
