-- phpMyAdmin SQL Dump
-- version 4.3.11
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: 21-Maio-2015 às 05:04
-- Versão do servidor: 5.6.24
-- PHP Version: 5.6.8

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
-- Estrutura da tabela `frases`
--

CREATE TABLE IF NOT EXISTS `frases` (
  `content` varchar(205) NOT NULL,
  `reacao` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `frases`
--

INSERT INTO `frases` (`content`, `reacao`) VALUES
('Aah!! que ótimo simula... err digo plataforma!', 0),
('Isto não é um simulador, viu?', 0),
('Se você ver um animal, desconfie se não é um alienígena!', 0),
('Vortex, ahh... NÃo!!', 0);

-- --------------------------------------------------------

--
-- Estrutura da tabela `materias`
--

CREATE TABLE IF NOT EXISTS `materias` (
  `id` int(11) NOT NULL,
  `nome` varchar(205) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=latin1;

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
  `idNivel` int(10) NOT NULL,
  `nivel` varchar(205) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;

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
  `id` int(11) NOT NULL,
  `content` varchar(255) NOT NULL,
  `right_answer` tinyint(1) NOT NULL,
  `question_id` int(11) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=47 DEFAULT CHARSET=utf8;

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
(16, 'Ele se cansou de viver', 0, 4),
(17, 'Ceará', 0, 5),
(18, 'Maranhão', 0, 5),
(19, 'Pernambuco', 0, 5),
(20, 'Bahia', 0, 5),
(21, 'Quebec', 1, 5),
(22, 'Enorme', 0, 6),
(23, 'Razoavelmente Importante', 0, 6),
(24, 'Importante', 0, 6),
(25, 'Não tão Importante', 0, 6),
(26, 'Irrelevante', 1, 6),
(29, '1', 1, 7),
(30, '2', 0, 7),
(31, '3', 0, 7),
(32, '4', 0, 7),
(33, '1', 0, 8),
(34, '2', 1, 8),
(35, '3', 0, 8),
(36, '4', 0, 8),
(37, 'bral', 1, 9),
(38, 'brel', 0, 9),
(39, 'bril', 0, 9),
(40, 'brol', 0, 9),
(41, 'brul', 0, 9),
(42, 'Composto', 0, 10),
(43, 'Com posto', 1, 10),
(44, 'Simples', 0, 10),
(45, 'Não sei', 0, 10),
(46, 'Pergunta la no Posto Ipiranga', 0, 10);

-- --------------------------------------------------------

--
-- Estrutura da tabela `questoes`
--

CREATE TABLE IF NOT EXISTS `questoes` (
  `id` int(11) NOT NULL,
  `titulo` varchar(255) NOT NULL,
  `idNivel` int(10) NOT NULL,
  `id_mate` int(11) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8;

--
-- Extraindo dados da tabela `questoes`
--

INSERT INTO `questoes` (`id`, `titulo`, `idNivel`, `id_mate`) VALUES
(1, 'Quanto é dois mais dois?', 1, 1),
(2, 'X + 2 = 4. Qual o valor de X? ', 3, 1),
(3, '5+5 = ?', 2, 1),
(4, 'Como Tiradentes foi morto?', 1, 3),
(5, 'Qual desses estados não faz parte do nordeste brasileiro?', 2, 2),
(6, 'Qual o grau de relevância de oração subordinada para a sua vida?', 1, 4),
(7, 'Qual o número atômico do Hidrogênio?', 2, 5),
(8, 'Qual o número atômico do Hélio?', 2, 5),
(9, 'Quem descobriu o Brasil foi Pedro Alvares Ca...', 1, 3),
(10, 'Na frase: "Joazinho tem um posto" Joãozinho é um sujeito de que tipo?', 3, 4);

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
  `acertos` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `usuarios`
--

INSERT INTO `usuarios` (`nome`, `sobrenome`, `usuario`, `email`, `matricula`, `senha`, `acertos`) VALUES
('abc', 'abc', 'abc', 'abc@abc.com', '123', '123', 10),
('123', '123', 'hugo', 'diniz', 'aaa', 'aaa@aaa.com', 5);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `frases`
--
ALTER TABLE `frases`
  ADD UNIQUE KEY `content` (`content`);

--
-- Indexes for table `materias`
--
ALTER TABLE `materias`
  ADD PRIMARY KEY (`id`);

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
  ADD PRIMARY KEY (`id`), ADD KEY `idNivel` (`idNivel`), ADD KEY `id_mate` (`id_mate`), ADD KEY `id_mate_2` (`id_mate`), ADD KEY `idNivel_2` (`idNivel`);

--
-- Indexes for table `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`usuario`,`senha`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `materias`
--
ALTER TABLE `materias`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=6;
--
-- AUTO_INCREMENT for table `nivel`
--
ALTER TABLE `nivel`
  MODIFY `idNivel` int(10) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=4;
--
-- AUTO_INCREMENT for table `opcoes`
--
ALTER TABLE `opcoes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=47;
--
-- AUTO_INCREMENT for table `questoes`
--
ALTER TABLE `questoes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=11;
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
