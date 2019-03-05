-- ---
-- Globals
-- ---

-- SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
-- SET FOREIGN_KEY_CHECKS=0;

-- ---
-- Table 'Products'
-- 
-- ---

DROP TABLE IF EXISTS `Products`;
		
CREATE TABLE `Products` (
  `itemId` INTEGER NOT NULL AUTO_INCREMENT,
  `companyName` CHAR(50) NOT NULL,
  `productName` CHAR(50) NULL,
  PRIMARY KEY (`itemId`)
);

-- ---
-- Table 'Reviews'
-- 
-- ---

DROP TABLE IF EXISTS `Reviews`;
		
CREATE TABLE `Reviews` (
  `productId` INTEGER NOT NULL AUTO_INCREMENT,
  `rating` INTEGER NOT NULL,
  `title` CHAR(50) NOT NULL,
  `text` MEDIUMTEXT NULL DEFAULT NULL,
  `recommend` BOOLEAN NOT NULL,
  `name` CHAR(30) NULL DEFAULT NULL,
  `fit` INTEGER NULL DEFAULT NULL,
  `itemId` INTEGER NULL DEFAULT NULL,
  `helpful` INTEGER NULL DEFAULT NULL,
  `notHelpful` INTEGER NULL DEFAULT NULL,
  `flag` BOOLEAN NULL DEFAULT NULL,
  `createdAt` DATE NULL DEFAULT NULL,
  PRIMARY KEY (`productId`)
);

-- ---
-- Table Properties
-- ---

-- ALTER TABLE `Products` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `Reviews` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- ---
-- Test Data
-- ---

-- INSERT INTO `Products` (`itemId`,`companyName`,`productName`) VALUES
-- ('','','');
-- INSERT INTO `Reviews` (`productId`,`rating`,`title`,`text`,`recommend`,`name`,`fit`,`itemId`,`helpful`,`notHelpful`,`flag`,`createdAt`) VALUES
-- ('','','','','','','','','','','','');