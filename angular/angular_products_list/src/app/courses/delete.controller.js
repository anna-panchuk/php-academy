(function () {
    "use strict";
    angular.module("app")
        .controller("DeleteCoursesController", ["modelOperations", '$stateParams', '$state', deleteCoursesController]);

    function deleteCoursesController(modelOperations, $stateParams, $state) {
        var vm = this;
        vm.id = $stateParams.id;

        modelOperations.deleteLine(vm.id).then(deleteItem);

        function deleteItem(response) {
            $state.go('coursesList');
        }

    }
})();
