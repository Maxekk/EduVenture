-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Czas generowania: 02 Wrz 2023, 19:35
-- Wersja serwera: 10.4.27-MariaDB
-- Wersja PHP: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Baza danych: `eduventure`
--

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `announcements`
--

CREATE TABLE `announcements` (
  `id` int(11) NOT NULL,
  `title` text NOT NULL,
  `upload_date` date NOT NULL,
  `content` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Zrzut danych tabeli `announcements`
--

INSERT INTO `announcements` (`id`, `title`, `upload_date`, `content`) VALUES
(1, 'Exciting Science Fair Coming Soon', '2023-07-03', 'Calling all budding scientists! Our annual science fair is just around the corner. Get ready to showcase your innovative experiments and projects. Mark your calendars for [date] and stay tuned for more details on registration and guidelines'),
(2, 'Attention Parents: Parent-Teacher Conference', '2023-07-03', 'We value your involvement in your child\'s education. Parent-teacher conferences will be held on [date]. It\'s an excellent opportunity to discuss your child\'s progress and address any concerns. Look out for sign-up forms that will be sent home with your child.'),
(3, 'School Musical Auditions: Unleash Your Inner Performer', '2023-07-03', 'Are you passionate about singing, dancing, or acting? Join us for auditions for this year\'s school musical, [musical title]. Show off your talent and be a part of an unforgettable production. Audition dates and requirements will be posted soon, so stay tuned'),
(4, 'Exciting Field Trip Announcement: [Destination]', '2023-07-03', 'Attention all students! We\'re thrilled to announce an upcoming field trip to [destination]. Prepare for an educational and fun-filled day as we explore [destination\'s highlights]. More information regarding permission slips and dates will be shared shortly.'),
(9, 'Test announcement', '2023-07-04', 'Hello from dashboard'),
(10, 'Test announcement 2', '2023-08-17', 'Test content'),
(11, 'Test announcement 3', '2023-08-17', 'Test content'),
(12, '', '2023-08-17', ''),
(13, 'test', '2023-08-17', 'test');

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `grades`
--

CREATE TABLE `grades` (
  `id` int(11) NOT NULL,
  `student_id` int(11) NOT NULL,
  `course` varchar(30) NOT NULL,
  `grade_value` int(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Zrzut danych tabeli `grades`
--

INSERT INTO `grades` (`id`, `student_id`, `course`, `grade_value`) VALUES
(1, 7, 'English', 6),
(2, 26, 'English', 1),
(3, 6, 'Math', 5),
(4, 20, 'Geography', 6),
(5, 26, 'Science', 3),
(6, 10, 'Geography', 3),
(7, 4, 'History', 3),
(8, 5, 'Math', 3),
(9, 28, 'Math', 4),
(10, 9, 'Math', 6),
(11, 12, 'Geography', 5),
(12, 8, 'Science', 0),
(13, 26, 'Geography', 1),
(14, 6, 'Math', 2),
(15, 13, 'Geography', 0),
(16, 24, 'History', 5),
(17, 6, 'English', 2),
(18, 24, 'History', 3),
(19, 10, 'Geography', 2),
(20, 9, 'English', 2),
(21, 3, 'Math', 5),
(22, 17, 'English', 4),
(23, 8, 'English', 5),
(24, 28, 'English', 0),
(25, 30, 'Geography', 2),
(26, 14, 'Geography', 3),
(27, 25, 'English', 2),
(28, 24, 'History', 2),
(29, 22, 'English', 1),
(30, 4, 'Geography', 1),
(31, 19, 'English', 4),
(32, 12, 'Geography', 6),
(33, 13, 'Math', 0),
(34, 8, 'Geography', 4),
(35, 22, 'Science', 3),
(36, 29, 'English', 4),
(37, 5, 'Geography', 6),
(38, 25, 'English', 3),
(39, 4, 'Math', 4),
(40, 21, 'English', 5),
(41, 27, 'Math', 5),
(42, 27, 'Geography', 6),
(43, 5, 'History', 0),
(44, 11, 'Science', 0),
(45, 5, 'Science', 5),
(46, 17, 'English', 1),
(47, 30, 'English', 2),
(48, 5, 'Science', 1),
(49, 15, 'History', 6),
(50, 24, 'Math', 5),
(51, 23, 'Science', 5),
(52, 28, 'Math', 5),
(53, 26, 'History', 0),
(54, 15, 'Geography', 1),
(55, 17, 'Geography', 6),
(56, 27, 'Science', 1),
(60, 23, 'Science', 5),
(61, 28, 'English', 1),
(62, 27, 'History', 1),
(63, 28, 'Geography', 2),
(64, 20, 'Geography', 2),
(65, 8, 'Geography', 2),
(66, 22, 'Science', 4),
(67, 23, 'History', 0),
(68, 6, 'History', 0),
(69, 6, 'History', 6),
(70, 14, 'Science', 2),
(71, 28, 'History', 5),
(72, 24, 'Science', 1),
(73, 27, 'Science', 5),
(74, 16, 'Math', 3),
(75, 20, 'Geography', 1),
(76, 24, 'Math', 1),
(77, 22, 'Geography', 2),
(78, 9, 'Math', 0),
(79, 17, 'History', 3),
(80, 28, 'Geography', 4),
(81, 11, 'Geography', 3),
(82, 27, 'Geography', 6),
(83, 21, 'History', 4),
(84, 30, 'Geography', 6),
(85, 25, 'Math', 3),
(86, 23, 'English', 2),
(87, 29, 'Science', 0),
(91, 26, 'History', 6),
(92, 17, 'Geography', 4),
(93, 20, 'English', 2),
(94, 8, 'Geography', 1),
(95, 27, 'Geography', 4),
(96, 25, 'Math', 5),
(97, 17, 'Science', 5),
(98, 14, 'Geography', 6),
(99, 13, 'Geography', 5),
(100, 27, 'Math', 5),
(101, 25, 'Science', 1),
(102, 25, 'English', 5),
(103, 3, 'Geography', 4),
(104, 6, 'Math', 4),
(105, 29, 'Geography', 6),
(106, 27, 'Science', 0),
(107, 14, 'Math', 4),
(108, 22, 'Science', 3),
(109, 23, 'English', 4),
(110, 27, 'Science', 1),
(111, 20, 'English', 0),
(112, 2, 'Math', 0),
(113, 4, 'English', 2),
(114, 4, 'Math', 4),
(115, 27, 'English', 4),
(116, 19, 'Geography', 0),
(117, 16, 'English', 4),
(118, 10, 'History', 2),
(122, 30, 'Geography', 6),
(123, 17, 'Math', 3),
(124, 16, 'Geography', 0),
(125, 28, 'English', 2),
(126, 2, 'Math', 1),
(127, 30, 'Math', 0),
(128, 16, 'Science', 4),
(129, 22, 'History', 4),
(130, 24, 'Math', 5),
(131, 4, 'Geography', 4),
(132, 15, 'Math', 4),
(133, 13, 'Math', 4),
(134, 15, 'Science', 3),
(135, 16, 'Math', 1),
(136, 18, 'English', 2),
(137, 7, 'Geography', 4),
(138, 23, 'History', 2),
(139, 27, 'Math', 1),
(140, 15, 'History', 2),
(141, 24, 'History', 0),
(142, 11, 'English', 4),
(143, 18, 'History', 0),
(144, 28, 'Science', 5),
(145, 10, 'Math', 0),
(146, 16, 'Science', 4),
(147, 27, 'Science', 6),
(148, 12, 'Geography', 1),
(149, 10, 'Geography', 4);

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `firstname` varchar(30) NOT NULL,
  `lastname` varchar(30) NOT NULL,
  `email` varchar(30) NOT NULL,
  `login` varchar(30) NOT NULL,
  `password` varchar(50) NOT NULL,
  `is_admin` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Zrzut danych tabeli `users`
--

INSERT INTO `users` (`id`, `firstname`, `lastname`, `email`, `login`, `password`, `is_admin`) VALUES
(1, 'max', 'klima', 'maxeklima@gmail.com', 'maxek', 'maksiu26', 1),
(2, 'Jan', 'Kowalski', 'kowalski.jan@gmail.com', 'janek', 'haslo123', 0),
(3, 'Michael', 'Johnson', 'michael.johnson@example.com', 'michaeljohnson', 'randompassword3', 0),
(4, 'Emily', 'Williams', 'emily.williams@example.com', 'emilywilliams', 'randompassword4', 0),
(5, 'Daniel', 'Brown', 'daniel.brown@example.com', 'danielbrown', 'randompassword5', 0),
(6, 'Olivia', 'Jones', 'olivia.jones@example.com', 'oliviajones', 'randompassword6', 0),
(7, 'William', 'Miller', 'william.miller@example.com', 'williammiller', 'randompassword7', 0),
(8, 'Sophia', 'Davis', 'sophia.davis@example.com', 'sophiadavis', 'randompassword8', 0),
(9, 'James', 'Garcia', 'james.garcia2@example.com', 'jamesgarcia', 'randompassword9', 0),
(10, 'Ava', 'Rodriguez', 'ava.rodriguez@example.com', 'avarodriguez', 'randompassword10', 0),
(11, 'Logan', 'Martinez', 'logan.martinez@example.com', 'loganmartinez', 'randompassword11', 0),
(12, 'Isabella', 'Hernandez', 'isabella.hernandez@example.com', 'isabellahernandez', 'randompassword12', 0),
(13, 'Benjamin', 'Lopez', 'benjamin.lopez@example.com', 'benjaminlopez', 'randompassword13', 0),
(14, 'Mia', 'Gonzalez', 'mia.gonzalez@example.com', 'miagonzalez', 'randompassword14', 0),
(15, 'Elijah', 'Wilson', 'elijah.wilson@example.com', 'elijahwilson', 'randompassword15', 0),
(16, 'Avery', 'Anderson', 'avery.anderson@example.com', 'averyanderson', 'randompassword16', 0),
(17, 'Layla', 'Thomas', 'layla.thomas@example.com', 'laylathomas', 'randompassword17', 0),
(18, 'test', 'test', 'test@gmail.com', 'testlogin', 'randompassword18', 0),
(19, 'Scarlett', 'Moore', 'scarlett.moore@example.com', 'scarlettmoore', 'randompassword19', 0),
(20, 'Gabriel', 'Jackson', 'gabriel.jackson@example.com', 'gabrieljackson', 'randompassword20', 0),
(21, 'Ethan', 'Harris', 'ethan.harris@example.com', 'ethanharris', 'randompassword21', 0),
(22, 'Amelia', 'Clark', 'amelia.clark@example.com', 'ameliaclark', 'randompassword22', 0),
(23, 'Alexander', 'Lewis', 'alexander.lewis@example.com', 'alexanderlewis', 'randompassword23', 0),
(24, 'h', 'h', 'h', 'h', 'randompassword24', 0),
(25, 'Ryan', 'Scott', 'ryan.scott@example.com', 'ryanscott', 'randompassword25', 0),
(26, 'Aria', 'Green', 'aria.green@example.com', 'ariagreen', 'randompassword26', 0),
(27, 'Carter', 'Hill', 'carter.hill@example.com', 'carterhill', 'randompassword27', 0),
(28, 'Luna', 'Baker', 'luna.baker@example.com', 'lunabaker', 'randompassword28', 0),
(29, 'Luke', 'Gomez', 'luke.gomez@example.com', 'lukegomez', 'randompassword29', 0),
(30, 'Chloe', 'Ward', 'chloe.ward@example.com', 'chloeward', 'randompassword30', 0);

--
-- Indeksy dla zrzutów tabel
--

--
-- Indeksy dla tabeli `announcements`
--
ALTER TABLE `announcements`
  ADD PRIMARY KEY (`id`);

--
-- Indeksy dla tabeli `grades`
--
ALTER TABLE `grades`
  ADD PRIMARY KEY (`id`),
  ADD KEY `student_id` (`student_id`);

--
-- Indeksy dla tabeli `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT dla zrzuconych tabel
--

--
-- AUTO_INCREMENT dla tabeli `announcements`
--
ALTER TABLE `announcements`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT dla tabeli `grades`
--
ALTER TABLE `grades`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=150;

--
-- AUTO_INCREMENT dla tabeli `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;

--
-- Ograniczenia dla zrzutów tabel
--

--
-- Ograniczenia dla tabeli `grades`
--
ALTER TABLE `grades`
  ADD CONSTRAINT `grades_ibfk_1` FOREIGN KEY (`student_id`) REFERENCES `users` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
