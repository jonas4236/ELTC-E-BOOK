-- MySQL dump 10.13  Distrib 8.0.38, for Linux (x86_64)
--
-- Host: localhost    Database: eltc
-- ------------------------------------------------------
-- Server version	8.0.41-0ubuntu0.24.10.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `books`
--

DROP TABLE IF EXISTS `books`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `books` (
  `id` int NOT NULL AUTO_INCREMENT,
  `book_name` varchar(70) DEFAULT NULL,
  `book_detail` longtext,
  `book_index` longtext,
  `pdf_ebook` longtext,
  `book_front` varchar(255) DEFAULT NULL,
  `book_back` varchar(255) DEFAULT NULL,
  `book_price` int DEFAULT NULL,
  `best_sell` varchar(10) DEFAULT NULL,
  `best_trend` varchar(10) DEFAULT NULL,
  `book_develop` varchar(10) DEFAULT NULL,
  `book_manage` varchar(10) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `books`
--

LOCK TABLES `books` WRITE;
/*!40000 ALTER TABLE `books` DISABLE KEYS */;
INSERT INTO `books` VALUES (1,'สู้ดิวะ','บทเรียนล้ำค่าจากคุณหมอผู้เป็นมะเร็งระยะสุดท้าย ซึ่งค้นพบความหมายของการมีชีวิตอยู่\n\nผู้เขียน กฤตไท ธนสมบัติกุล\n\n','เนื้อหาโดยสังเขป : สู้ดิวะ\n\n\"ผู้ป่วยมะเร็งปอดระยะสุดท้าย และนี่คือเรื่องราวของผมครับ\"\n\n    ผลงานทรงพลังจากเพจ \"สู้ดิวะ\" ของ \"คุณหมอกฤตไท ธนสมบัติกุล\" แนะนำตัวไว้เช่นนี้...นี่คือหนังสือบอกเล่าเรื่องราวชีวิตจริง ที่จะทำให้คุณหันกลับมามองชีวิตตัวเองด้วยสายตาที่แตกต่างไปจากเดิม จัดลำดับความสำคัญสิ่งต่าง ๆ ในชีวิตใหม่ มองเห็นคุณค่าของลมหายใจ มีชีวิตที่มีความหมาย และสุขง่ายกว่าเดิม เรื่องราวจากเจ้าของเพจยอดนิยมที่มีผู้อ่านได้รับแรงบันดาลใจนับแสน ด้วยการเล่าเรื่องที่จริงใจ เรียบง่าย และสั่นหัวใจ ซึ่งถูกเขียนขึ้นในช่วงเวลาที่ชีวิตเข้มข้นและเปราะบางที่สุด นี่คือหนังสือทรงพลังที่พร้อมจะเปลี่ยนชีวิตคุณ...\n\n','https://drive.google.com/file/d/1lcerywYLMOnit4JxcF3yLjPfmRHTqxey/view?usp=sharing','https://mp-static.se-ed.com/physical/cover/i9g2cxedqfxtdhmvdyyn/image/vfhxv375','https://mp-static.se-ed.com/physical/galleries/i9g2cxedqfxtdhmvdyyn/zbe1jb2d1oa8fozy1iah/image/nn1kiouy',195,'1','1','1','0'),(2,'Atomic Habits เพราะชีวิตดีได้กว่าที่เป็น','รายละเอียดสินค้า\n\nบทพิสูจน์ที่เปลี่ยนชีวิตคุณให้ดีขึ้นได้อย่างถาวร จากนักเขียนหนังสือขายดีของ New York Times ผู้เชี่ยวชาญระดับโลกด้านการสร้างนิสัย\n\nผู้เขียน James Clear (เจมส์ เคลียร์)\nผู้แปล ประพาฬรัตน์ ยงมานิตชัย','สารบัญ : Atomic Habits เพราะชีวิตดีได้กว่าที่เป็น\n\n- ปฐมบท เรื่องราวของผม\n- แนวคิดพื้นฐาน ทำไมการเปลี่ยนแปลงเล็กๆ จึงทำให้เกิดความแตกต่างอันน่าทึ่ง\n\nกฎข้อที่ 1 ทำให้เห็นชัดเจน\nกฎข้อที่ 2 ทำให้น่าดึงดูดใจ\nกฎข้อที่ 3 ทำให้เป็นเรื่องง่าย\nกฎข้อที่ 4 ทำให้น่าพึงพอใจ\n\n- เทคนิคที่ให้ผลแบบก้าวกระโดด : วิธีเปลี่ยนจากการเป็นคนนิสัยดีไปเป็นคนที่มีนิสัยดีเลิศ','https://drive.google.com/file/d/1lcerywYLMOnit4JxcF3yLjPfmRHTqxey/view?usp=sharing','https://mp-static.se-ed.com/physical/cover/g1tpcxr5mp0kgi29i65j/image/qxvlw2mh','https://mp-static.se-ed.com/physical/galleries/g1tpcxr5mp0kgi29i65j/kngp3uq7sr8sgdtdgp7p/image/9ar01h9n',228,'1','1','1','0'),(3,'จิตวิทยาสายดาร์ก','รายละเอียดสินค้า\n\nเมื่อคำพูดของคุณ สามารถควบคุมจิตใจคนได้\n\nผู้เขียน Hiro, Dr.\nผู้แปล ชลฎา เจริญวิริยะกุล','สารบัญ : จิตวิทยาสายดาร์ก\n\nบทที่ 1 แด่คนที่อ่าน \"คู่มือการพูด\" แล้ว แต่ยังไม่สามารถพูดชักจูงคนได้ \nบทที่ 2 เคล็ดลับ \"วิธีลวงให้คนอื่น\" ยินดีรับฟังเราทุกอย่าง\" \nบทที่ 3 เคล็ดลับ \"วิธีพูด\" ที่ช่วยให้เป็นที่ชื่นชอบของคนอื่น \nบทที่ 4 เคล็ดลับ \"วิธีสื่อสาร\" ที่ช่วยให้ควบคุมจิตใจคนตามต้องการ \nบทที่ 5 เคล็ดลับ \"วิธีฟัง\" ที่ช่วยให้กลายเป็นผู้เชี่ยวชาญด้านการสนทนา\nบทที่ 6 เคล็ดลับที่ช่วยให้พูดเก่งระดับสุดยอด \nบทที่ 7 ปรากฏการณ์ทางจิตวิทยาอันทรงพลังที่ห้ามนำไปใช้ในทางที่ผิดเด็ดขาด!','https://drive.google.com/file/d/1lcerywYLMOnit4JxcF3yLjPfmRHTqxey/view?usp=sharing','https://mp-static.se-ed.com/physical/cover/bgjm68zpft1pa373ftz6/image/2yu07nn5','https://mp-static.se-ed.com/physical/galleries/bgjm68zpft1pa373ftz6/o4umcggfzmve7d5hrmzw/image/n5mhnuic',250,'1','1','1','0'),(4,'วิชาคนตัวเล็ก : Small Rules','รายละเอียดสินค้า\n\nแด่คนธรรมดาที่ไม่ยอมให้โชคชะตามากำหนดชีวิต / 33 วิธีคิดที่จะช่วยให้คุณเอาชนะอุปสรรคที่ใหญ่เกินตัว\n\nผู้เขียน พูนลาภ อุทัยเลิศอรุณ','เนื้อหาโดยสังเขป : วิชาคนตัวเล็ก    Small Rules\n\n\"วิชาคนตัวเล็ก : Small Rules\" เล่มนี้ จะพาผู้อ่านไปพบกับ 33 วิธีคิดที่ช่วยให้คนตัวเล็ก ๆ สามารถเอาชนะอุปสรรคที่ใหญ่เกินตัว และเปลี่ยนความเล็กจ้อยของตัวเองให้กลายเป็นข้อได้เปรียบ บอกเล่าจากประสบการณ์ตรงที่ผ่านการล้มลุกและเรียนรู้นับครั้งไม่ถ้วน ของ \"พูนลาภ อุทัยเลิศอรุณ\" ชายผู้เบื้องหลังสำนักพิมพ์เล็ก ๆ ที่มียอดขายหนังสือมากกว่า 10 ล้านเล่ม ไม่ว่าจะเป็น วิ่งตามจังหวะของตัวเอง สู้แบบฮันนีแบดเจอร์ จงขอบคุณข้อจำกัด เปล่งประกายจากในมุมมืด ฝึกซ้อมบนคู่แข่ง วิธีคิดของคนที่ฆ่าไม่ตาย เลิกมองคนเป็นวัตถุสิ่งของ นำด้วยคำถาม คิดแบบ \"แกะ\" และ \"หมาต้อนแกะ\" และอื่น ๆ อีกมากมาย ไม่ว่าคุณจะเป็นใคร หรืออยู่ในสถานการณ์แบบไหน หนังสือเล่มนี้จะมอบวิธีคิดที่ถูกต้องให้ เพื่อให้คุณก้าวไปข้างหน้าได้อย่างมั่นคงขึ้น ในยุคที่ทุกอย่างเปลี่ยนแปลงไปอย่างรวดเร็วเช่นทุกวันนี้','https://drive.google.com/file/d/1lcerywYLMOnit4JxcF3yLjPfmRHTqxey/view?usp=sharing','https://mp-static.se-ed.com/physical/cover/zpa1s8hrfn9rys7lbyuh/image/phh6l0sw','https://mp-static.se-ed.com/physical/galleries/zpa1s8hrfn9rys7lbyuh/29d1qiy9tlqd0vtcduei/image/axpswrrb',200,'1','1','1','0'),(5,'ช่างมันเถอะ! อีกไม่กี่ปีเราก็เป็นเถ้าธุลีกันหมดแล้ว','รายละเอียดสินค้า\n\nเคล็ดลับการใช้ชีวิตอย่างไม่เปลืองแรง สำหรับทุกคนที่พยายามอย่างหนักในทุกวัน / เขียนโดยจิตแพทย์ที่ได้รับความนิยมในญี่ปุ่น มีผู้ติดตามกว่า 100,000 คน\n\nผู้เขียน Fujino Tomoya (ฟุจิโนะ โทโมยะ)\nผู้แปล กมลวรรณ เพ็ญอร่าม\n\n','สารบัญ : ช่างมันเถอะ   อีกไม่กี่ปีเราก็เป็นเถ้าธุลีกันหมดแล้ว\n\nบทที่ 1 เริ่มจาก \"พักผ่อน\" ก่อนก็ได้\nบทที่ 2 มาใส่ใจ \"เรื่องของตัวเอง\" ให้มากขึ้นกันเถอะ\nบทที่ 3 เรื่องที่ \"เสียงของร่างกาย\" กำลังบอกเรา\nบทที่ 4 คำใบ้เรื่อง \"ความสัมพันธ์\" ที่เราไม่ต้องฝืนพยายามมากเกินไป\nบทที่ 5 เราจะมีความสุขด้วยตนเองก็ได้นี่นา','https://drive.google.com/file/d/1lcerywYLMOnit4JxcF3yLjPfmRHTqxey/view?usp=sharing','https://mp-static.se-ed.com/physical/cover/qhhich6votiaq2996ku8/image/mx840tpu','https://mp-static.se-ed.com/physical/galleries/qhhich6votiaq2996ku8/tv7bjptcbbnqr306t8q7/image/kwgd9gm6',200,'1','1','1','0'),(6,'ปีศาจตัวนั้น คือฉันเอง A Guide to Fight the Demons in My Heart','รายละเอียดสินค้า\n\nเพราะชีวิต คือบททดสอบที่ท้าทาย โลกเลยส่ง \"ปีศาจร้าย\" เข้ามาทดสอบเราเสมอ ปีศาจที่สร้างพลังลบตามหลอกหลอน คอยอยู่รอบตัว พยายามล่อลวง ปั่นหัวเราตลอดเวลา จนอดคิดไม่ได้ว่า บางที \"ปีศาจ\" อาจจะอยู่ในตัวเราเอง\n\nผู้เขียน บริษัท โอเพ่นดูเรียน จำกัด','\nสารบัญ : ปีศาจตัวนั้น คือฉันเอง A Guide to Fight the Demons in My Heart\n\nNo.1 ความรัก\nNo.2 ครอบครัว\nNo.3 มิตรภาพ\nNo.4 การเรียน\nNo.5 การทำงาน\nNo.6 ไม่พัฒนา\nNo.7 ไม่รักตัวเอง\nNo.8 ธุรกิจ\nNo.9 การเงิน\nNo.10 สังคม','https://drive.google.com/file/d/1lcerywYLMOnit4JxcF3yLjPfmRHTqxey/view?usp=sharing','https://mp-static.se-ed.com/physical/cover/5lsag1iic9oiwf3cqa4m/image/j3w6q2mc','https://mp-static.se-ed.com/physical/galleries/5lsag1iic9oiwf3cqa4m/kb02ywmsss90oi9xttum/image/a810gspv',379,'1','0','1','0'),(7,'Manifest : 7 ขั้นตอนสู่ทุกสิ่งที่ปรารถนา','รายละเอียดสินค้า\n\nคู่มือสำคัญสำหรับทุกคน ที่ปรารถนาจะรู้สึกถึงพลังภายในตัวเองมากขึ้นในชีวิต ด้วยการปฏิบัติตาม 7 ขั้นตอนง่าย ๆ เราจะเข้าใจศิลปะที่แท้จริงของการใช้จิตดลบันดาล และสร้างชีวิตที่เราเฝ้าฝันถึงมาตลอดได้\n\nผู้เขียน Roxie Nafousi (ร็อกซี นาฟูซี)\nผู้แปล ศรรวริศา เมฆไพบูลย์','สารบัญ : Manifest    7 ขั้นตอนสู่ทุกสิ่งที่ปรารถนา\n\nบทนำ\n - เส้นทางจิตดลบันดาลของฉัน\n - ศาสตร์แห่งจิตดลบันดาล\n - จักรวาล\n - จิตดลบันดาลกับร็อกซี : ชุมชน\n\nขั้นตอนที่ 1 : มองภาพให้ชัดเจน\nขั้นตอนที่ 2 : ขจัดความกลัวและความกังขา : บ่มเพาะและฝึกการรักตนเอง\nขั้นตอนที่ 3 : ปรับพฤติกรรม\nขั้นตอนที่ 4 : เอาชนะบททดสอบของจักรวาล\nขั้นตอนที่ 5 : โอบรับความสำนึกรู้คุณ (โดยปราศจากเงื่อนไข)\nขั้นตอนที่ 6 : เปลี่ยนความริษยาเป็นแรงบันดาลใจ\nขั้นตอนที่ 7 : ไว้วางใจในจักรวาล','https://drive.google.com/file/d/1lcerywYLMOnit4JxcF3yLjPfmRHTqxey/view?usp=sharing','https://mp-static.se-ed.com/physical/cover/m9sev7kvgwh74e9eobgs/image/982zv9eg','https://mp-static.se-ed.com/physical/galleries/m9sev7kvgwh74e9eobgs/tnius995sm3p2uuq2j3b/image/3k84xd0w',225,'1','0','1','0'),(8,'โชคดีที่มึงได้อ่าน','รายละเอียดสินค้า\n\n55 เรื่องจริงที่ไม่ต้องรอให้เจอกับตัว ถึงจะเข้าใจ\n\nผู้เขียน เกตุเสพย์สวัสดิ์ ปาลกะวงศ์ ณ อยุธยา (น้าเน็ก)','สารบัญ : โชคดีที่มึงได้อ่าน\n\nPart 1 หมวดความรัก\n01 : ความรักไม่ใช่รางวัลตอบแทนของความดี\n02 : จริงจังมากไปกลับกลายเป็นน่ากลัว \n03 : ความรักวัยรุ่นมันก็เป็นอย่างนี้แหละ \n04 : ไม่มีทางลัดสำหรับความรัก\n05 : รักแท้ ไม่ใช่แค่ลมปาก\n          ฯลฯ\n\n    Part 2 หมวดครอบครัว\n15 : แบกทุกคนจนลืมตัวเอง\n16 : กตัญญูอย่างไม่มีเงอนไข\n17 : อยู่ต่ออย่างไรในวันที่คนรักตายจากไป\n18 : นี่แหละชีวิตมันเป็นแบบนี้\n19 : เติมไฟให้ซิงเกิลมัม ลำพัง... แต่ไม่เดียวดาย\n          ฯลฯ\n\n    Part 3 หมวดเพื่อน\n24 : แด่ทุกคนที่โดนรังแก \n25 : อยู่โลกกว้างอย่าโลกแคบ \n26 : เกรงใจจะเสียการ สงสารจะฉิบหาย \n27 : เพื่อนสนิทขอคบกับกิ๊กเรา เอาไงดีวะเนี่ย \n28 : เป็นเพื่อนกันต้องถามกันได้สิวะ \n          ฯลฯ\n\n    Part 4 หมวดการทำงาน\n30 : เพื่อนร่วมงานไม่ดีจะหนีหรือสู้\n31 : วงจรชีวิตมนุษย์ฟรีแลนซ์ \n32 : ทำธุรกิจยุคนี้ พี่จะบอกว่า... \n33 : ความเปลี่ยนแปลง ไม่ได้น่ากลัวอย่างที่คิด \n34 : อย่าวางชีวิตบนความคิดของคนอื่น \n          ฯลฯ\n\n    Part 5 หมวดเป้าหมายชีวิต\n39 : \"เป้าหมายชีวิต\" คืออะไร \n40 : คุณค่าของสิ่งที่เรียกว่า \"ประสบการณ์\"\n41 : เรียนรู้เป็นพันครัง เพื่อความหวังครั้งที่พันหนึ่ง\n42 : อย่าใช้คนอื่นกำหนดมาตรฐานชีวิตเรา \n43 : ลังเลในชีวิต ลองฟัง \"ทฤษฎีประตูเลื่อน\"\n          ฯลฯ\n\n    Part 6 หมวดเบ็ดเตล็ด\n48 : \"เบญจเพส\" ไม่เชื่ออย่านับถือ\n49 : บางครั้ง... โดนโกงก็มีข้อดีนะ\n50 : สังคมเลวเพราะคนดีท้อแท้\n51 : อบอุ่นใจในคืนที่ท้อแท้\n52 : Top 3 หนังสือสุดโปรดของ \"น้าเน็ก\"\n          ฯลฯ','https://drive.google.com/file/d/1lcerywYLMOnit4JxcF3yLjPfmRHTqxey/view?usp=sharing','https://mp-static.se-ed.com/physical/cover/ijqmjo52uyk926e2x2gs/image/0sescypk','https://mp-static.se-ed.com/physical/galleries/ijqmjo52uyk926e2x2gs/fhp62f5v7b52b6p1bqv6/image/80k4vnfo',232,'1','0','1','0'),(9,'ใช้ AI ทำเงิน ทำงานแทน เพิ่มรายได้ 100 เท่า','รายละเอียดสินค้า\n\nไม่ได้สอนแค่วิธีใช้งาน แต่จะสอนให้คุณใช้มัน \"หาเงิน\" แทนเรา / เกินคุ้ม! พร้อม Video สอนแบบจับมือทำ\n\nผู้เขียน มาเซน อาลี ชาห์ (เซนเซ), พิริยกิตติ์ บุญจิรกิตติ์ (บอสเป็ก)','สารบัญ : ใช้ AI ทำเงิน ทำงานแทน เพิ่มรายได้ 100 เท่า\n\nบทที่ 0 ลายแทง AI สร้างงาน สร้างเงิน : จะใช้ AI ช่วยทำงานและหารายได้เพิ่มทางไหนได้บ้าง\nบทที่ 1 ล่องเรือสู่เกาะที่หนึ่ง \"Easy-Peasy Island\" : ใช้ AI ทำงานแทน เพิ่มรายได้แบบ Passive Income\nบทที่ 2 ผจญภัยต่อเกาะที่สอง \"Graphy Island\" : AI รังสรรค์งานศิลป์ ให้ขายดีแบบศิลปินระดับโลก\nบทที่ 3 มุ่งสู่ความท้าทายเกาะที่สาม \"Brandy Island\" : สร้างแบรนด์ให้เกิด ดังระเบิดด้วย AI\nบทที่ 4 เกาะลับ \"Prompty Ocean\" : ใช้ Prompt เป็นสะพานเชื่อมระหว่างมนุษย์และ AI\nบทที่ 5 Special Bonus แถมฟรี!!','https://drive.google.com/file/d/1lcerywYLMOnit4JxcF3yLjPfmRHTqxey/view?usp=sharing','https://mp-static.se-ed.com/physical/cover/1nyfknbl0pxeg2tmvray/image/199dn9g1','https://mp-static.se-ed.com/physical/galleries/1nyfknbl0pxeg2tmvray/wdctcm58er58eq59w7gl/image/y4e6711a',283,'0','0','0','1'),(10,'บริษัทตัวคนเดียว : ทำไมการคิดเล็กจึงเป็นโมเดลธุรกิจแห่งอนาคต','รายละเอียดสินค้า\n\nหากผู้อ่านกำลังหาวิธีทำให้อาชีพการงานส่งเสริมอิสรภาพและชีวิตส่วนตัว โดยปราศจากการเสียสละอย่างใดอย่างหนึ่งไป ก็ขอให้อ่านและตัดสินใจเปลี่ยนชีวิตได้... / แปลแล้วกว่า 16 ภาษาทั่วโลก\n\nผู้เขียน Paul Jarvis (พอล จาร์วิส)\nผู้แปล โชติกา โชติสรยุทธ์','สารบัญ : บริษัทตัวคนเดียว    ทำไมการคิดเล็กจึงเป็นโมเดลธุรกิจแห่งอนาคต\n\nบทนำ บริษัทตัวคนเดียวคืออะไร\nตอนที่ 1 เริ่มต้น\n - บทที่ 1 : บริษัทตัวคนเดียวคืออะไร\n - บทที่ 2 : เป้าหมาย คือการรักษาความเล็ก\n - บทที่ 3 : การบริหารจะต้องมีอะไรบ้าง\n - บทที่ 4 : การทำให้บริษัทที่ไม่เติบโตเติบโต\n\nตอนที่ 2 : สร้าง\n - บทที่ 5 : หากรอบความคิดที่เหมาะสม\n - บทที่ 6 : บุคลิกที่สำคัญ\n - บทที่ 7 : ลูกค้าคนเดียวคนนั้น\n    ฯลฯ\n\nตอนที่ 3 : รักษา\n - บทที่ 10 : ประโยชน์จากความเชื่อใจและการขยายให้เหมาะสม\n - บทที่ 11 : การเปิดตัวและปรับเปลี่ยนทีละนิด\n - บทที่ 12 : คุณค่าที่ซ่อนอยู่ในความสัมพันธ์\n - บทที่ 13 : การสร้างบริษัทตัวคนเดียว (ของผม)\n\nบทส่งท้าย : อย่าโตเลย\n - เล็กเกินกว่าจะล้มเหลว\n - นี่เป็นเพียงจุดเริ่มต้น','https://drive.google.com/file/d/1lcerywYLMOnit4JxcF3yLjPfmRHTqxey/view?usp=sharing','https://mp-static.se-ed.com/physical/cover/2nw9i3qufvdxd2ez7vym/image/kwvm6ok9','https://mp-static.se-ed.com/physical/galleries/2nw9i3qufvdxd2ez7vym/ddgw5549ayvtsci9m2vv/image/59bemv3i',251,'0','0','0','1'),(11,'All in on AI ชนะเกมธุรกิจ พิชิตด้วยเอไอ','รายละเอียดสินค้า\n\nถอดกลยุทธ์ AI ที่บริษัทระดับโลก ใช้เอาชนะคู่แข่งแบบหมดทางสู้ / A Wall Street Journal Bestseller\n\nผู้เขียน Thomas H. Davenport (โทมัส เอช. เดเวนพอร์ท), Nitin Mittal (นิติน มิตทัล)\nผู้แปล เอกสิทธิ์ พัชรวงศ์ศักดา, ดร.','สารบัญ : All in on AI ชนะเกมธุรกิจ พิชิตด้วยเอไอ\n\n0 Introduction : AI First สมรภูมิใหม่ของการแข่งขันทางธุรกิจ\n1 What Does IT Mean to be AI Fueled? : การเป็นองค์กรที่ใช้ AI เป็นพลังขับเคลื่อนหลัก\n2 The Human Side : ปลดล็อกศักยภาพของ AI ผ่านพลังของมนุษย์\n3 Strategy : เลือกกลยุทธ์ AI เป็น เห็นโอกาสชนะ\n4 Technology and Data : ดัน AI ไปให้สุดด้วยเทคโนโลยีและข้อมูล\n5 Capabilities การใช้ AI เพื่อการยกระดับขีดความสามารถทางธุรกิจ\n6 Industry Use Cases : กรณีศึกษาในภาคอุตสาหกรรม\n7 Becoming AI Fueled : ก้าวสู่องค์กรที่ขับเคลื่อนด้วย AI','https://drive.google.com/file/d/1lcerywYLMOnit4JxcF3yLjPfmRHTqxey/view?usp=sharing','https://mp-static.se-ed.com/physical/cover/dg3079jiand8i6nr9ws9/image/3rrk3stu','https://mp-static.se-ed.com/physical/galleries/dg3079jiand8i6nr9ws9/cn4eeo8vb9kbti7p4awm/image/n6ep5vj8',400,'0','0','0','1'),(12,'การควบคุมคุณภาพ : Quality Control','รายละเอียดสินค้า\n\nความหมายและมิติของคุณภาพ การควบคุมและการปรับปรุงคุณภาพ เครื่องมือควบคุมคุณภาพ 7 อย่าง แผนภูมิควบคุมสำหรับข้อมูลแบบหน่วยวัดและหน่วยนับ การวิเคราะห์สมรรถภาพกระบวนการผลิตและเครื่องจักร\n\nผู้เขียน ศุภชัย นาทะพันธ์ รศ.','สารบัญ : การควบคุมคุณภาพ    Quality Control\n\nบทที่ 1 บทนำสู่คุณภาพ\nบทที่ 2 พื้นฐานของสถิติ\nบทที่ 3 เครื่องมือควบคุมคุณภาพ 7 อย่าง\nบทที่ 4 แผนภูมิควบคุมสำหรับข้อมูลแบบหน่วยวัด\nบทที่ 5 แผนภูมิควบคุมสำหรับข้อมูลแบบหน่วยนับ\nบทที่ 6 การวิเคราะห์สมรรถภาพกระบวนการและเครื่องจักร\nบทที่ 7 การชักสิ่งตัวอย่างเพื่อการยอมรับ\nบทที่ 8 ความน่าเชื่อถือ\nบทที่ 9 การจัดการคุณภาพ','https://drive.google.com/file/d/1lcerywYLMOnit4JxcF3yLjPfmRHTqxey/view?usp=sharing','https://mp-static.se-ed.com/physical/cover/v6r3evk6fwghzdlsz58q/image/bomdthsx','https://mp-static.se-ed.com/physical/galleries/v6r3evk6fwghzdlsz58q/64rlmtorf7tr0k5oi9tv/image/r0snpfj9',280,'0','1','0','1'),(13,'Leadership Mentor พี่เลี้ยงผู้นำ ภาคปฏิบัติ','รายละเอียดสินค้า\n\nหนังสือเล่มนี้เหมาะมากสำหรับผู้นำระดับต้น หรือหัวหน้างานระดับต้น ใช้เป็นแนวทางปฏิบัติแบบเป็นรูปธรรมในการปฏิบัติ\n\nผู้เขียน เกรียงศักดิ์ นิรัติพัฒนะศัย\n\n','สารบัญ : Leadership Mentor พี่เลี้ยงผู้นำ ภาคปฏิบัติ\n\nบทนํา\nภาพรวมของเนื้อหา\n\nPART 1 Leadership Framework บทบาทในภาพใหญ่ของผู้นำ\n - 1 คำอธิบาย Leadership Framework\n - 2 พัฒนาทักษะการสังเกต\n - 3 พัฒนาทักษะการถาม\n - 4 พัฒนาทักษะการฟัง\n    ฯลฯ\n\nPART 2 Leadership Guiding Principles หลักคิดสำหรับผู้นำ\n - 1 ตำแหน่ง บทบาท และการจัดสรรเวลา\n - 2 การวางแผน\n - 3 การบริหารความคาดหวังของผู้มีส่วนได้ส่วนเสีย\n - 4 เป็นหัวหน้าครั้งแรกและไม่เคยเตรียมตัวมาก่อน\n    ฯลฯ\n\nPART 3 Leadership Duties บทบาทหน้าที่หลักของผู้บริหารที่มีต่อทีมงาน\n - 1 ถ่ายทอดนโยบายได้ตรงเจตนารมณ์\n - 1.1 บริหารงานแบบมีวิสัยทัศน์\n - 2 สื่อสารให้ทีมเข้าใจในการเปลี่ยนแปลง\n - 2.1 การมีส่วนร่วมหรือเผด็จการทางความคิด\n    ฯลฯ\n\nบทสรุป\nบูรณาการ Generative AI','https://drive.google.com/file/d/1lcerywYLMOnit4JxcF3yLjPfmRHTqxey/view?usp=sharing','https://mp-static.se-ed.com/physical/cover/8x5z38s1v3luclvup2gs/image/kul42a7l','https://mp-static.se-ed.com/physical/galleries/8x5z38s1v3luclvup2gs/tts6e0xu4jvq6cu3klvz/image/b7o0rbto',285,'0','1','0','1'),(14,'การจัดการนวัตกรรม','รายละเอียดสินค้า\n\nนำเสนอทฤษฎีด้านนวัตกรรมที่ได้รับการยอมรับทั่วโลก ผสานกับแนวทางปฏิบัติในการนำความรู้ไปใช้จริง ผ่านเครื่องมือ เทคนิคและกรณีศึกษาที่เข้าใจง่าย สามารถนำไปปรับใช้และประยุกต์ในองค์กรได้อย่างแท้จริง\n\nผู้เขียน ชาคริต พิชญางกูร, สุชาติ ไตรภพสกุล','\nสารบัญ : การจัดการนวัตกรรม\n\nส่วนที่ 1 ความหมายและความสำคัญของนวัตกรรม\n - บทที่ 1 แนวคิดเกี่ยวกับนวัตกรรม\n - บทที่ 2 ประเภทของนวัตกรรม\n - บทที่ 3 แหล่งที่มาของนวัตกรรม\n\nส่วนที่ 2 พัฒนาการของนวัตกรรม\n - บทที่ 4 ทฤษฎีนวัตกรรม\n - บทที่ 5 กลยุทธ์นวัตกรรม\n\nส่วนที่ 3การจัดการนวัตกรรม\n - บทที่ 6 ความรู้พื้นฐานทรัพท์สินทางปัญญา\n - บทที่ 7 กระบวนการสร้างนวัตกรรม\n - บทที่ 8 การส่งเสริมวัฒนธรรมนวัตกรรมในองค์กร\n - บทที่ 9 ระบบนวัตกรรม','https://drive.google.com/file/d/1lcerywYLMOnit4JxcF3yLjPfmRHTqxey/view?usp=sharing','https://mp-static.se-ed.com/physical/cover/pn3uz3vdb8n72s89255v/image/y10wcdlu','https://mp-static.se-ed.com/physical/galleries/pn3uz3vdb8n72s89255v/k4fl0axb936ckt6maqfe/image/ua2lj4mc',290,'0','1','0','1'),(15,'เส้นทางไต่ฝัน : The Ride of a Lifetime','รายละเอียดสินค้า\n\nนี่ไม่ใช่บทเรียนสำหรับบรรดาซีอีโอที่มุ่งมั่นทะเยอทะยานเท่านั้น แต่ยังมีไว้สำหรับใครก็ตามที่อยากลดความกลัวและเพิ่มความมั่นใจในตัวเอง ขณะเดินอยู่บนเส้นทางชีวิตการทำงาน หรือแม้แต่ในชีวิตส่วนตัว\n\nผู้เขียน Robert Iger (โรเบิร์ต ไอเกอร์)\nผู้แปล พรรณผกา รุ่งเรือง','สารบัญ : เส้นทางไต่ฝัน    The Ride of a Lifetime\n\nPart 1 \nเรียนรู้\nบทที่ 1 เริ่มจากจุดต่ำสุด\nบทที่ 2 เดิมพันกับความสามารถ\nบทที่ 3 จงรู้ตัวว่าคุณไม่รู้อะไรบ้าง (และจงเชื่อมั่นในสิ่งที่ทำ)\nบทที่ 4 ดีสนีย์ก้าวเข้ามา\nบทที่ 5 เบอร์ 2\nบทที่ 6 สิ่งดี ๆ เกิดขึ้นได้เสมอ\nบทที่ 7 มันคือเรื่องของอนาคต\n\n    Part 2 \nการเป็นผู้นำ\nบทที่ 8 พลังแห่งความเคารพ\nบทที่ 9 ดีสนีย์-พิกซาร์ และหนทางใหม่สู่อนาคต\nบทที่ 10 มาร์เวลกับความเสี่ยงครั้งใหญ่ที่คุ้มค่าที่สุด\nบทที่ 11 สตาร์ วอร์ส\nบทที่ 12 ถ้าไม่คิดใหม่ทำใหม่ คุณก็ตาย\nบทที่ 13 ไม่มีราคาสำหรับเกียรติและศักดิ์ศรี\nบทที่ 14 ค่านิยมหลักขององค์กร\n\n    ภาคผนวก : บทเรียนเพื่อใช้ \"นำทาง\" ผู้อื่น','https://drive.google.com/file/d/1lcerywYLMOnit4JxcF3yLjPfmRHTqxey/view?usp=sharing','https://mp-static.se-ed.com/physical/cover/o71vm8rrmk1cmilt4fc3/image/baf4x6us','https://mp-static.se-ed.com/physical/galleries/o71vm8rrmk1cmilt4fc3/upwc91wrux6l00red684/image/qf1jnez9',242,'0','1','0','1'),(16,'เจาะจุดแข็ง 2.0 : Strengths Finder 2.0','รายละเอียดสินค้า\n\nหนังสือเล่มนี้เต็มไปด้วยกลยุทธ์นับร้อยเพื่อการนำจุดแข็งของคุณมาใช้ให้เป็นประโยชน์ ซึ่งจะเปลี่ยนวิธีที่คุณมองตัวเองและโลกรอบตัวคุณไปตลอดกาล\n\nผู้เขียน Tom Rath (ทอม แรธ)','สารบัญ : เจาะจุดแข็ง 2 0    Strengths Finder 2 0 (ปกแข็ง)\n\nเจาะจุดแข็ง : ยุคต่อไป\n - ส่วนที่ 1 การค้นหาจุดแข็งของคุณ - บทนำ\n - ส่วนที่ 2 การใช้จุดแข็งของคุณ\n\nคุณสมบัติ 34 ข้อและแนวความคิดในการปฏิบัติ\n - ผู้บรรลุเป้าหมาย (Achiever)\n - นักริเริ่มทำงาน (Activator)\n - ผู้มีความสามารถในการปรับตัว (Adaptability)\n - นักวิเคราะห์ (Analytical)\n - นักจัดการ (Arranger)\n    ฯลฯ','https://drive.google.com/file/d/1lcerywYLMOnit4JxcF3yLjPfmRHTqxey/view?usp=sharing','https://mp-static.se-ed.com/physical/cover/93pvdxbkuchos3zhjxq5/image/2eixjml6','https://mp-static.se-ed.com/physical/galleries/93pvdxbkuchos3zhjxq5/9dv8kruyl5e0i7xg6v4t/image/mgof5t6r',387,'0','1','0','1');
/*!40000 ALTER TABLE `books` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `enroll`
--

DROP TABLE IF EXISTS `enroll`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `enroll` (
  `id` int NOT NULL AUTO_INCREMENT,
  `userId` int DEFAULT NULL,
  `bookId` int DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `enroll`
--

LOCK TABLES `enroll` WRITE;
/*!40000 ALTER TABLE `enroll` DISABLE KEYS */;
INSERT INTO `enroll` VALUES (1,1,1),(7,1,4),(8,1,5);
/*!40000 ALTER TABLE `enroll` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `fullname` varchar(50) DEFAULT NULL,
  `phone` varchar(45) DEFAULT NULL,
  `age` varchar(45) DEFAULT NULL,
  `email` varchar(45) DEFAULT NULL,
  `gender` varchar(45) DEFAULT NULL,
  `coin` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'Thanakorn sangmee','12345','22','bossview59@gmail.com','Male','600'),(6,'thana','12345','21','bossview59v2@gmail.com','ชาย','100');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-02-01 20:22:55
