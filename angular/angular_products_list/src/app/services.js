(function(){
    "use strict";

    angular.module("app")
        .factory("modelOperations", ['$http', modelOperations]);

    function modelOperations($http) {
        return {
            getModel: function() {
                return $http.get('/data');
            },
            getItem: function(id) {
                return $http.get('/get-line/' + id);
            },
            addLineModel: function(line) {
                return $http.post('/add-line', line);
            },
            editLineModel: function(id, line) {
                return $http.post('/edit-line/' + id, line);
            },
            deleteLine: function (id) {
                return $http.post('/delete-line/' + id);
            }
        }
    }
})();
