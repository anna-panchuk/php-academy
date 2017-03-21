(function () {
    "use strict";
    angular.module("app")
        .controller("AddCoursesController", ["modelOperations", '$state', addCoursesController]);

    function addCoursesController(modelOperations, $state) {
        var vm = this;
        vm.addItem = addItem;
        vm.buttonText = "Add";

        function addItem(scopeVm) {
            var timestamp = Math.round(new Date(scopeVm.date).getTime() / 1000);
            var line = {name: scopeVm.name, author: scopeVm.author, date: timestamp};
            modelOperations.addLineModel(line).then(function(){
                $state.go('coursesList');
            });
        }
    }
})();