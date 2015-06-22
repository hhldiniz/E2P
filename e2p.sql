-- phpMyAdmin SQL Dump
-- version 4.3.11
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: 22-Jun-2015 às 02:39
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
-- Estrutura da tabela `estatisticas`
--

CREATE TABLE IF NOT EXISTS `estatisticas` (
  `user` varchar(205) NOT NULL,
  `acertos_geral` int(11) NOT NULL DEFAULT '0',
  `total_questoes` int(11) NOT NULL DEFAULT '0',
  `total_mat` int(11) NOT NULL DEFAULT '0',
  `acertos_mat` int(11) NOT NULL DEFAULT '0',
  `total_geo` int(11) NOT NULL DEFAULT '0',
  `acertos_geo` int(11) NOT NULL DEFAULT '0',
  `total_hist` int(11) NOT NULL DEFAULT '0',
  `acertos_hist` int(11) NOT NULL DEFAULT '0',
  `total_port` int(11) NOT NULL DEFAULT '0',
  `acertos_port` int(11) NOT NULL DEFAULT '0',
  `total_quim` int(11) NOT NULL DEFAULT '0',
  `acertos_quim` int(11) NOT NULL DEFAULT '0',
  `total_ing` int(11) NOT NULL DEFAULT '0',
  `acertos_ing` int(11) NOT NULL DEFAULT '0',
  `total_esp` int(11) NOT NULL DEFAULT '0',
  `acertos_esp` int(11) NOT NULL DEFAULT '0',
  `total_soc` int(11) NOT NULL DEFAULT '0',
  `acertos_soc` int(11) NOT NULL DEFAULT '0',
  `total_fil` int(11) NOT NULL DEFAULT '0',
  `acertos_fil` int(11) NOT NULL DEFAULT '0',
  `total_fis` int(11) NOT NULL DEFAULT '0',
  `acertos_fis` int(11) NOT NULL DEFAULT '0',
  `total_bio` int(11) NOT NULL DEFAULT '0',
  `acertos_bio` int(11) NOT NULL DEFAULT '0',
  `jogos_realizados` int(11) NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `estatisticas`
--

INSERT INTO `estatisticas` (`user`, `acertos_geral`, `total_questoes`, `total_mat`, `acertos_mat`, `total_geo`, `acertos_geo`, `total_hist`, `acertos_hist`, `total_port`, `acertos_port`, `total_quim`, `acertos_quim`, `total_ing`, `acertos_ing`, `total_esp`, `acertos_esp`, `total_soc`, `acertos_soc`, `total_fil`, `acertos_fil`, `total_fis`, `acertos_fis`, `total_bio`, `acertos_bio`, `jogos_realizados`) VALUES
('alyssonmoreira', 105, 105, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0),
('asdf', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0),
('alicetotosa', 16, 20, 7, 5, 1, 1, 4, 3, 7, 6, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0),
('ozeias', 149, 160, 57, 53, 6, 6, 45, 41, 32, 30, 20, 19, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12);

-- --------------------------------------------------------

--
-- Estrutura da tabela `frases`
--

CREATE TABLE IF NOT EXISTS `frases` (
  `id` int(11) NOT NULL,
  `content` varchar(205) NOT NULL,
  `reacao` int(11) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `frases`
--

INSERT INTO `frases` (`id`, `content`, `reacao`) VALUES
(1, 'Ol?, aprendiz! Vamos construir o nosso foguete?', 1),
(2, 'Você é um ótimo aprendiz.', 2),
(3, 'Sabia que a NASA já tem 100 anos?', 3),
(4, 'Obrigada por estar me ajudando, aprendiz!', 1),
(5, 'Você sabia que eu sou formado em Engenharia Mecânica?', 5),
(6, 'Vamos estudar!', 1),
(7, 'Quantas conquistas você já alcançou?', 2),
(8, 'Continue estudando.', 3);

-- --------------------------------------------------------

--
-- Estrutura da tabela `materias`
--

CREATE TABLE IF NOT EXISTS `materias` (
  `id` int(11) NOT NULL,
  `nome` varchar(205) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `materias`
--

INSERT INTO `materias` (`id`, `nome`) VALUES
(1, 'Matem?tica'),
(2, 'Geografia'),
(3, 'Hist?ria'),
(4, 'Portugu'),
(5, 'Qu?mica'),
(6, 'Ingl'),
(7, 'Espanhol'),
(8, 'Sociologia'),
(9, 'Filosofia'),
(11, 'F?sica'),
(12, 'Biologia');

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
(1, 'F?cil'),
(2, 'M?dio'),
(3, 'Dif?cil');

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
(14, 'Com um tiro no cocurutu', 0, 4),
(15, 'Negaram ?gua pra ele', 0, 4),
(16, 'Ele se cansou de viver', 0, 4),
(17, 'Cear', 0, 5),
(18, 'Maranh', 0, 5),
(19, 'Pernambuco', 0, 5),
(20, 'Bahia', 0, 5),
(21, 'Quebec', 1, 5),
(22, 'Enorme', 0, 6),
(23, 'Razoavelmente Importante', 0, 6),
(24, 'Importante', 0, 6),
(25, 'N?o t?o Importante', 0, 6),
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
(45, 'N?o sei', 0, 10),
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
(1, 'Quanto ? 2 + 2?', 1, 1),
(2, 'X + 2 = 4. Qual o valor de X? ', 3, 1),
(3, '5+5 = ?', 2, 1),
(4, 'Como Tiradentes foi morto?', 1, 3),
(5, 'Qual desses estados n?o faz parte do nordeste brasileiro?', 2, 2),
(6, 'Qual o grau de relev?ncia de ora??o subordinada para a sua vida?', 1, 4),
(7, 'Qual o n?mero at?mico do Hidrog?nio?', 2, 5),
(8, 'Qual o n?mero at?mico do H?lio?', 2, 5),
(9, 'Quem descobriu o Brasil foi Pedro Alvares Ca...', 1, 3),
(10, 'Na frase: "Joazinho tem um posto" Jo?ozinho ? um sujeito de que tipo?', 3, 4);

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
  `nivel` int(10) NOT NULL DEFAULT '1'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `usuarios`
--

INSERT INTO `usuarios` (`nome`, `sobrenome`, `usuario`, `email`, `matricula`, `senha`, `nivel`) VALUES
('abc', 'abc', 'abc', 'abc@abc.com', '123', '123', 1),
('alice', 'asd', 'alicetotosa', 'asda', 'asd', 'e8d95a51f3af4a3b134bf6bb680a213a', 2),
('Alysson', 'Moreira', 'alyssonmoreira', 'alyssonyopacom', '123456', 'senha', 8),
('aasd', 'asd', 'asdf', 'asdfasdfcom', '123456', 'senha', 1),
('123', '123', 'hugo', 'diniz', 'aaa', 'aaa@aaa.com', 1),
('ozeias', 'dalmon', 'ozeias', 'wololologmailcom', '12345', 'e8d95a51f3af4a3b134bf6bb680a213a', 10);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `frases`
--
ALTER TABLE `frases`
  ADD PRIMARY KEY (`id`);

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
-- AUTO_INCREMENT for table `frases`
--
ALTER TABLE `frases`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=9;
--
-- AUTO_INCREMENT for table `materias`
--
ALTER TABLE `materias`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=13;
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
