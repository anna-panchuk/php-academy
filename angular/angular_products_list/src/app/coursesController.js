(function () {
    "use strict";
    angular.module("app")
        .controller("CoursesController", ["$scope", "modelOperations", coursesController]);

    function coursesController($scope, modelOperations) {
        $scope.list = {
            items: []
        }
        $scope.addItem = addItem;
        $scope.buttonText = "Add";

        modelOperations.getModel().then(function(response){
            $scope.list.items = response.data;
        })

        function addItem(scopeVm) {
            var timestamp = Math.round(new Date(scopeVm.date).getTime() / 1000);
            var line = {name: scopeVm.name, author: scopeVm.author, date: timestamp};
            modelOperations.addLineModel(line).then(function(){
                $scope.list.items.push(line);
            });
        }
    }
})();