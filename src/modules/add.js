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


export function newProject(){
	let newProject = document.createElement('div');
	newProject.classList.add('newProject')
	document.body.appendChild(newProject)

	let createNewProjectText = document.createElement('h1');
	createNewProjectText.classList.add('createNewProjectText')
	newProject.appendChild(createNewProjectText)

	createNewProjectText.textContent = 'Create a new project'
	
	newProject.addEventListener('click',()=>{
		newProject.style.animation = 'newProjectClicked 2s forwards'
		setTimeout(()=>{
			newProject.classList.remove('newProject')
			newProject.classList.add('newProjectClicked');
		},2000)
	})

	newProject.addEventListener('dblclick',()=>{

		newProject.style.animation = 'newProjectClickedBack 2s forwards'
		setTimeout(()=>{
			newProject.classList.remove('newProjectClicked');
			newProject.classList.add('newProject')

		},2000)
	})
}