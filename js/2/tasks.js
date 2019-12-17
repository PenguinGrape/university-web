let supernova = "Supernova – ich fühl, wie der Sturm in mir erbebt";
document.write(supernova + "<br>");
document.write("2. There are " + supernova.split(" ").length + " words and " + supernova.length + " letters<br>");
document.write("3. Чтобы на поиск места где ты его не закрыл ушло не более суток<br>");
document.write("4. Текст идет после тэга скрипта. Вставить тэг скрипта внутри нужного тэга<br>");
document.write("5. URL is " + location.href + ", protocol is " + location.protocol + ", pathname is " + location.pathname.split(".")[0] + ", extension is " + location.pathname.split(".")[1] + "<br>");
document.write("6. Params: " + window.location.search.replace('?',' ').split('&') + "<br>");
document.write("There are " + document.querySelectorAll("a[name]").length + "anchors<br>");
document.write("First is " + document.querySelectorAll("a[name]")[0].innerHTML + "<br>");
document.write("There are " + document.querySelectorAll("a[href]").length + " links<br>");
document.write("There are " + document.getElementsByTagName("img").length + " pics<br>");
document.write("The width of first is " + document.getElementsByTagName("img")[0].width + "<br>");
let maxWidth = 0;
let height = 0;
for (var i = 0; i < document.getElementsByTagName('img').length; i++) {
	if (document.getElementsByTagName('img')[i].width > maxWidth) {
		maxWidth = document.getElementsByTagName('img')[i].width;
	}
	height += document.getElementsByTagName('img')[i].height;
}
document.write("Max width is " + maxWidth + " and sum of all heights is " + height + "<br>");

let names = [];
for (var i = 1; i < document.getElementsByTagName('form').length; i+= 2) {
	names.push(document.getElementsByTagName('form')[i].name);
}
document.write(names.join(", ") + "<br>");



text = ["js is a shit", "js was a mistake"];
for (var i = 0; i < 10; i++){
	document.write("<a href='http://localhost'>" + text[Math.round(Math.random())] + "</a><br>")
}
let links = document.querySelectorAll("a[href]");
linktext = {};
for (var i = 0; i < links.length; i++) {
	if (!(links[i].innerHTML in linktext)) {
		linktext[links[i].innerHTML] = [];
	}
	linktext[links[i].innerHTML].push(links[i].href);
}
console.log(linktext);
document.write("<table>");
for (var i = 0; i < Object.keys(linktext).length; i++){
	let key = Object.keys(linktext)[i];
	console.log(linktext[key]);
	document.write("<tr>");
	document.write("<td>" + key + "</td><td>" + linktext[key].length + "</td><td>" + linktext[key].join(", ") + "</td></tr>")
}
document.write("</table>");