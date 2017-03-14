(function () {
    "use strict"
    angular.module("app")
        .filter("timestamp", toTimestamp);
    function toTimestamp() {
        return function (input) {
            return parseInt(input) * 1000;
        }
    }
})();