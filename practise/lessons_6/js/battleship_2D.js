"use strict";

window.onload = onLoad;

function onLoad() {
    function shot(cellX, cellY) {
        if (fieldCheck[cellX][cellY] === null) {
            counter++;
            if (field[cellX][cellY] === true) {
                successCounter++;
                fieldCheck[cellX][cellY] = true;
            } else {
                fieldCheck[cellX][cellY] = false;
            }
        }
    }

    var field = [], fieldCheck = [],
        shotBtn = document.getElementById("shotbtn"),
        shotInput = document.getElementById("shotinput"),
        logs = document.getElementById("logs"),
        charsArray = ["A", "B", "C", "D", "E", "F", "G"],
        counter = 0,
        successCounter = 0;


    shotBtn.onclick = function () {
        if (shotInput.value.length != 2
            || charsArray.indexOf(shotInput.value[0]) == -1
            || isNaN(shotInput.value[1])  || shotInput.value[1] < 1 || shotInput.value[1] > 7
        ) {
            //alert("Введите правильно!");
            logs.value = "Вы ввели не коректно: '" + shotInput.value + "'\n" + logs.value;
            shotInput.value = "";

            return false;
        }

        var x = charsArray.indexOf(shotInput.value[0]),
            y = shotInput.value[1] - 1;
        shot(x, y);
        shotInput.value = "";
        console.log(fieldCheck);

        return false;
    }

    for (var i = 0; i < 7; i++) {
        field[i] = [];
        fieldCheck[i] = [];
        for (var j = 0; j < 7; j++) {
            field[i][j] = false;
            fieldCheck[i][j] = null;
        }
    }

    field[3][2] = true;
    field[3][3] = true;
    field[3][4] = true;

}



