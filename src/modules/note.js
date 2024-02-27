
export function addNote(){

let note = document.getElementById("note");
let inputDate = document.querySelector(".pickDate")
let noteContent = document.getElementById("noteContent")
let blackboard = document.getElementById("blackboard")
let unsortedList  = document.getElementById("ul")
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
	let listBox = document.createElement('div')


	addImg.src = "./assets/check.svg"
	deleteImg.src = "./assets/cancel.svg"

	listBox.classList.add("listBox")
	noteContent.classList.add("noteContent")
	label.setAttribute("for","inputDate")
	addDate.setAttribute("type","date")
	addDate.classList.add("inputDate")
	textArea.setAttribute("name","txtInfo")
	textArea.classList.add("txtInfo")
	btnBox.classList.add("btnBox")
	newNote.classList.add("pinned");
	noteList.classList.add("newList")


	listBox.appendChild(noteList)
	noteList.appendChild(newNote)
	newNote.append(header,noteContent)
	noteContent.append(label,addDate,textArea,btnBox);
	btnBox.append(addImg,deleteImg);
	unsortedList.appendChild(listBox);
	}

let addBtn = document.getElementById("add");
addBtn.addEventListener("click",()=>{
	newNote()
	})

}