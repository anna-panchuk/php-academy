(function(){
    "use strict";

    angular.module("app")
        .factory("modelOperations", [modelOperations]);

    function modelOperations() {
        var data = [
            {author: "Author first", name: "Course first"},
            {author: "Author second", name: "Course second"},
            {author: "Author third", name: "Course third"}
        ];
        return {
            getModel: function() {
                return data;
            },
            addLineModel: function(line) {
                data.push(line);
                return data;
            }
        }
    }
})();
