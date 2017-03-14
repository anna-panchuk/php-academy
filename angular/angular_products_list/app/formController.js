(function () {
    "use strict";
    angular.module("app")
        .controller("FormController", ["$scope", "modelOperations", formController]);

    function formController($scope, modelOperations) {
        $scope.addItem = addItem;
        $scope.buttonText = "Add";

        function addItem(scopeVm) {
            var timestamp = Math.round(new Date(scopeVm.date).getTime() / 1000);
            modelOperations.addLineModel({name: scopeVm.name, author: scopeVm.author, date: timestamp});
        }
    }
})();
