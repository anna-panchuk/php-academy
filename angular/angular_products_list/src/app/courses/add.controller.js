(function () {
    "use strict";
    angular.module("app")
        .controller("AddCoursesController", ["modelOperations", '$state', addCoursesController]);

    function addCoursesController(modelOperations, $state) {
        var vm = this;
        vm.addItem = addItem;
        vm.buttonText = "Add";
        vm.course = {name: '', date: '', author: ''};

        function addItem() {
            var timestamp = Math.round(new Date(vm.course.date).getTime() / 1000);
            var line = {
                name: vm.course.name,
                author: vm.course.author,
                date: timestamp
            };
            modelOperations.addLineModel(line).then(function(){
                $state.go('coursesList');
            });
        }
    }
})();