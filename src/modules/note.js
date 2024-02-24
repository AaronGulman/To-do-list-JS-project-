
export function addNote(){

let note = document.getElementById("note");
let inputDate = document.querySelector(".pickDate")
let noteContent = document.getElementById("noteContent")
let blackboard = document.getElementById("blackboard")
let noteList  = document.getElementById("ul")
noteContent.style.opacity = 1;

function newNote(){
	//main elements
	let pinnedNote = document.createElement("li")
	let header = document.createElement("h1");
	let newNote = document.createElement("div");
	let label = document.createElement("label");
	let addDate = document.createElement("input");
	let textArea = document.createElement("textarea");
	let btnBox = document.createElement("div");
	let addImg = document.createElement("img");
	let deleteImg = document.createElement("img");


	addImg.src = "./assets/check.svg"
	deleteImg.src = "./assets/cancel.svg"

	label.setAttribute("for","inputDate")
	addDate.setAttribute("type","date")
	addDate.classList.add("inputDate")
	textArea.setAttribute("name","txtInfo")
	textArea.classList.add("txtInfo")
	btnBox.classList.add("btnBox")

	pinnedNote.append(header,newNote,label,addDate,textArea,btnBox);
	btnBox.append(addImg,deleteImg);
	newNote.classList.add("pinned");
	noteList.appendChild(pinnedNote);
	}

let addBtn = document.getElementById("add");
addBtn.addEventListener("click",()=>{
	newNote()
	})

}