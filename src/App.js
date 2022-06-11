import React , {useState , useEffect} from 'react';

// import Components
import AddGoal from './AddGoal';


//import Style
import './Style/Card.css'

const Dummy = [
  {
    input: "Add Goal",
    value: Math.random()
  }
]


function App() {

  const [EnteredInput , setEnteredInput] = useState(Dummy)

  const GetInputHandler = (e) => {
    setEnteredInput((prevInput) => {
      console.log([e , ...prevInput])
      return [e , ...prevInput]
    })
  }

  const deleteHandler = (e) => {
    const NewInput = EnteredInput.filter(item => item.value !== e)

    setEnteredInput(NewInput)

  }

  return(
    <>

    <AddGoal GetInput = {GetInputHandler}/>
    
    {EnteredInput.map(item => <div className='card'><p className='CardP'>{item.input}</p> <button className='button' onClick={() => deleteHandler(item.value)}>delete</button></div>)}

    </>
  )
  
}

export default App;
