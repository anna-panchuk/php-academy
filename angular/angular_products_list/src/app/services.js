(function(){
    "use strict";

    angular.module("app")
        .factory("modelOperations", ['$http', modelOperations]);

    function modelOperations($http) {
        return {
            getModel: function() {
                return $http.get('/data');
            },
            addLineModel: function(line) {
                return $http.post('/add-line', line);
            }
        }
    }
})();
