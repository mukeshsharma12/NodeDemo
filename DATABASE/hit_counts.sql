-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 25, 2020 at 08:47 PM
-- Server version: 10.4.13-MariaDB
-- PHP Version: 7.2.32

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `hit_counts`
--

-- --------------------------------------------------------

--
-- Table structure for table `partner`
--

CREATE TABLE `partner` (
  `partner_id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `partner`
--

INSERT INTO `partner` (`partner_id`, `name`) VALUES
(1, 'Pankaj Sharma'),
(2, 'Mayank Sharma'),
(3, 'Manish Yadav'),
(4, 'KP Dhakad');

-- --------------------------------------------------------

--
-- Table structure for table `request_count`
--

CREATE TABLE `request_count` (
  `request_count_id` int(11) NOT NULL,
  `partner_id` int(11) NOT NULL,
  `created_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `request_count`
--

INSERT INTO `request_count` (`request_count_id`, `partner_id`, `created_at`) VALUES
(1, 1, '2020-07-25 19:50:58'),
(2, 1, '2020-07-25 19:50:58'),
(3, 2, '2020-07-25 19:51:39'),
(4, 1, '2020-07-25 19:51:39'),
(22, 1, '2020-07-25 22:24:51'),
(23, 1, '2020-07-25 23:57:20'),
(24, 2, '2020-07-26 00:04:05'),
(25, 3, '2020-07-26 00:04:19');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `partner`
--
ALTER TABLE `partner`
  ADD PRIMARY KEY (`partner_id`);

--
-- Indexes for table `request_count`
--
ALTER TABLE `request_count`
  ADD PRIMARY KEY (`request_count_id`),
  ADD KEY `partner_id` (`partner_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `partner`
--
ALTER TABLE `partner`
  MODIFY `partner_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `request_count`
--
ALTER TABLE `request_count`
  MODIFY `request_count_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `request_count`
--
ALTER TABLE `request_count`
  ADD CONSTRAINT `request_count_ibfk_1` FOREIGN KEY (`partner_id`) REFERENCES `partner` (`partner_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
