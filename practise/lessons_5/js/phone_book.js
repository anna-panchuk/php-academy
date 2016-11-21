'use strict';

var contacts = [
    {
    name: "Вадим",
    surname: "Панчук",
    age: "28",
    phone: "0958101053"
},
{
    name: "Лера",
    surname: "Мазур",
    age: "29",
    phone: "0950484478"
},
{
    name: "Анна",
    surname: "Павлик",
    age: "25",
    phone: "0954672987"
},
{
    name: "Елена",
    surname: "Березенец",
    age: "28",
    phone: "0958657722"
},
{
    name: "Виктория",
    surname: "Маренич",
    age: "29",
    phone: "0958946633"
}
];

function showContacts(contacts) {
    for ( var i = 0; i < contacts.length; i++) {
        console.log(contacts[i].name + contacts[i].phone);
    }
}
showContacts(contacts);

function searchContacts(contacts) {
    var searchphone = prompt ('введите имя');
    for ( var i = 0; i < contacts.length; i++) {
        if (searchphone == contacts[i].name) {
            console.log(contacts[i].phone);
        }
    }
}
searchContacts(contacts);
console.log("Колличество контактов " + contacts.length);
