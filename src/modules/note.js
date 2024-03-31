//https://console.firebase.google.com/u/0/project/to-do-list-b044f/overview
//https://firebase.google.com/docs/web/setup?hl=en&authuser=0
//https://firebase.google.com/docs/hosting/quickstart?hl=en&authuser=0

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
		let deleteImg = document.createElement("img");
		let editBtn = document.createElement('button')
	
		header.textContent = noteElements.noteName.value;
		addDate.value = noteElements.inputDate.value;
		textArea.value = noteElements.txtInfo.value;
		editBtn.textContent = 'EDIT'
		
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
		header.classList.add('noteHeader')
	
		//make sure noteContent appears only during editing
		
		noteList.appendChild(newNote)
		newNote.append(header)
		noteContent.append(label,addDate,textArea,btnBox);
		btnBox.append(deleteImg);
		newNote.append(header,noteContent,editBtn)
		noteElements.unsortedList.appendChild(noteList);
		noteElements.unsortedList.appendChild(noteCopy)

		newNote.setAttribute('draggable','true')
		
	
		setTimeout(()=>{
			noteCopy.remove()
		},1500)

		deleteImg.addEventListener('click',()=>{
			noteList.remove()
		})


		if(newNote.classList.contains('pinned')){
			editBtn.addEventListener('click', ()=>{
				editHandler()
				if(!noteElements.note.classList.contains('swing')){
					noteElements.delBtn.click()
				}
			})
		}
		let isEdit = false;

		function editHandler(){
			
				switch(isEdit){
					case false:
						console.log('case one')
						noteContent.style.opacity = '1'
						if(newNote.classList.contains('pinned')){
							newNote.classList.remove('pinned')
							newNote.classList.add('editWindow')
						}

						
						document.addEventListener('dblclick', function(event) {
							if (newNote.classList.contains('editWindow')) {
							    handleHeaderChange(event);
							}
						    });

						function handleHeaderChange(event) {
							event.preventDefault();
							const currentHeader = event.target.textContent;
						    
							const input = document.createElement('input');
							input.type = 'text';
							input.value = currentHeader;
							input.setAttribute("maxlength","11")
							input.classList.add('nameChange')
						    
							event.target.replaceWith(input);
							input.focus();
							input.addEventListener('keydown', handleInputKeyDown);
						    }
						    
						    function handleInputKeyDown(event) {
							if (event.key === 'Enter' || newNote.classlist.contains('pinned')) { 
							    const newHeaderTxt = event.target.value;
							    const newHeader = document.createElement('h1');
							    newHeader.textContent = newHeaderTxt;
							    event.target.replaceWith(newHeader);
							    event.target.removeEventListener('keydown', handleInputKeyDown);
							}
						    }
						    
						    header.addEventListener('dblclick', handleHeaderChange);
						editBtn.textContent='OK'
						break;
						
					case true:
						console.log("case two")
						newNote.classList.remove('editWindow');
						newNote.classList.add('pinned');
						editBtn.textContent = 'EDIT'
						noteContent.style.opacity = '0'
						break;
					}
						isEdit = !isEdit;			
			}
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
		},1350)
		noteElements.note.classList.add('note')
	}