(function () {
    "use strict";
    angular.module("app")
        .controller("CoursesController", ["$scope", "modelOperations", coursesController]);

    function coursesController($scope, modelOperations) {
        $scope.list = {
            items: modelOperations.getModel()
        }
    }
})();