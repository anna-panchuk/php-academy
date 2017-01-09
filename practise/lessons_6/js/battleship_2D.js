"use strict";

//window.onload = onLoad;
$(document).ready(onLoad);

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
            return fieldCheck[cellX][cellY];
        }

        return null;
    }

    function isWinner() {
        if (successCounter == 3) {
            let isRestsrt = confirm("Вы виграли!!! Хотите с играть снова?");
            if (isRestsrt) {
                location.reload();
            }

        }
    }

    let field = [], fieldCheck = [],
        $logs = $("#logs"),
        charsArray = ["A", "B", "C", "D", "E", "F", "G"],
        counter = 0,
        successCounter = 0;
    $logs.val("");
    
    $(".battleship-field td:not(.no-border, .js-no-click)").click((e) => {
       let $this = $(e.currentTarget),
           x = $this.data("x"),
           y = $this.data("y"),
           shotResult = shot(x, y);
        if (shotResult) {
            $logs.val("Вы попали: '" + charsArray[x] + (parseInt(y) + 1) + "'\n" + $logs.val());
            $this.text("x");
        } else if (shotResult === false) {
            $logs.val("Вы не попали: '"  + charsArray[x] + (parseInt(y) + 1) + "'\n" + $logs.val());
            $this.text("-");
        } else {
            $logs.val("Вы уже стреляли в эту ячейку: '"  + charsArray[x] + (parseInt(y) + 1) + "'\n" + $logs.val());
        }
        isWinner();
    });
    
    for (let i = 0; i < 7; i++) {
        field[i] = [];
        fieldCheck[i] = [];
        for (let j = 0; j < 7; j++) {
            field[i][j] = false;
            fieldCheck[i][j] = null;
        }
    }

    field[0][0] = true;
    field[0][1] = true;
    field[0][2] = true;

}



