(function() {
    "use strict";

    angular.module('app')
        .config(['$stateProvider', '$urlRouterProvider',
            function($stateProvider, $urlRouterProvider) {
                $urlRouterProvider
                    .otherwise('/');

                $stateProvider
                    .state('coursesList', {
                        url: '/',
                        templateUrl: "/app/courses/list.html",
                        controller: "ListCoursesController",
                        controllerAs: "vm"
                    })
                    .state('coursesAdd', {
                        url: '/add',
                        templateUrl: "/app/courses/add.html",
                        controller: "AddCoursesController",
                        controllerAs: "vm"
                    })
                    .state('coursesEdit', {
                        url: '/edit/:id',
                        templateUrl: "/app/courses/edit.html",
                        controller: "EditCoursesController",
                        controllerAs: "vm"
                    })
                    .state('coursesShow', {
                        url: '/show/:id',
                        templateUrl: "/app/courses/show.html",
                        controller: "ShowCoursesController",
                        controllerAs: "vm"
                    })
                    .state('coursesDelete', {
                        url: '/delete/:id',
                        template: "",
                        controller: "DeleteCoursesController",
                        controllerAs: "vm"
                    })
                ;

            }
        ]);

})();