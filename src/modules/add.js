
let uList = document.createElement('ul')
let lProject = document.createElement('li')
lProject.classList.add('lProject')

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

	let elTitleBox = document.createElement('div')
	elTitleBox.classList.add('elTitleBox')

	let createNewProjectText = document.createElement('h1');
	createNewProjectText.classList.add('createNewProjectText')

	createNewProjectText.textContent = 'Create a new project'

	let projectBoard = document.createElement('div')
	projectBoard.classList.add('projectBoard')
	elTitleBox.appendChild(createNewProjectText)
	newProject.append(projectBoard,elTitleBox)



	uList.appendChild(lProject)

	let addProject = document.createElement('img')
	addProject.classList.add('addProjectImg')
	addProject.src = './assets/plus.svg'

	lProject.append(addProject)
	projectBoard.append(uList)
	

	elTitleBox.addEventListener('click', ()=>{

			if(newProject.classList.contains('newProject')){
				newProject.style.animation = 'newProjectClicked 2s forwards';

				setTimeout(() => {
				    newProject.classList.remove('newProject');
				    newProject.classList.add('newProjectClicked');
				}, 2000);
			}else{
				newProject.style.animation = 'newProjectClickedBack 2s forwards';

				setTimeout(() => {
				newProject.classList.remove('newProjectClicked');
				newProject.classList.add('newProject');
			    }, 2000);
			}
		})


		addProject.addEventListener('click', ()=>{
			projectAdded()
		})

}

function projectAdded(projectAdded){
	projectAdded = document.createElement('li')
	projectAdded.classList.add('projectAdded')
	uList.append(projectAdded)
	
	alert('hello')
}