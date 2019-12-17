function saveText(row, column){
	document.getElementById("" + row + column).innerHTML = document.getElementsByTagName("table")[0].children[0].children[row].children[column].children[0].value;
}

function changeWidth(){
	let width = document.getElementsByTagName("div")[0].children[0].value;
	let border = document.getElementsByTagName("div")[0].children[1].value;
	document.getElementsByTagName("table")[0].style = "px; border: " + width + "px " + border + ' black;';
}

function changeWidthText(){
	let width = document.getElementsByTagName("div")[0].children[0].value;
	let border = document.getElementsByTagName("div")[0].children[1].value;
	document.getElementsByTagName("div")[0].children[2].value = "Submit with width " + width + "px and " + border + " border";
}

function addHeader(){
	let header = document.getElementsByTagName("div")[1].children[0].value;
	document.getElementsByTagName("tbody")[0].innerHTML = "<tr><th colspan='" + document.getElementsByTagName("tbody")[0].children[1].children.length + "'>" + header + "</th></tr>" + document.getElementsByTagName("tbody")[0].innerHTML;
}

function deleteRow(){
	let row = document.getElementsByTagName("div")[2].children[0].value;
	try {
		document.getElementsByTagName("tbody")[0].children[row-1].remove();
	}
	catch {
		alert("Too big number");
	}
}

function magic(){
	let row = Math.floor(Math.random()*document.getElementsByTagName("table")[0].children[0].children.length);
	let column = Math.floor(Math.random()*document.getElementsByTagName("table")[0].children[0].children[row].children.length);
	let cellText = document.getElementsByTagName("table")[0].children[0].children[row].children[column];
	let red = Math.floor(Math.random() * 256);
	let green = Math.floor(Math.random() * 256);
	let blue = Math.floor(Math.random() * 256);
	switch (Math.ceil(Math.random() * 4)){
		case 1:
			cellText.style = "color: rgb(" + red + ", " + green + ", " + blue + ")";
			for (var i = 0; i < cellText.children.length; i++)
				cellText.children[i].style = "color: rgb(" + red + ", " + green + ", " + blue + ")";
			break;
		case 2:
			cellText.style = "background-color: rgb(" + red + ", " + green + ", " +blue + ")";
			for (var i = 0; i < cellText.children.length; i++)
				cellText.children[i].style = "background-color: rgb(" + red + ", " + green + ", " + blue + ")";
			break;
		case 3:
			cellText.style = 'font-size: ' + Math.ceil(Math.random() * 11 + 14)+ 'pt;';
			for (var i = 0; i < cellText.children.length; i++)
				cellText.children[i].style = 'font-size: ' + Math.ceil(Math.random() * 11 + 14) + 'pt;';
			break;
		case 4:
			cellText.remove();
			break;
	}
}

function deleteTable(){
	for (var i = 0; i < document.getElementsByTagName("body")[0].children.length; i++)
		document.getElementsByTagName("body")[0].children[i].remove();
	document.getElementsByTagName("body")[0].innerHTML="<form> Введите количество строк:" + '<input type="number" id="row"> Введите количество столбцов:' + '<input type="number" id="column"><button onclick="createTable()">Submit</button>' + '<script type="text/javascript" src="tasks2.js"></script></form>';
}

function createTable(){
	let row = document.getElementById('row').value;
	let column = document.getElementById('column').value;

	document.write("<div> Change width: <input type='text' onInput='changeWidthText()'>" + "<select onChange='changeWidthText()'><option>solid</option><option>dotted</option>" + "<option>dashed</option><option>double</option></select><input type='button'" + "onclick='changeWidth()' value=changeWidthText></input></div><br><br>");
	document.write("<div> Add header: <input type='text'>" + "<input type='button' onclick='addHeader()' value='Add header'></div><br><br>");
	document.write("<div> Delete row: <input type='text'>" + "<input type='button' onclick='deleteRow()' value='Delete row'></div><br><br>");
	document.write("<div><input type='button' onclick='magic()' value='Magic'></div>");
	document.write("<div><input type='button' onclick='deleteTable()' value='Delete table'></div><br><br>");
	
	for (var i = 0; i < document.getElementsByTagName("div").length; i++) {
		document.getElementsByTagName("div")[i].style = "float:left";
	}

	let tbl = document.createElement("table");
	let tblBody = document.createElement("tbody");

	for (var j = 0; j < row; j++) {
		let row = document.createElement("tr");
		for (var i = 0; i < column; i++) {
			let cell = document.createElement("td");
			cell.setAttribute("id", "" + j+i);
			let cellText = document.createElement("input", "type=textarea");
			let cellText2 = document.createElement("button");
			cellText2.setAttribute("onClick", "saveText("+j+", "+i+")");
			cellText2.innerHTML = "Save";
			cell.appendChild(cellText);
			cell.appendChild(cellText2);
			row.appendChild(cell);
		}
		tblBody.appendChild(row);
	}

	tbl.appendChild(tblBody);
	document.getElementsByTagName('body')[0].appendChild(tbl);
	tbl.setAttribute('border', '2');
}
