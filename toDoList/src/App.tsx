import { FormEvent, FormEventHandler, useEffect, useState } from "react"
import Form from "./assets/Component/Form"
import Todo from "./assets/Component/Todo"
import { collection,addDoc, deleteDoc, onSnapshot , doc, query, QuerySnapshot, updateDoc } from "firebase/firestore"
import { db } from "./assets/Component/Firebase"
import { Input } from "@mui/material"


interface TodoType{
  text? : string 
  completed? :boolean
  id : string
}


const App = () => {
  const [todo,setTodo]= useState<TodoType[]>([])
  const [input , setInput] = useState('')

  //Create TODO
  const createTodo  = async (e:FormEvent<HTMLInputElement>)=>{
    e.preventDefault()
    if(input === ""){
      alert('please fill')
      return
    }
    await addDoc(collection(db , "todos") , {
      text : input , 
      completed : false
    })
    setInput('')
  }


  //Read TODO
  useEffect(()=>{
    const q = query(collection(db , "todos"))
    const unsubscribe = onSnapshot(q , 
      (QuerySnapshot) =>{
        const todoArr : TodoType[] =[]
        QuerySnapshot.forEach((doc)=>{
          todoArr.push({...doc.data(),id : doc.id})
        })
        setTodo(todoArr)
      }
      )
      return () => unsubscribe()
  },[])
  //Update TODO
  
  const toggleComplete = async(todo:TodoType)=>{
      await updateDoc(doc(db, "todos", todo.id), {
        completed: !todo.completed
      });

}

  //Delete TODO
  const deleteTodo = async(id:string)=>{
    await deleteDoc(doc(db,"todos",id))
  }
  console.log(todo.map((item)=>item.completed))
  return (
    <div className="h-screen w-screen p-4 bg-teal-300 overflow-y-scroll">
      <div className="bg-slate-100 max-w-[500px] w-full m-auto rounded-md shadow-xl p-4">
          <h1 className="text-3xl font-bold text-center text-gray-800 p-2">A Dev's TODO List</h1>
          <Form createTodo={createTodo} input={input} setInput={setInput}/>
          <ul>
            {todo.map((todos,index)=>(
              <Todo key={index} 
              todos={todos} 
              deleteTodo={deleteTodo}
              toggleComplete={toggleComplete}
              />
            ))}
            <p className="text-center">{`You Have  things to complete`}</p>
          </ul>
      </div>
    </div>
  )
}

export default App