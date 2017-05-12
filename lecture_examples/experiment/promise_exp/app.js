(function(){
    angular
        .module("WhiteBoardApp", [])
        .controller("AppCtrl", function($scope, $q){

            //Step One
            //$scope.total = 7+2;
           /* $scope.total = add(7,2);
            function add(a,b){return a+b; }*/

            //step two
            /*add(7,2, function(response){
                $scope.total = response;
            });

            function add(a,b, callback){
                callback(a+b);
            }*/

            //step three
            var start_time = Date.now();

            /*add(7,2)
                .then(function(response){
                    $scope.total = response;

                    //recording time delayed
                    $scope.timeSpan = Date.now() - start_time;
                });*/

            function add(a,b){
                var deferred = $q.defer();

                setTimeout(function(){
                    var total = a+b;

                    if (total > a){
                        console.log("resolve:  total: " + total + " and a: " + a);
                        deferred.resolve(total);
                     }
                     else{
                        console.log("reject:  total: " + total + " and a: " + a);
                        deferred.reject(total);
                     }
                }, 500);

                //return deferred.promise;
             }


            //step four
            //using more than one functions in then
            //then(function(rep1){}, function(rep2){},....);
            var time_start = Date.now();
            add(7,-2)
                .then(function(response){
                    console.log("success add more!");
                    return add(response, -3);
                }, function(response){
                    console.log("failed and still add more!");
                    return add(response, -3);
                })
                .then(function(res_one){
                    console.log("return from first function!");
                    return res_one;
                }, function(res_two){
                    console.log("return from second function!");
                    return res_two;
                })
                .then(function(response){
                     $scope.total = response;
                     $scope.timeSpan = Date.now() - time_start;
                });


        });
})();