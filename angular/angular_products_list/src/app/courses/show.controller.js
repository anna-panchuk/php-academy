(function () {
    "use strict";
    angular.module("app")
        .controller("ShowCoursesController", ["modelOperations", '$state', showCoursesController]);

    function showCoursesController(modelOperations, $state) {
        var vm = this;
        vm.course = {};
        vm.id = $state.params.id;

        modelOperations.getItem(vm.id).then(showItem);

        function showItem(response){
            vm.course = response.data;
        }
    }
})();