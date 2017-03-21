(function () {
    "use strict";
    angular.module("app")
        .controller("ListCoursesController", ["modelOperations", listCoursesController]);

    function listCoursesController(modelOperations) {
        var vm = this;
        vm.list = {
            items: []
        };
        vm.addItem = addItem;
        vm.buttonText = "Add";

        modelOperations.getModel().then(function(response){
            vm.list.items = response.data;
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