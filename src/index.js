import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const InsertTask = ({addTask}) => {
  const[value,newvalue] = useState("");

const handleSubmit = e => {
  e.preventDefault();
  if(value !== ""){
    addTask(value)
    newvalue("");
  }
};
const enterValue= e =>{
  if(value===""){
    alert("Type Something for add");
  }
};
return(
  <form onSubmit={handleSubmit}>
      <input type="text"
      placeholder='Enter Your Task' 
      onChange={e => newvalue(e.target.value)}/>

      <button onClick={e=> enterValue(e.target.value)} type="submit"> + </button>

  </form>
);
}
const ToDoList = ()=> {
const addTask= text => updateTask([...task,{text}]);
 const[task,updateTask] = useState([    //task--> state value // updateTask --> funtion()
 
  {text :"Wake Up",           //text--> task name
    isDone:false},            //isDone --> function()

  {text :"Fresh Up",
  isDone:false},
  
  {text :"Tea",
  isDone:false}

 ]);
/*--------------------------------------------------------------------------------- */
 const MoveTo = index => {
  const newTask =[...task];
  if(newTask[index].isDone){
    newTask[index].isDone=false;
  }
  else{
    newTask[index].isDone=true;
  }
  updateTask(newTask);
 }
/*--------------------------------------------------------------------------------- */
 const deleteTask = index =>{
  const newTask = [...task];
  newTask.splice(index,1);
  updateTask(newTask);
 }
/*--------------------------------------------------------------------------------- */
return(
  <React.Fragment>
    <h1>To Do List...!</h1>
    <div className='taskList'>
      {task.map((work,index) => (           //map--> work with index oda map pannum,
        <div className='taskStatus'>
          <span onClick={()=>MoveTo(index)} className={work.isDone? "completedTask":"taskName"}> {/* work --> task*/}
          {work.text}  
          </span>
          <button className='delete-btn' onClick={() => deleteTask(index)}> - </button>
        </div> 
        ))}   
        <InsertTask addTask={addTask}/>
    </div>
  </React.Fragment>
 )
}
ReactDOM.render(<ToDoList/>,document.getElementById('root'));