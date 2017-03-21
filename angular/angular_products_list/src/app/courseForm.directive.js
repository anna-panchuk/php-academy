(function () {
    "use strict";
    angular.module("app")
        .directive("courseForm", courseForm);

    function courseForm() {
        var directive = {
            templateUrl: "app/template/courseForm.html",
            scope: {
                action: "=action",
                buttonText: "=buttonText",
                course: "=course"
            },
            controllerAs: 'vm'
        }

        return directive;
    }
})();