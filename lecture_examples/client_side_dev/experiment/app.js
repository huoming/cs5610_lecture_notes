(function(){
    angular
        .module("WhiteBoardApp", [])
        .controller("MovieTableController", function($scope){

            var movies=[
                {id:111, title: "hello world", year: 2008, description: "hello world"},
                {id:222, title: "star war", year: 1008, description: "hello world"},
                {id:333, title: "avatar", year: 2012, description: "hello world"}
            ];

            $scope.movies = movies;

            var test_items=[
                {id:000, title: "hello world", year: 2008, description: "hello world"},
                {id:000, title: "star war", year: 1008, description: "hello world"},
                {id:000, title: "avatar", year: 2012, description: "hello world"}
            ];
            $scope.test_items = test_items;

            $scope.addMovie = function(item){
                console.log("addMovie");

                var new_movie = {
                    id:item.id,
                    title: item.title,
                    year: item.year,
                    description: item.description
                }

                $scope.movies.push(new_movie);
            }

            $scope.delMovie=function(index){
                console.log(index);
                //delete a movie from our movies
                $scope.movies.splice(index,1);
            }

            $scope.selMovie=function(movie, index){
                console.log("select movie at: " + index);
                $scope.selectedMovieIndex = index;

                $scope.movie = {
                    id: movie.id,
                    title: movie.title,
                    year: movie.year,
                    description: movie.description
                };

                //this works too!
                //$scope.selectedMovieIndex = $scope.movies.indexOf(movie);

            }

            $scope.updateMovie=function(movie){

                console.log("update movie at: " + $scope.selectedMovieIndex);
                $scope.movies[$scope.selectedMovieIndex]=
                {
                    id: movie.id,
                    title: movie.title,
                    year: movie.year,
                    description: movie.description
                }
            }


        });
})();