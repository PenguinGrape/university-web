// Task 1
$(document).ready(function(){
    $(".g").css("fontWeight", "bold");
    $(".y").css("color", "green");
    $(".m").css("color", "red");
    $("form").css("disabled", "true");
});

// Task 2

$(document).ready(function(){
    $("[href]").prepend("↗").attr("target","_blank");
    $("[href^='http://']").each(function() {
        $(this).attr("href", $(this).attr("href").replace("http://", "https://"));
    });
    $("#discard").click(function(){
        $("[href]").each(function() {
            $(this).contents().eq(0).remove();
        });
        $("[href]").removeAttr("target");
        $(this).prop("disabled", true);
    });
});

// Task3

$(document).ready(function () {
    $("#fadein").hide();
    $("#slidedown").hide();
});

function fadeout(){
    $("#fadeout").fadeOut();
}
function fadein(){
    $("#fadein").fadeIn();
}
function slideup(){
    $("#slideup").slideUp();
    console.log("slideup");
}
function slidedown(){
    $("#slidedown").slideDown();
    console.log("slidedown");
}
function minimize(){
    $("#minimize").animate({fontSize: '50%'});
}

// Task 4

$(document).ready(function(){
    let butt = document.createElement("button");
    butt.setAttribute("id", "ajax");
    butt.innerHTML="Refresh";
    document.getElementsByTagName('body')[0].appendChild(butt);
    $("button#ajax").click(function(){
        $("#ajax").load("https://inxaoc.github.io/example/ajax-1.html");
    });
    let butt2 = document.createElement("button");
    butt2.setAttribute("id", "ajax2");
    butt2.innerHTML="Send";
    document.getElementsByTagName('body')[0].appendChild(butt2);

    $("button#ajax2").click(function(){
        let temp = document.createElement("div");
        temp.setAttribute("id", "temp");
        document.getElementsByTagName('body')[0].appendChild(temp);
        $(temp).load("https://inxaoc.github.io/example/ajax.json",
            "authorization", onComplete);
    });
});


function onComplete(){
    var json = $(temp).html();
    $(temp).html("");
    var text = "";
    for (var i = 0; i < json.length; i++) {
        if (json[i] == '{' || json[i] == '[') {
            text += "<ul><li>";
        } else if (json[i] == '}' || json[i] == ']') {
            text += "</ul></ul>";
        } else if (json[i] == ',') {
            text += "</li><li>";
        } else if (json[i] == '"') {
            if (json[i-1] == '{') {
                text += "<li>";
            } else if (json[i+1] == '}') {
                text += "</li>";
            }
        } else text +=json[i];

    }
    $(temp).append(text)
}