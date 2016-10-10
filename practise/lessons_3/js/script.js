"use strict";

var TOTAL_FOR_DISCOUNT = 1000,
    PRISE_KM = 5,
    DISTANCE_LIMIT = 30,
    total,
    discount,
    totalWithDiscount,
    isCash,
    distance,
    overDistanceLimit;

total = prompt("Введите сумму покупки");
if (total === null) {
    alert("Вы отменили операцию");
} else if (total <= 0 || isNaN(total)) {
    alert("Вы ввели некорректные данные");
} else {
    if (total < TOTAL_FOR_DISCOUNT) {
        console.log("Итоговая сумма к оплате за товар: " + total + "грн.");
    } else {
        discount = Math.floor(Math.random() * (15 - 0 + 1)) + 0;
        totalWithDiscount = total - total * discount / 100;
        alert("Ваша скидка состовляет: " + discount + "%. Сумма к оплате составляет: " + totalWithDiscount + "грн.");
        isCash = confirm("При оплате наличными вы можете получить бесплатную доставку в приделах 30км.\n" +
            "Желаете расплатиться наличными?");
        console.log("Итоговая сумма к оплате за товар: " + totalWithDiscount + "грн.");
        if (isCash) {
            distance = prompt("Укажите расстояния до пункта доставки");
            if (distance !== null && !isNaN(distance) && distance > 0) {
                if (distance <= DISTANCE_LIMIT) {
                    console.log("Ваш товар будет доставлен бесплатно")
                } else {
                    overDistanceLimit = (distance - DISTANCE_LIMIT) * PRISE_KM;
                    console.log("Доплата за доставку товара составляет: " +
                        overDistanceLimit + "грн.");
                }
            }
        }
    }
}