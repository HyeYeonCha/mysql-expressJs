DROP DATABASE IF EXISTS chat;
CREATE DATABASE chat;
USE chat;

CREATE TABLE `users` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `name` varchar(255)
  );

CREATE TABLE `messages` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `text` varchar(255),
  `roomname` varchar(255)
  );

ALTER TABLE `messages` ADD userId int;
ALTER TABLE `messages` ADD FOREIGN KEY (`userId`) REFERENCES `users` (`id`);