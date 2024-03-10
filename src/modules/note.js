let noteElements = {
	note: document.querySelector("#note"),
	inputDate: document.querySelector(".inputDate"),
	noteContent: document.getElementById("noteContent"),
	blackboard: document.getElementById("blackboard"),
	unsortedList : document.getElementById("ul"),
	noteName: document.getElementById("noteName"),
	txtInfo: document.querySelector('.txtInfo'),
	main: document.querySelector("#main"),
	addBtn: document.getElementById("add"),
	delBtn: document.getElementById('delete')
}



export function addNoteHandler(){

let xPosition = 0;
let yPosition = 0;
noteElements.noteContent.style.opacity = 1;

function addNote(){
	if(noteElements.noteName.value && noteElements.noteName.value.trim() != ""){
		let noteCopy= noteElements.note.cloneNode(true);

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
		let editBtn = document.createElement('button')
	
		header.textContent = noteElements.noteName.value;
		addDate.value = noteElements.inputDate.value;
		textArea.value = noteElements.txtInfo.value;
		
		

		editBtn.textContent = 'EDIT'
		
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
		editBtn.classList.add('editBtn')
	
		//make sure noteContent appears only during editing
		
		noteList.appendChild(newNote)
		newNote.append(header)
		noteContent.append(label,addDate,textArea,btnBox);
		btnBox.append(addImg,deleteImg);
		newNote.append(header,editBtn)
		noteElements.unsortedList.appendChild(noteList);
	
		noteElements.unsortedList.appendChild(noteCopy)
	
		setTimeout(()=>{
			noteCopy.remove()
		},5000)


		deleteImg.addEventListener('click',()=>{
			noteList.remove()
		})

		editBtn.addEventListener('click',()=>{
		// let editWindow = document.createElement('div')
		newNote.classList.add('editWindow')
		newNote.classList.remove('pinned')
		noteContent.style.opacity = 1;
		newNote.append(header,noteContent,editBtn)

		// editWindow = noteCopy.cloneNode(true)
		document.body.appendChild(editWindow)
		// let blurryScreen = document.createElement('div')
		// blurryScreen.classList.add('blurryScreen')
		// document.body.appendChild(blurryScreen)
		// console.log('edit')
		})
	
		}
}

noteElements.addBtn.addEventListener("click",()=>{
	addNote()
		})



}

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


	