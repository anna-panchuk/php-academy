(function () {
    "use strict";
    angular.module("app")
        .controller("FormController", ["$scope", "modelOperations", formController]);

    function formController($scope, modelOperations) {
        $scope.addItem = addItem;

        function addItem(name, author) {
            modelOperations.addLineModel({name: name, author: author});
            console.log($scope.name);
        }
    }
})();
