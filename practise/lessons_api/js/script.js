"use strict";

$(function () {
   $(".form").on("submit", function (e) {
       e.preventDefault();
       var url = "https://musixmatchcom-musixmatch.p.mashape.com/wsr/1.1/track.search",
           key = "Rve7HCC7bZmshKLVivfVrHy8vgKJp1y7PKVjsnDNVVJMyHPc8b",
           searchInput = $(".search-input").val();
       if(searchInput != ""){
           $(".track-info tbody tr").remove();
           $.ajax({
               url: url + "?q=" + searchInput + "&s_track_rating=desc",
               headers: {
                   "X-Mashape-Key": key
               },
               success: function (data, textStatus, jqXHR) {
                   var trackInfo = $.parseJSON(data),
                       $trackInfoTableBody = $(".track-info tbody");
                   for (var i = 0; i < trackInfo.length; i++) {
                       $trackInfoTableBody.append(
                           "<tr>" +
                           "<td><img src=\"" + trackInfo[i].album_coverart_100x100 + "\" alt=\"" + trackInfo[i].album_name + "\"/></td>" +
                           "<td>" + trackInfo[i].album_name + "</td>" +
                           "<td>" + trackInfo[i].artist_name + "</td>" +
                           "<td>" + trackInfo[i].track_name + "</td>" +
                           "<td>" + trackInfo[i].track_rating + "</td>" +
                           "</tr>"
                       );
                       console.log(trackInfo[i]);
                   }
               }
           });
       }else {
           alert("Artist name is required");
       }

   });

});


