
export function addNote(){

let note = document.getElementById("note");
let inputDate = document.querySelector(".pickDate")
let noteContent = document.getElementById("noteContent")
let blackboard = document.getElementById("blackboard")
let unsortedList  = document.getElementById("ul")
let noteName = document.getElementById("noteName")
let main = document.querySelector("#main")
let addBtn = document.getElementById("add");


let xPosition = 0;
let yPosition = 0;
noteContent.style.opacity = 1;

function newNote(){
	let noteCopy= note.cloneNode(true);

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

	noteCopy.classList.add('noteCopy')
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

	unsortedList.appendChild(noteCopy)

	setTimeout(()=>{
		noteCopy.remove()
	},5000)

	}

	addBtn.addEventListener("click",()=>{
		if(noteName.value && noteName.value.trim() != ""){
			newNote()
		}
	})


let delBtn = document.getElementById('delete')

delBtn.disabled = true;


delBtn.addEventListener("click", ()=>{
	noteReturnAnimation()
	swingingAnimation()
})



function noteReturnAnimation(){
	main.appendChild(note)
	// if(!note.classList.contains('noteInit'))
	note.classList.add('noteReturnAnimated')
	delBtn.disabled = true;

	setTimeout(()=>{
		note.classList.remove('noteReturnAnimated')
		delBtn.disabled = true;

	},2030)

	note.classList.remove("note")
	note.classList.remove("noteResize")
}

function swingingAnimation(){
	setTimeout(()=>{
		
		if(!note.classList.contains('note')){
			note.classList.add('swing')
			note.addEventListener('click',()=>{
				if(note.classList.contains('noteReturnAnimated')){
					initialPosition();
				};
			});
		};
	},2000);
}

function initialPosition(){
	if(note.classList.contains('noteReturnAnimated') && note.classList.contains('swing')){
		note.classList.remove("swing")

		if(!note.classList.contains('note')){
			note.classList.add('noteInit')
			if(note.classList.contains('noteReturnAnimated')){
				setTimeout(()=>{
					note.classList.remove('noteInit')
					},1950)
			}
			note.classList.add('note')
			}
		}
	}
}