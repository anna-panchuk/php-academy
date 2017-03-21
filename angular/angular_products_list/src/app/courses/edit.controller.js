(function () {
    "use strict";
    angular.module("app")
        .controller("EditCoursesController", ["modelOperations", '$stateParams', '$filter', '$state', editCoursesController]);

    function editCoursesController(modelOperations, $stateParams, $filter, $state) {
        var vm = this;
        vm.id = $stateParams.id;
        vm.editItem = editItem;
        vm.buttonText = "Edit";
        vm.course = {name: '', date: 0, author: ''};

        modelOperations.getItem(vm.id).then(showItem);

        function showItem(response) {
            vm.course = response.data;
            vm.course.date = $filter('timestamp')(vm.course.date);
            vm.course.date = $filter('date')(vm.course.date, 'dd/MM/yyyy');
        }

        function editItem() {
            var timestamp = Math.round(new Date(vm.course.date).getTime() / 1000);
            var line = {id: vm.id, name: vm.course.name, author: vm.course.author, date: timestamp};
            modelOperations.editLineModel(vm.id, line).then(function(){
                $state.go('coursesList');
            });
        }
    }
})();