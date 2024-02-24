import "./index.css"
import { addNote } from "./modules/note";

let blackboard = document.querySelector("#blackboard")



setInterval(()=>{
	addNote();
},1250)
