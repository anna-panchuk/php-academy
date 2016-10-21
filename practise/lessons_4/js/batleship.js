'use strict';

function batleship(cell1, cell2, cell3) {
    var isSunk = false,
        count = 0,
        positiveCount = 0,
        userInput,
        stat,
        SHIP_SIZE = 3;

    while (isSunk == false) {
        userInput = parseInt(prompt("Номер ячейки"));
        if (userInput == null || isNaN(userInput) || userInput < 1 || userInput > 7) {
            continue;
        }
        count++;
        if (userInput == cell1 || userInput == cell2 || userInput == cell3) {
            positiveCount++;
            alert("Вы попали");
            if (positiveCount == SHIP_SIZE) {
                isSunk = true;
            }
        } else {
            alert("Мазило!");
        }
    }
    alert("Вы потопили корабль");
    stat = SHIP_SIZE * 100 / count;
    alert("Процент попаданий: " + stat + "%");
}

batleship(5, 6, 7);