-- phpMyAdmin SQL Dump
-- version 5.0.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Oct 22, 2020 at 03:30 AM
-- Server version: 10.4.14-MariaDB
-- PHP Version: 7.2.34

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `googleads`
--
CREATE DATABASE IF NOT EXISTS `googleads` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `googleads`;

-- --------------------------------------------------------
CREATE USER 'shishir'@'localhost' IDENTIFIED BY 'shishir';
GRANT ALL ON googleads.* TO 'shishir'@'localhost';
--
-- Table structure for table `keyword_setting`
--

CREATE TABLE `keyword_setting` (
  `PK_Keyword` int(11) NOT NULL,
  `ID` int(11) NOT NULL,
  `keyword` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `keyword_setting`
--

INSERT INTO `keyword_setting` (`PK_Keyword`, `ID`, `keyword`) VALUES
(2, 0, ''),
(28, 4, 'fghmnfghn'),
(30, 4, 'vsdfdhjdfgj'),
(31, 2, 'asdfassfngjdsfgn'),
(51, 1, 'dsfadfd'),
(53, 1, 'dfsd'),
(66, 2, 'asdfasvadfbsdfv'),
(68, 1, 'dsfsdf');

-- --------------------------------------------------------

--
-- Table structure for table `site_setting`
--

CREATE TABLE `site_setting` (
  `PK_Site` int(11) NOT NULL,
  `ID` int(11) NOT NULL,
  `site` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `site_setting`
--

INSERT INTO `site_setting` (`PK_Site`, `ID`, `site`) VALUES
(8, 2, 'asdfasdfaasfasdfasdf'),
(10, 2, 'asdfasvsadfbsdfbdsbv'),
(11, 2, 'asdfacfevavadv'),
(24, 1, ' sdfsf,com'),
(25, 1, 'hero.com'),
(26, 1, 'sdfas.com');

-- --------------------------------------------------------

--
-- Table structure for table `user_setting`
--

CREATE TABLE `user_setting` (
  `ID` int(11) NOT NULL,
  `waittarget1` int(3) NOT NULL,
  `waittarget2` int(3) NOT NULL,
  `incognito` tinyint(1) NOT NULL,
  `visitpage` tinyint(1) NOT NULL,
  `pagestart` int(11) NOT NULL,
  `pagestop` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `user_setting`
--

INSERT INTO `user_setting` (`ID`, `waittarget1`, `waittarget2`, `incognito`, `visitpage`, `pagestart`, `pagestop`) VALUES
(1, 18, 33, 1, 0, 128, 55),
(2, 36, 45, 0, 1, 30, 35),
(3, 6, 25, 1, 0, 32, 42),
(4, 21, 23, 1, 1, 33, 44),
(5, 12, 23, 1, 1, 33, 44),
(6, 12, 23, 1, 1, 33, 44);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `keyword_setting`
--
ALTER TABLE `keyword_setting`
  ADD PRIMARY KEY (`PK_Keyword`),
  ADD UNIQUE KEY `keyword` (`keyword`);

--
-- Indexes for table `site_setting`
--
ALTER TABLE `site_setting`
  ADD PRIMARY KEY (`PK_Site`),
  ADD UNIQUE KEY `site` (`site`);

--
-- Indexes for table `user_setting`
--
ALTER TABLE `user_setting`
  ADD PRIMARY KEY (`ID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `keyword_setting`
--
ALTER TABLE `keyword_setting`
  MODIFY `PK_Keyword` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=69;

--
-- AUTO_INCREMENT for table `site_setting`
--
ALTER TABLE `site_setting`
  MODIFY `PK_Site` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27;

--
-- AUTO_INCREMENT for table `user_setting`
--
ALTER TABLE `user_setting`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
