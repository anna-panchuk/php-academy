(function () {
    "use strict";
    angular.module("app")
        .controller("ListCoursesController", ["modelOperations", listCoursesController]);

    function listCoursesController(modelOperations) {
        var vm = this;
        vm.list = {
            items: []
        };

        modelOperations.getModel().then(function(response){
            vm.list.items = response.data;
        });
    }
})();