let noteElements = {
	note: document.querySelector("#note"),
	inputDate: document.querySelector(".pickDate"),
	noteContent: document.getElementById("noteContent"),
	blackboard: document.getElementById("blackboard"),
	unsortedList : document.getElementById("ul"),
	noteName: document.getElementById("noteName"),
	main: document.querySelector("#main"),
	addBtn: document.getElementById("add"),
	delBtn: document.getElementById('delete')
}



export function addNote(){

let xPosition = 0;
let yPosition = 0;
noteElements.noteContent.style.opacity = 1;

function newNote(noteCopy,noteList,newNote,header,noteContent,label,addDate,textArea,btnBox,addImg,deleteImg){
	 noteCopy= noteElements.note.cloneNode(true);

	//main elements
	 noteList = document.createElement("li")
	 newNote = document.createElement("div");
	 header = document.createElement("h1");
	 noteContent = document.createElement("div");
	 label = document.createElement("label");
	 addDate = document.createElement("input");
	 textArea = document.createElement("textarea");
	 btnBox = document.createElement("div");
	 addImg = document.createElement("img");
	 deleteImg = document.createElement("img");

	header.textContent = noteElements.noteName.value;
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
	noteElements.unsortedList.appendChild(noteList);

	noteElements.unsortedList.appendChild(noteCopy)

	setTimeout(()=>{
		noteCopy.remove()
	},5000)

	}

	noteElements.addBtn.addEventListener("click",()=>{
		if(noteElements.noteName.value && noteElements.noteName.value.trim() != ""){
			newNote()
		}
	})

	noteElements.delBtn.addEventListener('click', ()=>{
		noteElements.note.classList.remove('note')
		noteElements.note.classList.remove('noteResize')
		noteElements.note.setAttribute('class','noteReturnAnimated')
		createCoverNote()
		setTimeout(()=>{
			noteElements.note.classList.remove('noteReturnAnimated')
			noteElements.note.classList.add('swing')

		},1900)

	})


	function createCoverNote(){
		if(noteElements.note.classList.contains('swing')){
			noteElements.note.classList.contains('swing').style.pointerEvents = 'none';
			noteElements.note.classList.contains('swing').style.userSelect = 'none'
		}
		let coverNote = document.createElement('div')
		coverNote.classList.add('coverNote')
		noteElements.note.appendChild(coverNote)
		
		coverNote.addEventListener('click',()=>{
			noteElements.note.classList.remove('swing')
			coverNote.remove()
			noteBack()
		})
	}

	function noteBack(){

		noteElements.note.classList.add('noteInit')

		setTimeout(()=>{
			noteElements.note.classList.remove('noteInit')
		},1900)
		noteElements.note.classList.add('note')

		console.log('Added')
	}
}