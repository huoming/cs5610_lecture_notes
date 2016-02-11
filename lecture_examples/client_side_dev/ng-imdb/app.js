(function(){
    angular
        .module("MovieApp", [])
        .controller("MovieController",function($scope){
            console.log("hello movie db!");

            var movies = [
                {id:111, title: "hello world", year: 2008},
                {id:222, title: "star war", year: 2008}
            ];

            $scope.movies = movies;
            $scope.addMovie = function(movie){
                var new_movie = {
                    id: movie.id,
                    title: movie.title,
                    year: movie.year
                };
                $scope.movie = {};
                $scope.movies.push(new_movie);
            }

            $scope.delMovie=function(index){
                console.log("remove: " + index);
                $scope.movies.splice(index, 1);
            }

            $scope.selectMovie=function(movie, index){
                $scope.movie = {
                    id: movie.id,
                    title: movie.title,
                    year: movie.year
                };
                $scope.selectedMovieIndex = index;
                //this works too!
                //$scope.selectedMovieIndex = $scope.movies.indexOf(movie);
            }

            $scope.updateMovie=function(movie){
                $scope.movies[$scope.selectedMovieIndex]={
                    id: movie.id,
                    title: movie.title,
                    year: movie.year
                };
            }
        });

})();