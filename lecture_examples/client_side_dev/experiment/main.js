(function (){
    $(init);

    function init()
    {
        console.log("hello world!");
/*

        $("#clickBtn").click(
                function(){
                    alert("hello!");
                });


        $("#appendMe")
            .append("***Hello World!")
            .append("Is there anyone out there?");

*/


        var movieTitle = $("#movieTitle");

        var db_search_url = "http://www.myapifilms.com/imdb/idIMDB?title=";
        var auth = "&token=dc5ade4f-960b-43ea-a5cf-2e17b29e5c13&format=json&language=en-us&aka=0&business=0&seasons=0&seasonYear=0&technical=0&filter=2&exactFilter=0&limit=1&forceYear=0&trailers=0&movieTrivia=0&awards=0&moviePhotos=0&movieVideos=0&actors=0&biography=0&uniqueName=0&filmography=0&bornAndDead=0&starSign=0&actorActress=0&actorTrivia=0&similarMovies=0&adultSearch=0";;

        $("#searchMovie").click(function(){

            var title = movieTitle.val();
            console.log("title: " + title);

            var search_url = db_search_url+title+auth;
            console.log("sending request to: " + search_url);

            $.ajax({
                url:search_url,
                dataType: "json",
                success: function(response){
                    console.log("result: " + response);
                }
            });
        });

    }
})();
