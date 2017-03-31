(function(){
    'use strict';

    window.onload = load;

    function load() {
        var id = '#weather';
        $.getJSON("http://ipinfo.io", function(ipinfo){
            var latLong = ipinfo.loc.split(","),
                url = "http://api.openweathermap.org/data/2.5/weather?lang=ua&units=metric&lat="+ latLong[0] +"&lon=" + latLong[1] + "&APPID=d7f2129ec3b1daa4c84f29ba56afd8b0";

            $.getJSON(url, function(data){
                var $id = $(id);

                var temp = parseInt(data.main.temp);
                temp = temp > 0 ? '+' + temp : temp;

                var html = '<div style="font-size: 14px; font-family: sans-serif;border: 1px solid #0b97c4; padding: 10px; border-radius: 3px; width: 150px; text-align: center;">';
                html += '<div style="font-size:12px;background-color: #00acc1; padding: 3px 10px; color: white; margin-bottom: 10px;">Погода на сьогодні</div>';
                html += '<div>' + data.name + '</div>';
                html += '<div style="position: relative" title="' + data.weather[0].description + '">';
                html += '<span><img src="http://openweathermap.org/img/w/'+ data.weather[0].icon +'.png" alt=""></span>';
                html += '<span style="position: relative;top: -18px;"><span style="font-size: 20px;font-weight: bold;">' + temp + '</span><sup style="margin-left: 4px; color: #bebebe">&#x2103;</sup></span>';
                html += '</div>';
                html += '<div><span>Вітер: </span><span style="background: url(https://s1.gismeteo.ua/static/app/weather_new.png) -22px -402px no-repeat; padding-left: 20px;">' + data.wind.speed + '<span style="margin-left: 4px; color: #bebebe">м/с</span></span></div>';
                html += '</div>';

                $id.append(html);
            });

        }, function() {
            alert("something wrong!");
        });

    }
})();
