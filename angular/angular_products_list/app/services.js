(function(){
    "use strict";

    angular.module("app")
        .factory("modelOperations", [modelOperations]);

    function modelOperations() {
        var data = [
            {author: "Author first", name: "Course first", date:1489276800},
            {author: "Author second", name: "Course second", date:1489276800},
            {author: "Author third", name: "Course third", date:1489276800}
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
