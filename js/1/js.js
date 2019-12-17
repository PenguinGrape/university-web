document.write("У вас жаба скрипит<br>");
document.write("<i>lol, italic</i><br>");
document.write("There are " + document.querySelectorAll("a[name]").length + " anchors<br>");
document.write("First anchor: " + document.querySelectorAll("a[name]")[0].innerHTML + "<br>");
document.write("There are " + document.getElementsByTagName("form").length + " forms<br>");
document.write("First form: " + document.getElementsByTagName("form")[0].name + "<br>");
document.write("There are " + document.getElementsByTagName("img").length + " pics<br>");
document.write("First pic: " + document.getElementsByTagName("img")[0].id + "<br>");
document.write("There are " + document.querySelectorAll("a[href]").length + " refs<br>");
document.write("First ref: " + document.querySelectorAll("a[href]")[0].id + "<br>");
document.write("Domain name, lol: " + location.hostname + "<br>");
document.write("URL: " + document.URL + "<br>");
document.write("Title of page: " + document.title + "<br>");
document.write("Url again, wat? But anyway: " + location.href + "<br>");

x = document.getElementById("roskomnadzor");
document.write("Name of button is " + x.name + ", type is " + x.type + ", value is " + x.value + ", form's id is " + x.parentElement.id + "<br>");
function disable(){
	x.disabled = true;
}

y = document.getElementById("FORM");
//never mind, just DEBUGGING
console.log(y);
for (var i = 0; i < y.length; i++) {
	document.write(y[i].value + " ");
}
document.write(", action is " +
	y.action + ", datatype is " + y.enctype + ", amount of elements is "
	+ y.length + ", method is " + y.method + ", name is " + y.name);
function resetForm()
	{
		y.reset();
	}