-- phpMyAdmin SQL Dump
-- version 4.1.14
-- http://www.phpmyadmin.net
--
-- Client :  127.0.0.1
-- Généré le :  Mer 11 Janvier 2023 à 23:18
-- Version du serveur :  5.6.17
-- Version de PHP :  5.5.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Base de données :  `gestion_pfe`
--

-- --------------------------------------------------------

--
-- Structure de la table `pfe`
--

CREATE TABLE IF NOT EXISTS `pfe` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `titre` varchar(255) DEFAULT NULL,
  `type_pfe_id` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK32pr172mlb2qwau5fnsmnxtmv` (`type_pfe_id`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=4 ;

--
-- Contenu de la table `pfe`
--

INSERT INTO `pfe` (`id`, `titre`, `type_pfe_id`) VALUES
(2, 'Application Java JEE', 1),
(3, 'Application Full Stack Java Spring', 1);

-- --------------------------------------------------------

--
-- Structure de la table `type_pfe`
--

CREATE TABLE IF NOT EXISTS `type_pfe` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `libelle` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=3 ;

--
-- Contenu de la table `type_pfe`
--

INSERT INTO `type_pfe` (`id`, `libelle`) VALUES
(1, 'Informatique de gestion'),
(2, 'Machine Learning');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
