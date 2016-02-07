var math = (function(){
    var api = {
        add: total,
        subtract: subtract
    };
    return api;

    function total(a,b) {
        var c = a+b;
        //alert("total:" + c);
        console.log(c);
        return c;
    }

    function subtract(a,b) {
        var c = a-b;
        //alert("subtract: " + c);
        return c;
    }
})();


/*
app.math=(function(){

    var math = {
        add: total,
        subtract: subtract
    };
    return math;

    function total(a,b) {
        var c = a+b;
        alert("total:" + c);
        console.log(c);
        return c;
    }

    function subtract(a,b) {
        var c = a-b;
        alert("subtract: " + c);
        return c;
    }

})();

*/
