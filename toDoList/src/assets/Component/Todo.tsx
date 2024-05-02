import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { TodoType } from '../../Text';

interface TodoProps {
    todos :TodoType
    deleteTodo:(id : string)=> void
    toggleComplete : (todo:TodoType)=>void
}

const Todo = ({todos , deleteTodo , toggleComplete} : TodoProps) => {
  return (
    <li className="p-2 bg-teal-300 my-2 rounded-md shadow-sm">
        <div className='flex items-center justify-between'>
            <p className={todos.completed ? "text-gray-700 cursor-pointer opacity-20 line-through" : "text-gray-700 cursor-pointer"}>
                {todos.text}
            </p>
            <div className='flex gap-3'>
                <button onClick={()=>toggleComplete(todos)}>
                    <CheckCircleIcon/>
                </button>
                <button onClick={()=>deleteTodo(todos.id)}>
                    <DeleteForeverIcon/>
                </button>
            </div>
        </div>
    </li>
  )
}

export default Todo