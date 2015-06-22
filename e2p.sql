# SQL Manager 2005 Lite for MySQL 3.7.7.1
# ---------------------------------------
# Host     : localhost
# Port     : 3306
# Database : e2p


SET FOREIGN_KEY_CHECKS=0;

DROP DATABASE IF EXISTS `e2p`;

CREATE DATABASE `e2p`
    CHARACTER SET 'utf8'
    COLLATE 'utf8_general_ci';

USE `e2p`;

#
# Structure for the `estatisticas` table : 
#

CREATE TABLE `estatisticas` (
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

#
# Structure for the `frases` table : 
#

CREATE TABLE `frases` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `content` varchar(205) NOT NULL,
  `reacao` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=latin1;

#
# Structure for the `materias` table : 
#

CREATE TABLE `materias` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nome` varchar(205) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=latin1;

#
# Structure for the `nivel` table : 
#

CREATE TABLE `nivel` (
  `idNivel` int(10) NOT NULL AUTO_INCREMENT,
  `nivel` varchar(205) NOT NULL,
  PRIMARY KEY (`idNivel`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;

#
# Structure for the `questoes` table : 
#

CREATE TABLE `questoes` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `titulo` varchar(255) NOT NULL,
  `idNivel` int(10) NOT NULL,
  `id_mate` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `idNivel` (`idNivel`),
  KEY `id_mate` (`id_mate`),
  KEY `id_mate_2` (`id_mate`),
  KEY `idNivel_2` (`idNivel`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8;

#
# Structure for the `opcoes` table : 
#

CREATE TABLE `opcoes` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `content` varchar(255) NOT NULL,
  `right_answer` tinyint(1) NOT NULL,
  `question_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `question_id` (`question_id`),
  CONSTRAINT `opcoes_ibfk_1` FOREIGN KEY (`question_id`) REFERENCES `questoes` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=47 DEFAULT CHARSET=utf8;

#
# Structure for the `usuarios` table : 
#

CREATE TABLE `usuarios` (
  `nome` varchar(50) NOT NULL,
  `sobrenome` varchar(50) NOT NULL,
  `usuario` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `matricula` varchar(50) NOT NULL,
  `senha` varchar(50) NOT NULL,
  `nivel` int(10) NOT NULL DEFAULT '1',
  PRIMARY KEY (`usuario`,`senha`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

#
# Data for the `estatisticas` table  (LIMIT 0,500)
#

INSERT INTO `estatisticas` (`user`, `acertos_geral`, `total_questoes`, `total_mat`, `acertos_mat`, `total_geo`, `acertos_geo`, `total_hist`, `acertos_hist`, `total_port`, `acertos_port`, `total_quim`, `acertos_quim`, `total_ing`, `acertos_ing`, `total_esp`, `acertos_esp`, `total_soc`, `acertos_soc`, `total_fil`, `acertos_fil`, `total_fis`, `acertos_fis`, `total_bio`, `acertos_bio`, `jogos_realizados`) VALUES 
  ('alyssonmoreira',105,105,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),
  ('asdf',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0),
  ('alicetotosa',16,20,7,5,1,1,4,3,7,6,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0),
  ('ozeias',149,160,57,53,6,6,45,41,32,30,20,19,0,0,0,0,0,0,0,0,0,0,0,0,12);

COMMIT;

#
# Data for the `frases` table  (LIMIT 0,500)
#

INSERT INTO `frases` (`id`, `content`, `reacao`) VALUES 
  (1,'Olá, aprendiz! Vamos construir o nosso foguete?',1),
  (2,'Você é um ótimo aprendiz.',2),
  (3,'Sabia que a NASA já tem 100 anos?',3),
  (4,'Obrigada por estar me ajudando, aprendiz!',1),
  (5,'Você sabia que eu sou formado em Engenharia Mecânica?',5),
  (6,'Vamos estudar!',1),
  (7,'O seu desempenho está ótimo!',2),
  (8,'Continue estudando.',3);

COMMIT;

#
# Data for the `materias` table  (LIMIT 0,500)
#

INSERT INTO `materias` (`id`, `nome`) VALUES 
  (1,'Matemática'),
  (2,'Geografia'),
  (3,'História'),
  (4,'Português'),
  (5,'Química'),
  (6,'Inglês'),
  (7,'Espanhol'),
  (8,'Sociologia'),
  (9,'Filosofia'),
  (11,'Física'),
  (12,'Biologia');

COMMIT;

#
# Data for the `nivel` table  (LIMIT 0,500)
#

INSERT INTO `nivel` (`idNivel`, `nivel`) VALUES 
  (1,'Fácil'),
  (2,'Médio'),
  (3,'Difícil');

COMMIT;

#
# Data for the `questoes` table  (LIMIT 0,500)
#

INSERT INTO `questoes` (`id`, `titulo`, `idNivel`, `id_mate`) VALUES 
  (1,'Quanto é 2 + 2?',1,1),
  (2,'X + 2 = 4. Qual o valor de X? ',3,1),
  (3,'5+5 = ?',2,1),
  (4,'Como Tiradentes foi morto?',1,3),
  (5,'Qual desses estados não faz parte do nordeste brasileiro?',2,2),
  (6,'Qual o grau de relevância de oração subordinada para a sua vida?',1,4),
  (7,'Qual o número atômico do Hidrogênio?',2,5),
  (8,'Qual o número atômico do Hélio?',2,5),
  (9,'Quem descobriu o Brasil foi Pedro Alvares Ca...',1,3),
  (10,'Na frase: \"Joazinho tem um posto\" Joãozinho é um sujeito de que tipo?',3,4);

COMMIT;

#
# Data for the `opcoes` table  (LIMIT 0,500)
#

INSERT INTO `opcoes` (`id`, `content`, `right_answer`, `question_id`) VALUES 
  (1,'5',0,1),
  (2,'4',1,1),
  (3,'3',0,1),
  (4,'2',0,1),
  (5,'1',0,2),
  (6,'2',1,2),
  (7,'3',0,2),
  (8,'4',0,2),
  (9,'8',0,3),
  (10,'9',0,3),
  (11,'10',1,3),
  (12,'11',0,3),
  (13,'Enforcado',1,4),
  (14,'Com um tiro no cocurutu',0,4),
  (15,'Negaram água pra ele',0,4),
  (16,'Ele se cansou de viver',0,4),
  (17,'Ceará',0,5),
  (18,'Maranhão',0,5),
  (19,'Pernambuco',0,5),
  (20,'Bahia',0,5),
  (21,'Quebec',1,5),
  (22,'Enorme',0,6),
  (23,'Razoavelmente Importante',0,6),
  (24,'Importante',0,6),
  (25,'Não tão Importante',0,6),
  (26,'Irrelevante',1,6),
  (29,'1',1,7),
  (30,'2',0,7),
  (31,'3',0,7),
  (32,'4',0,7),
  (33,'1',0,8),
  (34,'2',1,8),
  (35,'3',0,8),
  (36,'4',0,8),
  (37,'bral',1,9),
  (38,'brel',0,9),
  (39,'bril',0,9),
  (40,'brol',0,9),
  (41,'brul',0,9),
  (42,'Composto',0,10),
  (43,'Com posto',1,10),
  (44,'Simples',0,10),
  (45,'Não sei',0,10),
  (46,'Pergunta la no Posto Ipiranga',0,10);

COMMIT;

#
# Data for the `usuarios` table  (LIMIT 0,500)
#

INSERT INTO `usuarios` (`nome`, `sobrenome`, `usuario`, `email`, `matricula`, `senha`, `nivel`) VALUES 
  ('abc','abc','abc','abc@abc.com','123','123',1),
  ('alice','asd','alicetotosa','asda','asd','e8d95a51f3af4a3b134bf6bb680a213a',2),
  ('Alysson','Moreira','alyssonmoreira','alyssonyopacom','123456','senha',8),
  ('aasd','asd','asdf','asdfasdfcom','123456','senha',1),
  ('123','123','hugo','diniz','aaa','aaa@aaa.com',1),
  ('ozeias','dalmon','ozeias','wololologmailcom','12345','e8d95a51f3af4a3b134bf6bb680a213a',10);

COMMIT;

