
export function addNote(){

let note = document.getElementById("note");
let inputDate = document.querySelector(".pickDate")
let noteContent = document.getElementById("noteContent")
let blackboard = document.getElementById("blackboard")
let unsortedList  = document.getElementById("ul")
let noteName = document.getElementById("noteName")
let main = document.querySelector("main")
let xPosition = 0;
let yPosition = 0;
noteContent.style.opacity = 1;

function newNote(){
	//main elements
	let noteList = document.createElement("li")
	let newNote = document.createElement("div");
	let header = document.createElement("h1");
	let noteContent = document.createElement("div");
	let label = document.createElement("label");
	let addDate = document.createElement("input");
	let textArea = document.createElement("textarea");
	let btnBox = document.createElement("div");
	let addImg = document.createElement("img");
	let deleteImg = document.createElement("img");


	header.textContent = noteName.value;
	addImg.src = "./assets/check.svg"
	deleteImg.src = "./assets/cancel.svg"

	noteContent.classList.add("noteContent")
	label.setAttribute("for","inputDate")
	addDate.setAttribute("type","date")
	addDate.classList.add("inputDate")
	textArea.setAttribute("name","txtInfo")
	textArea.classList.add("txtInfo")
	btnBox.classList.add("btnBox")
	newNote.classList.add("pinned");


	//make sure noteContent appears only during editing
	noteList.appendChild(newNote)
	newNote.append(header)
	noteContent.append(label,addDate,textArea,btnBox);
	btnBox.append(addImg,deleteImg);
	newNote.append(header)
	unsortedList.appendChild(noteList);
	}

let addBtn = document.getElementById("add");
addBtn.addEventListener("click",()=>{
	newNote()
	})

}

let delBtn = document.getElementById('delete')

delBtn.addEventListener("click", ()=>{
	main.appendChild(note)
	note.classList.remove("note")
	note.classList.add("noteReturnAnimated");
})