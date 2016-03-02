// jgaTable.js
(function(){

    // declares directive in
    // custom module
    angular
        .module("jgaTable", [])
        .directive("jgaTableExample", jgaTableExample);

    // implements directive
    // templateUrl refers to template file
    function jgaTableExample() {
        return {
            scope: {
                "caption": "=",
                "border": "=",
                "data": "="
            },
            templateUrl: "../jgaTable/jgaTable.html"
        };
    }
})();