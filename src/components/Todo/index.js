import React,{useState} from 'react'
import "./style.css"
function Todo(props) {
    const [isEditing, setIsEditing] = useState(false)
    const [formText, setFormText] = useState(props.text)
    const [formPriority, setFormPriority] = useState(props.priority)
    const handleButtonClick = ()=>{
        props.delete(props.id)
    }
    const handleFormSubmit = e=>{
        e.preventDefault();
        const editedTodo = {
            id:props.id,
            text:formText,
            priority:formPriority
        }
        props.edit(editedTodo)
        setIsEditing(false)
    }

    return (
        <div className="Todo">
            {isEditing?(
                <form className="editForm" onSubmit={handleFormSubmit}>
                <input placeholder="text" name="text" type="text" value={formText} onChange={(e)=>{setFormText(e.target.value)}}/>
                <select name="priority" value={formPriority}  onChange={(e)=>{setFormPriority(e.target.value)}}>
                    <option value="high">High priority</option>
                    <option value="med">Medium priority</option>
                    <option value="low">Low priority</option>
                </select>
                <button>Edit Todo!</button>
                <button type="button" onClick={()=>setIsEditing(false)}>cancel changes</button>
             </form>
            ):(
            <h2>{props.text} <span className={props.priority}>{props.priority}</span><button onClick={handleButtonClick}>delete</button><button onClick={()=>{setIsEditing(true)}}>Edit</button></h2>
            )}
        </div>
    )
}

export default Todo;