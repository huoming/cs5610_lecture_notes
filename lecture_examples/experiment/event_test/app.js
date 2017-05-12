(function(){
    angular
        .module("SearchEvent", [])
        .controller("SearchCtrl", function($scope, $q, $http) {

            $scope.search=function(title){

                /*$http
                    .json("http://api.eventful.com/jsonp/events/search?app_key=LThPh5DRkjhzGFd2&keywords=testSeattle&jsonCallback=JSON_CALLBACK")
                    .then(function(response) {
                        console.log("find event: " + response);
                    });*/


                $.ajax({
                    url: "http://api.eventful.com/jsonp/events/search?app_key=LThPh5DRkjhzGFd2&keywords=testSeattle&jsonCallback=JSON_CALLBACK",
                    dataType: 'JSONP',
                    jsonpCallback: 'callback',
                    type: 'GET',
                    success: function (data) {
                        console.log(data);
                    }
                });
            }
        });
})();