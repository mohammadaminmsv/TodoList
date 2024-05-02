import CheckCircleIcon from '@mui/icons-material/CheckCircle';


interface formTodo {
    input : string
    setInput : (input : string) => void
    createTodo : (e : React.FormEvent<HTMLFormElement>)=>void
}

const Form : React.FC<formTodo>= ({createTodo , input , setInput} : formTodo) => {
  return (
    <div>
        <form  onSubmit={createTodo} className='flex justify-between bg-teal-300 p-4 rounded-lg items-center'>
            <input 
            value={input} 
            onChange={(e)=>setInput(e.target.value)}
            className='w-4/5 rounded-md'
            />
            <button className='ml-2 rounded-lg text-gray-800'>
                <CheckCircleIcon />
            </button>
        </form>
    </div>
  )
}

export default Form
