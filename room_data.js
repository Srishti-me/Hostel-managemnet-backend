const db = require("./db");
async function seedData() {
  await db.query(`
    INSERT INTO Rooms (room_number, capacity, floor, hostel_block, availability)
    VALUES
   
    (103, 2, 1, 'A', 'Available'),
    (104, 2, 1, 'A', 'Available'),
    (105, 2, 1, 'A', 'Available'),
    (106, 2, 1, 'A', 'Available'),
    (107, 2, 1, 'A', 'Available'),
    (108, 2, 1, 'A', 'Available'),
    (109, 2, 1, 'A', 'Available'),
    (110, 2, 1, 'A', 'Available'),
    (201, 2, 2, 'A', 'Available'),
    (202, 2, 2, 'A', 'Available'),
    (203, 2, 2, 'A', 'Available'),
    (204, 2, 2, 'A', 'Available'),
    (205, 2, 2, 'A', 'Available'),
    (206, 2, 2, 'A', 'Available'),
    (207, 2, 2, 'A', 'Available'),
    (208, 2, 2, 'A', 'Available'),
    (209, 2, 2, 'A', 'Available'),
    (210, 2, 2, 'A', 'Available'),
    (301, 2, 3, 'A', 'Available'),
    (302, 2, 3, 'A', 'Available'),
    (303, 2, 3, 'A', 'Available'),
    (304, 2, 3, 'A', 'Available'),
    (305, 2, 3, 'A', 'Available'),
    (306, 2, 3, 'A', 'Available'),
    (307, 2, 3, 'A', 'Available'),
    (308, 2, 3, 'A', 'Available'),
    (309, 2, 3, 'A', 'Available'),
    (310, 2, 3, 'A', 'Available'),
    (401, 2, 4, 'A', 'Available'),
    (402, 2, 4, 'A', 'Available'),
    (403, 2, 4, 'A', 'Available'),
    (404, 2, 4, 'A', 'Available'),
    (405, 2, 4, 'A', 'Available'),
    (406, 2, 4, 'A', 'Available'),
    (407, 2, 4, 'A', 'Available'),
    (408, 2, 4, 'A', 'Available'),
    (409, 2, 4, 'A', 'Available'),
    (410, 2, 4, 'A', 'Available'),
    (501, 2, 5, 'A', 'Available'),
    (502, 2, 5, 'A', 'Available'),
    (503, 2, 5, 'A', 'Available'),
    (504, 2, 5, 'A', 'Available'),
    (505, 2, 5, 'A', 'Available'),
    (506, 2, 5, 'A', 'Available'),
    (507, 2, 5, 'A', 'Available'),
    (508, 2, 5, 'A', 'Available'),
    (509, 2, 5, 'A', 'Available'),
    (510, 2, 5, 'A', 'Available'),
    (601, 2, 6, 'A', 'Available'),
    (602, 2, 6, 'A', 'Available'),
    (603, 2, 6, 'A', 'Available'),
    (604, 2, 6, 'A', 'Available'),
    (605, 2, 6, 'A', 'Available'),
    (606, 2, 6, 'A', 'Available'),
    (607, 2, 6, 'A', 'Available'),
    (608, 2, 6, 'A', 'Available'),
    (609, 2, 6, 'A', 'Available'),
    (610, 2, 6, 'A', 'Available'),
    (101, 2, 1, 'B', 'Available'),
    (102, 2, 1, 'B', 'Available'),
    (103, 2, 1, 'B', 'Available'),
    (104, 2, 1, 'B', 'Available'),
    (105, 2, 1, 'B', 'Available'),
    (106, 2, 1, 'B', 'Available'),
    (107, 2, 1, 'B', 'Available'),
    (108, 2, 1, 'B', 'Available'),
    (109, 2, 1, 'B', 'Available'),
    (110, 2, 1, 'B', 'Available'),
    (201, 2, 2, 'B', 'Available'),
    (202, 2, 2, 'B', 'Available'),
    (203, 2, 2, 'B', 'Available'),
    (204, 2, 2, 'B', 'Available'),
    (205, 2, 2, 'B', 'Available'),
    (206, 2, 2, 'B', 'Available'),
    (207, 2, 2, 'B', 'Available'),
    (208, 2, 2, 'B', 'Available'),
    (209, 2, 2, 'B', 'Available'),
    (210, 2, 2, 'B', 'Available'),
    (301, 2, 3, 'B', 'Available'),
    (302, 2, 3, 'B', 'Available'),
    (303, 2, 3, 'B', 'Available'),
    (304, 2, 3, 'B', 'Available'),
    (305, 2, 3, 'B', 'Available'),
    (306, 2, 3, 'B', 'Available'),
    (307, 2, 3, 'B', 'Available'),
    (308, 2, 3, 'B', 'Available'),
    (309, 2, 3, 'B', 'Available'),
    (310, 2, 3, 'B', 'Available'),
    (401, 2, 4, 'B', 'Available'),
    (402, 2, 4, 'B', 'Available'),
    (403, 2, 4, 'B', 'Available'),
    (404, 2, 4, 'B', 'Available'),
    (405, 2, 4, 'B', 'Available'),
    (406, 2, 4, 'B', 'Available'),
    (407, 2, 4, 'B', 'Available'),
    (408, 2, 4, 'B', 'Available'),
    (409, 2, 4, 'B', 'Available'),
    (410, 2, 4, 'B', 'Available'),
    (501, 2, 5, 'B', 'Available'),
    (502, 2, 5, 'B', 'Available'),
    (503, 2, 5, 'B', 'Available'),
    (504, 2, 5, 'B', 'Available'),
    (505, 2, 5, 'B', 'Available'),
    (506, 2, 5, 'B', 'Available'),
    (507, 2, 5, 'B', 'Available'),
    (508, 2, 5, 'B', 'Available'),
    (509, 2, 5, 'B', 'Available'),
    (510, 2, 5, 'B', 'Available'),
    (601, 2, 6, 'B', 'Available'),
    (602, 2, 6, 'B', 'Available'),
    (603, 2, 6, 'B', 'Available'),
    (604, 2, 6, 'B', 'Available'),
    (605, 2, 6, 'B', 'Available'),
    (606, 2, 6, 'B', 'Available'),
    (607, 2, 6, 'B', 'Available'),
    (608, 2, 6, 'B', 'Available'),
    (609, 2, 6, 'B', 'Available'),
    (610, 2, 6, 'B', 'Available'),
    (101, 2, 1, 'C', 'Available'),
    (102, 2, 1, 'C', 'Available'),
    (103, 2, 1, 'C', 'Available'),
    (104, 2, 1, 'C', 'Available'),
    (105, 2, 1, 'C', 'Available'),
    (106, 2, 1, 'C', 'Available'),
    (107, 2, 1, 'C', 'Available'),
    (108, 2, 1, 'C', 'Available'),
    (109, 2, 1, 'C', 'Available'),
    (110, 2, 1, 'C', 'Available'),
    (201, 2, 2, 'C', 'Available'),
    (202, 2, 2, 'C', 'Available'),
    (203, 2, 2, 'C', 'Available'),
    (204, 2, 2, 'C', 'Available'),
    (205, 2, 2, 'C', 'Available'),
    (206, 2, 2, 'C', 'Available'),
    (207, 2, 2, 'C', 'Available'),
    (208, 2, 2, 'C', 'Available'),
    (209, 2, 2, 'C', 'Available'),
    (210, 2, 2, 'C', 'Available'),
    (301, 2, 3, 'C', 'Available'),
    (302, 2, 3, 'C', 'Available'),
    (303, 2, 3, 'C', 'Available'),
    (304, 2, 3, 'C', 'Available'),
    (305, 2, 3, 'C', 'Available'),
    (306, 2, 3, 'C', 'Available'),
    (307, 2, 3, 'C', 'Available'),
    (308, 2, 3, 'C', 'Available'),
    (309, 2, 3, 'C', 'Available'),
    (310, 2, 3, 'C', 'Available'),
    (401, 2, 4, 'C', 'Available'),
    (402, 2, 4, 'C', 'Available'),
    (403, 2, 4, 'C', 'Available'),
    (404, 2, 4, 'C', 'Available'),
    (405, 2, 4, 'C', 'Available'),
    (406, 2, 4, 'C', 'Available'),
    (407, 2, 4, 'C', 'Available'),
    (408, 2, 4, 'C', 'Available'),
    (409, 2, 4, 'C', 'Available'),
    (410, 2, 4, 'C', 'Available'),
    (501, 2, 5, 'C', 'Available'),
    (502, 2, 5, 'C', 'Available'),
    (503, 2, 5, 'C', 'Available'),
    (504, 2, 5, 'C', 'Available'),
    (505, 2, 5, 'C', 'Available'),
    (506, 2, 5, 'C', 'Available'),
    (507, 2, 5, 'C', 'Available'),
    (508, 2, 5, 'C', 'Available'),
    (509, 2, 5, 'C', 'Available'),
    (510, 2, 5, 'C', 'Available'),
    (601, 2, 6, 'C', 'Available'),
    (602, 2, 6, 'C', 'Available'),
    (603, 2, 6, 'C', 'Available'),
    (604, 2, 6, 'C', 'Available'),
    (605, 2, 6, 'C', 'Available'),
    (606, 2, 6, 'C', 'Available'),
    (607, 2, 6, 'C', 'Available'),
    (608, 2, 6, 'C', 'Available'),
    (609, 2, 6, 'C', 'Available'),
    (610, 2, 6, 'C', 'Available'),
    (101, 2, 1, 'D', 'Available'),
    (102, 2, 1, 'D', 'Available'),
    (103, 2, 1, 'D', 'Available'),
    (104, 2, 1, 'D', 'Available'),
    (105, 2, 1, 'D', 'Available'),
    (106, 2, 1, 'D', 'Available'),
    (107, 2, 1, 'D', 'Available'),
    (108, 2, 1, 'D', 'Available'),
    (109, 2, 1, 'D', 'Available'),
    (110, 2, 1, 'D', 'Available'),
    (201, 2, 2, 'D', 'Available'),
    (202, 2, 2, 'D', 'Available'),
    (203, 2, 2, 'D', 'Available'),
    (204, 2, 2, 'D', 'Available'),
    (205, 2, 2, 'D', 'Available'),
    (206, 2, 2, 'D', 'Available'),
    (207, 2, 2, 'D', 'Available'),
    (208, 2, 2, 'D', 'Available'),
    (209, 2, 2, 'D', 'Available'),
    (210, 2, 2, 'D', 'Available'),
    (301, 2, 3, 'D', 'Available'),
    (302, 2, 3, 'D', 'Available'),
    (303, 2, 3, 'D', 'Available'),
    (304, 2, 3, 'D', 'Available'),
    (305, 2, 3, 'D', 'Available'),
    (306, 2, 3, 'D', 'Available'),
    (307, 2, 3, 'D', 'Available'),
    (308, 2, 3, 'D', 'Available'),
    (309, 2, 3, 'D', 'Available'),
    (310, 2, 3, 'D', 'Available'),
    (401, 2, 4, 'D', 'Available'),
    (402, 2, 4, 'D', 'Available'),
    (403, 2, 4, 'D', 'Available'),
    (404, 2, 4, 'D', 'Available'),
    (405, 2, 4, 'D', 'Available'),
    (406, 2, 4, 'D', 'Available'),
    (407, 2, 4, 'D', 'Available'),
    (408, 2, 4, 'D', 'Available'),
    (409, 2, 4, 'D', 'Available'),
    (410, 2, 4, 'D', 'Available'),
    (501, 2, 5, 'D', 'Available'),
    (502, 2, 5, 'D', 'Available'),
    (503, 2, 5, 'D', 'Available'),
    (504, 2, 5, 'D', 'Available'),
    (505, 2, 5, 'D', 'Available'),
    (506, 2, 5, 'D', 'Available'),
    (507, 2, 5, 'D', 'Available'),
    (508, 2, 5, 'D', 'Available'),
    (509, 2, 5, 'D', 'Available'),
    (510, 2, 5, 'D', 'Available'),
    (601, 2, 6, 'D', 'Available'),
    (602, 2, 6, 'D', 'Available'),
    (603, 2, 6, 'D', 'Available'),
    (604, 2, 6, 'D', 'Available'),
    (605, 2, 6, 'D', 'Available'),
    (606, 2, 6, 'D', 'Available'),
    (607, 2, 6, 'D', 'Available'),
    (608, 2, 6, 'D', 'Available'),
    (609, 2, 6, 'D', 'Available'),
    (610, 2, 6, 'D', 'Available'),
    (101, 2, 1, 'E', 'Available'),
(102, 2, 1, 'E', 'Available'),
(103, 2, 1, 'E', 'Available'),
(104, 2, 1, 'E', 'Available'),
(105, 2, 1, 'E', 'Available'),
(106, 2, 1, 'E', 'Available'),
(107, 2, 1, 'E', 'Available'),
(108, 2, 1, 'E', 'Available'),
(109, 2, 1, 'E', 'Available'),
(110, 2, 1, 'E', 'Available'),
(201, 2, 2, 'E', 'Available'),
(202, 2, 2, 'E', 'Available'),
(203, 2, 2, 'E', 'Available'),
(204, 2, 2, 'E', 'Available'),
(205, 2, 2, 'E', 'Available'),
(206, 2, 2, 'E', 'Available'),
(207, 2, 2, 'E', 'Available'),
(208, 2, 2, 'E', 'Available'),
(209, 2, 2, 'E', 'Available'),
(210, 2, 2, 'E', 'Available'),
(301, 2, 3, 'E', 'Available'),
(302, 2, 3, 'E', 'Available'),
(303, 2, 3, 'E', 'Available'),
(304, 2, 3, 'E', 'Available'),
(305, 2, 3, 'E', 'Available'),
(306, 2, 3, 'E', 'Available'),
(307, 2, 3, 'E', 'Available'),
(308, 2, 3, 'E', 'Available'),
(309, 2, 3, 'E', 'Available'),
(310, 2, 3, 'E', 'Available'),
(401, 2, 4, 'E', 'Available'),
(402, 2, 4, 'E', 'Available'),
(403, 2, 4, 'E', 'Available'),
(404, 2, 4, 'E', 'Available'),
(405, 2, 4, 'E', 'Available'),
(406, 2, 4, 'E', 'Available'),
(407, 2, 4, 'E', 'Available'),
(408, 2, 4, 'E', 'Available'),
(409, 2, 4, 'E', 'Available'),
(410, 2, 4, 'E', 'Available'),
(501, 2, 5, 'E', 'Available'),
(502, 2, 5, 'E', 'Available'),
(503, 2, 5, 'E', 'Available'),
(504, 2, 5, 'E', 'Available'),
(505, 2, 5, 'E', 'Available'),
(506, 2, 5, 'E', 'Available'),
(507, 2, 5, 'E', 'Available'),
(508, 2, 5, 'E', 'Available'),
(509, 2, 5, 'E', 'Available'),
(510, 2, 5, 'E', 'Available'),
(601, 2, 6, 'E', 'Available'),
(602, 2, 6, 'E', 'Available'),
(603, 2, 6, 'E', 'Available'),
(604, 2, 6, 'E', 'Available'),
(605, 2, 6, 'E', 'Available'),
(606, 2, 6, 'E', 'Available'),
(607, 2, 6, 'E', 'Available'),
(608, 2, 6, 'E', 'Available'),
(609, 2, 6, 'E', 'Available'),
(610, 2, 6, 'E', 'Available')




  `);
}

seedData();
