import React,{useState} from 'react'
import "./style.css"
function Form(props) {
    const [formText, setFormText] = useState("")
    const [formPriority, setFormPriority] = useState("low")
    const handleFormSubmit = e=>{
        e.preventDefault();
        const newTodo = {
            text:formText,
            priority:formPriority
        }
        props.addTodo(newTodo)
        setFormText("");
        setFormPriority("low");
    }
    return (
        <form className="Form" onSubmit={handleFormSubmit}>
           <input placeholder="text" name="text" type="text" value={formText} onChange={(e)=>{setFormText(e.target.value)}}/>
           <select name="priority" value={formPriority}  onChange={(e)=>{setFormPriority(e.target.value)}}>
               <option value="high">High priority</option>
               <option value="med">Medium priority</option>
               <option value="low">Low priority</option>
           </select>
           <button>Add new Item!</button>
        </form>
    )
}

export default Form;