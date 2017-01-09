"use strict"

var API_KEY = "Rve7HCC7bZmshKLVivfVrHy8vgKJp1y7PKVjsnDNVVJMyHPc8b",
    headers = {'X-Mashape-Key': API_KEY},
    BASE_URL = "https://currency-exchange.p.mashape.com/";

$(document).ready(function () {
    function httpGet(url, headers) {
        return new Promise(function(resolve, reject) {
            var xhr = new XMLHttpRequest();
            xhr.open('GET', url, true);
            xhr.onload = function() {
                if (this.status == 200) {
                    resolve(this.response);
                } else {
                    var error = new Error(this.statusText);
                    error.code = this.status;
                    reject(error);
                }
            };
            xhr.onerror = function() {
                reject(new Error("Network Error"));
            };

            for (var header in headers) {
                xhr.setRequestHeader(header, headers[header]);
            }

            xhr.send();
        });
    }

    function listquotesResolve(response) {
        var data = $.parseJSON(response),
            $fromTo = $("#from, #to");

        for (var i = 0; i < data.length; i++) {
            $fromTo.append('<option value="' + data[i] + '">' + data[i] + '</option>');
        }
    }

    $("#convert").on("click", function (e) {
        e.preventDefault();
        var fromValue = $("#from").val(),
            toValue = $("#to").val(),
            fromAmountValue = $("#from_amount").val(),
            exchangePromise = httpGet(BASE_URL + "exchange?from=" + fromValue + "&q=" + fromAmountValue + "&to=" + toValue, headers);
        exchangePromise.then(function (response) {
            $("#to_amount").val(response);
        });

    })

    var listquotesPromise = httpGet(BASE_URL + "listquotes", headers);
    listquotesPromise.then(listquotesResolve);
});

