import "./index.css"
import { addNoteHandler } from "./modules/note";
import { newProject } from "./modules/add";

let blackboard = document.querySelector("#blackboard")



// setInterval(()=>{
	newProject();
	addNoteHandler();
// },1250)
