-- phpMyAdmin SQL Dump
-- version 4.2.11
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: 12-Maio-2015 às 16:56
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
-- Estrutura da tabela `materias`
--

CREATE TABLE IF NOT EXISTS `materias` (
  `id` int(11) NOT NULL,
  `nome` varchar(205) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `materias`
--

INSERT INTO `materias` (`id`, `nome`) VALUES
(1, 'Matemática');

-- --------------------------------------------------------

--
-- Estrutura da tabela `questoes`
--

CREATE TABLE IF NOT EXISTS `questoes` (
`id` int(11) NOT NULL,
  `questao_texto` text NOT NULL,
  `nivel` varchar(10) NOT NULL,
  `alternativa1` tinyint(1) NOT NULL,
  `alternativa2` tinyint(1) NOT NULL,
  `alternativa3` tinyint(1) NOT NULL,
  `alternativa4` tinyint(1) NOT NULL,
  `alternativa5` tinyint(1) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

--
-- Extraindo dados da tabela `questoes`
--

INSERT INTO `questoes` (`id`, `questao_texto`, `nivel`, `alternativa1`, `alternativa2`, `alternativa3`, `alternativa4`, `alternativa5`) VALUES
(1, '', '', 0, 0, 0, 0, 0);

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
  `senha` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `usuarios`
--

INSERT INTO `usuarios` (`nome`, `sobrenome`, `usuario`, `email`, `matricula`, `senha`) VALUES
('', '', '', '', '', ''),
('', '', '', '', '', 'asd'),
('', '', '', '', '', 'ssa'),
('abc', 'abc', 'abc', 'abc@abc.com', '123', '123'),
('Hugo', 'Diniz', 'hhldiniz', 'hhldiniz@gmail.com', '123', '123'),
('123', '123', 'hugo', 'diniz', 'aaa', 'aaa@aaa.com');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `questoes`
--
ALTER TABLE `questoes`
 ADD PRIMARY KEY (`id`);

--
-- Indexes for table `usuarios`
--
ALTER TABLE `usuarios`
 ADD PRIMARY KEY (`usuario`,`senha`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `questoes`
--
ALTER TABLE `questoes`
MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=2;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
