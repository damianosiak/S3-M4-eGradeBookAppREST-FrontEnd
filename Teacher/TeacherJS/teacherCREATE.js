const app = document.getElementById('root')
const container = document.createElement('div')
container.setAttribute('class', 'container')
app.appendChild(container)
var card = document.createElement("div");
card.setAttribute("class","card col-sm-6");
var cardHeader = document.createElement("div");
cardHeader.setAttribute("class","card-header text-white bg-primary");
var cardHeaderText = document.createTextNode("Create teacher");
cardHeader.appendChild(cardHeaderText);
card.appendChild(cardHeader);

var cardBody = document.createElement("div");
cardBody.setAttribute("class","card-body");

var form = document.createElement("div");
form.setAttribute("class","form-floating");
var formInputTeacherFirstName = document.createElement("input");
formInputTeacherFirstName.setAttribute("id","inputTeacherFirstName");
formInputTeacherFirstName.setAttribute("class","form-control bg-white");
formInputTeacherFirstName.type="text";
formInputTeacherFirstName.setAttribute("required",true);
var formLabelTeacherFirstName = document.createElement("label");
formLabelTeacherFirstName.setAttribute("for","inputTeacherFirstName");
var formLabelTeacherFirstNameText = document.createTextNode("First Name");
formLabelTeacherFirstName.appendChild(formLabelTeacherFirstNameText);
form.appendChild(formInputTeacherFirstName);
form.appendChild(formLabelTeacherFirstName);
cardBody.appendChild(form);

var form = document.createElement("div");
form.setAttribute("class","form-floating");
var formInputTeacherLastName = document.createElement("input");
formInputTeacherLastName.setAttribute("id","inputTeacherLastName");
formInputTeacherLastName.setAttribute("class","form-control bg-white");
formInputTeacherLastName.type="text";
formInputTeacherLastName.setAttribute("required",true);
var formLabelTeacherLastName = document.createElement("label");
formLabelTeacherLastName.setAttribute("for","inputTeacherLastName");
var formLabelTeacherLastNameText = document.createTextNode("Last Name");
formLabelTeacherLastName.appendChild(formLabelTeacherLastNameText);
form.appendChild(formInputTeacherLastName);
form.appendChild(formLabelTeacherLastName);
cardBody.appendChild(form);

card.appendChild(cardBody);

var cardFooter = document.createElement("div");
cardFooter.classList.add("card-footer");
cardFooter.classList.add("text-muted");
cardFooter.classList.add("text-end");

var buttonBack = document.createElement("button");
buttonBack.classList.add("btn");
buttonBack.classList.add("btn-outline-warning");
var buttonBackText = document.createTextNode("Back");
buttonBack.appendChild(buttonBackText);
cardFooter.appendChild(buttonBack);

var buttonSave = document.createElement("button");
buttonSave.classList.add("btn");
buttonSave.classList.add("btn-outline-success");
var buttonSaveText = document.createTextNode("Add");
buttonSave.appendChild(buttonSaveText);
cardFooter.appendChild(buttonSave);
card.appendChild(cardFooter);
container.appendChild(card);

buttonSave.addEventListener("click", function(){
	var vTeacherFirstName = document.getElementById("inputTeacherFirstName").value;
	var vTeacherLastName = document.getElementById("inputTeacherLastName").value;
	
	if(vTeacherFirstName.length>0 && vTeacherLastName.length>0){
		fetch("http://127.0.0.1:8080/api/teacher/", {
			method: "POST",
			body: JSON.stringify({
				teacherId: "",
				teacherFirstName: vTeacherFirstName,
				teacherLastName: vTeacherLastName
			}),headers: {
				"Content-type": "application/json; charset=UTF-8"
			}
		})
		.then(response => response.json())
		.then(json => console.log(json))
		alert("Added");
		window.location.href = "index.html";
	}else{
		alert("Fill required fields");
	}
});
buttonBack.addEventListener("click", function(){
	window.history.back();
});