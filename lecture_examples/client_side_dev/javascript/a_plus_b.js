
function add()
{
    alert("onclick happened!");

    var a=document.getElementById("a").value;
    var b=document.getElementById("b").value;

    var c = parseInt(a) + parseInt(b);
    document.getElementById("c").value = c;

    //return c;
}

