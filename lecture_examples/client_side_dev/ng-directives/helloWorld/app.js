(function() {

    // declare a HelloWorldDirective module
    // it depends on other directives we've
    // implemented elsewhere
    angular
        .module("HelloWorldDirective", [])
        .controller("CustomersController", CustomersController)
        .directive("helloWorld", helloWorld);

    function CustomersController($scope){
        $scope.customer = {
            name: 'David',
            street: '1234 Anywhere St.'
        };
    }

    function helloWorld(){
        return {
            /*template: 'Name: {{customer.name}}<br /> Street: {{customer.street}}'*/
            template: "helloWorld!"
        };
    }
})();
